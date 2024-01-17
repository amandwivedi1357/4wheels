import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBooking, getBookingsData } from "../../../redux/actions/Booking.action";
import "./UserData.css"; 
import UserDetailsModal from "../Modals/Bookings/UserDetailModal";
import { FcViewDetails } from "react-icons/fc";
import { AiFillDelete } from "react-icons/ai";

export default function UserData() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUserDetails, setSelectedUserDetails] = useState(null);
  const userData = useSelector((state) => state.booking);
  
  
  useEffect(() => {
    dispatch(getBookingsData());
  }, [dispatch]);

  const handleShowUserDetails = (userDetails) => {
    setSelectedUserDetails(userDetails);
    setIsModalOpen(true);
  };

  const handleDeleteUser = (userId) => {
    dispatch(deleteBooking(userId))
    console.log(`Deleting user with ID: ${userId}`);
  };
// const handleStatusToggle = (user) => {
//     // Assuming 'status' is a property in each 'user' object
//     const updatedUser = { ...user };
//     updatedUser.status = user.status === "Pending" ? "Confirmed" : "Pending";
//     // Perform action to update user status in your Redux store or API
//     // dispatch(updateUserStatus(updatedUser)); // Dispatch action to update status in Redux store
//   };
  return (
    <div>
      <h1 className="heading">User Data</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact Number</th>
            <th>Action</th>
            <th>More Details</th>
          </tr>
        </thead>
        <tbody>
          {userData.bookings.map((user) => (
            <tr key={user._id}>
              <td className="data">{user.name}</td>
              {/* <td className="data">{user.emailId}</td> */}
              <td className="data">{user.contactNo}</td>
              
              <td>
                <button className="delete-btn" onClick={() => handleDeleteUser(user._id)}><AiFillDelete /></button>
              </td>
              <td>
              <button className="detail-btn" onClick={() => handleShowUserDetails(user)}><FcViewDetails /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <UserDetailsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} userDetails={selectedUserDetails} />
    </div>
  );
}
