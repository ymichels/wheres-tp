import React from 'react';
import './WelcomePage.css';
import TpRoll from '../../images/TpRoll.jpg';

function WelcomePage(props) {
    return (
        <div className="WelcomePage">
            <h1
                className="title"
            >
                Where's  TP?
            </h1>
            <div 
                className="image-div"
                onClick={() => props.history.push('level-select')}
            >
                <img src={TpRoll} alt="Img"/>
            </div>
            
        </div>
    );
}

export default WelcomePage;
