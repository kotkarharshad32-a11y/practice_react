import Header from '../../../header'
import "./Lists.css"
import upmrcLogo from "../../../../assets/UPMRC image.jpg"
import stationList from "../../../../assets/station_list.json"
const Lists = () => {




    return (
        <div className="App" >
            <Header />
            <div >

                <div className='listCarrierBox' >
                    <div className='topbar'>

                    </div>
                    <div className='listMainDiv'   >
                        {stationList.map((station) => {
                            return (
                                <div key={station.id} className='stationBox'>
                                    <img src={upmrcLogo} alt="upmrc logo" style={{"height":"70px","width":"80px"}}/>
                                    <h2> {station.station_name}</h2> </div>)
                        })}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Lists