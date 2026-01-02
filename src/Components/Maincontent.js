

import Image1 from '../assets/image_1.jpg';
import "../App.css"
function MainContent() {
  return (
    <div style={{ "width": "100%" }}>
      <img src={Image1} alt="bg_image" className='main_image' />
    </div>
  )
}

export default MainContent;