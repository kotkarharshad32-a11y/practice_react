import React from 'react'
import MainContent from "../Maincontent.js"
import Header from "../header.js"


const Dashboard = () => {
    return (
        <div className="App" >
            <Header />
            <div style={{ "display": "flex", "width": "100%", "height": "100%","overflow":"clip" }} >
                <MainContent />
            </div>

        </div>)
}
export default Dashboard