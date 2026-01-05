import Header from '../../../header'
import "./Lists.css"
import stationList from "../../../../assets/station_list.json"
const Lists = () => {




    return (
        <div className="App" >
            <Header />
            <div style={{
                "display": "grid",
                "gridtamplatecolumns": "30%",
                "height": "100%"
            }} >

                <div className='carrierBox'>
                    <div className='topbar'>

                    </div>
                    <div className='mainDiv'>
                        {stationList.map((station) => {
                            return (
                                <div key={station.id} className='stationBox'>
                                    <h2> {station.station_name}</h2> </div>)
                        })}
                    </div>




                </div>
            </div>

        </div>
    )
}

export default Lists