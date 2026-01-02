import React from 'react'
import Header from '../../header'
import Sidebar from '../../Sidebar'
import "./error.css"
import { useNavigate } from 'react-router-dom'



const Error = () => {
    const navigate = useNavigate();

    return (
        <div className="App" >
            <Header />
            <div style={{ "display": "flex", "width": "100%", "height": "100%" }} >
                <Sidebar />
                <div className='aboutBox'>
                    <div className='topbar'>


                    </div>
                    <h2 className='mainDiv'>
                        404 page not found
                    </h2>

                    <button onClick={() => {
                        navigate("/")
                    }}> Move to homepage</button>


                </div>
            </div>

        </div>)
}

export default Error