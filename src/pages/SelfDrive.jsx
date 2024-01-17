
import SelfDriveBottom from '../components/SelfDrive/SelfDriveBottom'
import SelfTop from '../components/SelfDrive/SelfTop'
import Footer from '../components/Footer'

const SelfDrive = () => {
  return (
    <div>
      <SelfTop topic={'Self Drive'} subTopic = {''}/>
      <SelfDriveBottom/>
      <Footer/>
    </div>
  )
}

export default SelfDrive
