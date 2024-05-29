
import SelfDriveBottom from '../components/SelfDrive/SelfDriveBottom'
import SelfTop from '../components/SelfDrive/SelfTop'
import Footer from '../components/Footer'

const SelfDrive = () => {
  return (
    <div>
      <SelfTop topic={'Our self drive collections'} subTopic = {'Driving your dreams to reality with an exquisite fleet of versatile vehicles for unforgettable journeys.'}/>
      <SelfDriveBottom/>
      <Footer/>
    </div>
  )
}

export default SelfDrive
