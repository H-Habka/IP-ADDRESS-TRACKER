import './FullPage.scss'
import { ReactComponent as Arrow } from '../../images/icon-arrow.svg'
import { useState, useEffect } from 'react'
import { getData } from '../../healper/FetchData'
import MapApi from '../MapApi/MapApi'



const FullPage = () => {

    const [details, setDetails] = useState({})
    const [IP, setIP] = useState('8.8.8.8')

    const handleInputChange = (e) => {
        setIP(e.target.value)
    }

    const handleSubmit = async () => {
        let respone = await getData(IP)
        setDetails(respone)
    }

    useEffect((IP) => {
        const getDetails = async (IP) => {
            let respone = await getData(IP)
            setDetails(respone)
        }
        getDetails(IP)
    }, [])


    return (
        <div className="page-container">
            <div className="header">
                <h2 className="title">IP Address Tracker</h2>

                <div className="input-filed-container">
                    <input className="input-filed" placeholder='Search for any IP address or domain' value={IP} onChange={handleInputChange} />
                    <div className="submit-button" onClick={handleSubmit}><Arrow /></div>
                </div>

                <div className="detail-container">
                    <div className="detalis">
                        <span className='details-title'>IP Address</span>
                        <span className='details-content'>{details?.ip}</span>
                    </div>
                    <div className="detalis">
                        <span className='details-title'>Location</span>
                        <span className='details-content'>{`${details?.location?.region}, ${details?.location?.country} ${details?.as?.asn}`}</span>
                    </div>
                    <div className="detalis">
                        <span className='details-title'>Timezone</span>
                        <span className='details-content'>{`UTC${details?.location?.timezone}`}</span>
                    </div>
                    <div className="detalis">
                        <span className='details-title'>ISP</span>
                        <span className='details-content'>{details?.isp}</span>
                    </div>
                </div>

            </div>
            <div className="mapContainer">
                <MapApi />
            </div>
        </div>
    )
}

export default FullPage