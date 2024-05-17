import quote from "../assets/home/quote.svg";

export default function Test2() {
    const second_car_data = [
        {
          id: 1,
          
          test:'On a memorable occasion, my family and I had the pleasure of traveling with 4 Wheel Travels. With a group of 25 people, we enjoyed a 10-hour journey in a minibus. Despite minor issues, the staff provided excellent service. Heartfelt thanks to S.M. Jain and the 4 Wheel Travels team for the wonderful experience.',
          user:'Life Insurance Corporation Of India'
        },
        {
          id: 2,
          
          test:'The vehicle arrived on time, and the service from the 4 Wheel team was excellent including the driver. The vehicle was in great condition, and the air conditioning worked perfectly despite the hot weather. I plan to become a regular customer and recommend 4 Wheel Travels to others.',
          user:'Afsar Hussain (Naj Soft pvt Ltd)'
        },
        {
          id: 3,
          
          test:'A big thank you to Mr. S.M. Jain and the 4 Wheel Travels team for making our family function a grand success. Their exceptional service and round-the-clock assistance were greatly appreciated. Special thanks to Mr. Rambabu and Babu for their dedication.I wish you all the success in future.',
          user:'Yogesh Agarwal (Agarwal Global Steels Limited)'
        },
      ];
      const animate_data = [
        {
          id: 1,
          text: "Happy Customers",
          numbers: "1.2M",
        },
        {
          id: 2,
          text: "Total Transactions",
          numbers: "1L",
        },
        {
          id: 3,
          text: "Kilometers of Service",
          numbers: "1.2M",
        },
        {
          id: 4,
          text: "Years of Experience",
          numbers: "42",
        },
      ];
  return (
    <div className="test1_main" >
   <div className="main_test_cont">
            <div className="left_test">
              <img src="images/test1.png" alt="" className="test_img"/>
            </div>
            <div className="right_test">
              <div className="quote_cont">
            <img  src={quote} alt="" className="quote"/>
            <p className="cust_text">The vehicle arrived on time, and the service from the 4 Wheel team was excellent including the driver. The vehicle was in great condition, and the air conditioning worked perfectly despite the hot weather. I plan to become a regular customer and recommend 4 Wheel Travels to others.</p>

            <p style={{textAlign:'left',margin:'2rem 1rem 0rem 0rem',padding:'0',display:"flex"}}>
              {animate_data.map((data)=>(
                <svg key={data.id} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Star" clipPath="url(#clip0_5889_3879)">
                <path id="Vector" d="M13.0607 14.9549C12.5525 15.3346 9.29213 12.9274 8.66769 12.9221C8.04325 12.9169 4.74613 15.2687 4.24393 14.8804C3.74172 14.4921 4.92238 10.504 4.73423 9.8811C4.54608 9.25816 1.38929 6.70414 1.58704 6.08444C1.78482 5.46473 5.77491 5.40717 6.28305 5.02743C6.79118 4.64772 8.13733 0.717416 8.76181 0.722661C9.38621 0.727952 10.6715 4.68047 11.1737 5.06875C11.6759 5.45698 15.6647 5.58195 15.8529 6.20489C16.041 6.82783 12.8453 9.32822 12.6475 9.94792C12.4498 10.5676 13.5688 14.5751 13.0607 14.9549Z" fill="#FFC444"/>
                </g>
                <defs>
                <clipPath id="clip0_5889_3879">
                <rect width="15.2494" height="16" fill="white" transform="translate(0.625)"/>
                </clipPath>
                </defs>
                </svg>
              ))}
              </p>
              <p className='cust_name'>Afsar Hussain (Naj Soft pvt Ltd)</p>
              </div>

            </div>
          </div>
  </div>
  )
}
