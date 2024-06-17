
import Footer from '../components/Footer'
import BottomSectionGallery from '../components/Gallery/BottomSectionGallery'
import BottomSectionSelfGallery from '../components/Gallery/BottomSectionSelfGallery'
import TopSectionGallery from '../components/Gallery/TopSectionGallery'

const Gallery = () => {
  return (
    <div>
      <TopSectionGallery/>
      <BottomSectionGallery/>
      {/* <BottomSectionSelfGallery/> */}
      <Footer/>
    </div>
  )
}

export default Gallery
