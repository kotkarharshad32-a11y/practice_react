import React from 'react'
import { useParams } from 'react-router-dom';
import Sidebar from '../../Sidebar';
import Header from '../../header';

const Report = () => {
  const { id } = useParams();

  return (
      <div className="App" >
            <Header />
            <div style={{ "display": "flex", "width": "100%", "height": "100%" }} >
                <Sidebar />
                <div className='carrierBox'>
                    <div className='topbar'>

                    </div>
                    <div className='mainDiv'>
                       {id}
                    </div>

                    

                </div>
            </div>

        </div>
  )
}

export default Report