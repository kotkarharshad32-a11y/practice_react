import React from 'react'
import Header from '../../header'
import "./About.css"



const About = () => {
    return (
        <div className="App" >
            <Header />
            <div style={{ "display": "flex", "width": "100%", "height": "100%" }} >
                <div className='aboutBox'>
                    <div className='topbar'>

                    </div>
                    <div className='mainDiv'><p>Hello world!</p>
                    </div>



                </div>
            </div>

        </div>)
}

export default About