import React from 'react'
import Header from '../../header'
import "./carrier.css"



const Carrier = () => {
    return (
        <div className="App" >
            <Header />
            <div style={{ "display": "flex", "width": "100%", "height": "100%" }} >
                {/* <Sidebar /> */}
                <div className='carrierBox'>
                    <div className='topbar'>

                    </div>
                    <div className='mainDiv'>
                        <p> Hello world</p>
                    </div>



                </div>
            </div>

        </div>)
}

export default Carrier