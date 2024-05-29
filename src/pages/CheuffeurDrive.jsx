
import BottomSection from '../components/CheuffeurDrive/BottomSection'
import CheuffeurTopSection from '../components/CheuffeurDrive/TopSection'
import Footer from '../components/Footer'

const CheuffeurDrive = () => {
  return (
    <div>
      <CheuffeurTopSection topic={'Our chauffeur collections'} subTopic={'Experience luxury and comfort with our professional chauffeur services at your doorstep.'}/>
      <BottomSection/>
      <Footer/>
    </div>
  )
}

export default CheuffeurDrive
