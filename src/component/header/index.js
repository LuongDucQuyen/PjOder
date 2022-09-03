import React from 'react';
import "./index.css";
import Logo from '../../assets/Logo.svg';
import IconMenu from '../../assets/IconMenu.svg';
const Headder = ()=>{
    return(
        <div className="headder-container">
            <div className="headder-logo">
                <img src={Logo}/>
                <h1>TeraLab</h1>
            </div>
            <div className="headder-MenuGroup">
                <div className="headder-MenuIcon">
                    <img src={IconMenu}/>
                </div>
                <button>EN</button>
            </div>
        </div>
    )
}
export default Headder;