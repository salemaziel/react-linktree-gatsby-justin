import React from 'react'
import '../css/circulardropdown.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faCloud, faBell, faAnchor, faChartArea, faBars } from "@fortawesome/free-solid-svg-icons"


const Circulardropdown = () => (

    <div className="center-menu">
        <label className="menu-button" htmlFor="menu-open" aria-hidden="true"><span className="fa fa-bars fa-2x" /><FontAwesomeIcon icon={faBars} /></label>
            <input className="menu-open" id="menu-open" type="checkbox" aria-hidden="true" />
                <nav className="menu" role="navigation">
                    <a href="#" className="icon fa fa-camera"><FontAwesomeIcon icon={faCamera} />Camera</a>
                    <a href="#" className="icon fa fa-cloud"><FontAwesomeIcon icon={faCloud} />The Cloud</a>
                    <a href="#" className="icon fa fa-bell"><FontAwesomeIcon icon={faBell} />Alerts</a>
                    <a href="#" className="icon fa fa-anchor"><FontAwesomeIcon icon={faAnchor} />Shipyards</a>
                    <a href="#" className="icon fa fa-area-chart"><FontAwesomeIcon icon={faChartArea} />Stats</a>
                </nav>
    </div>
)

export default Circulardropdown



