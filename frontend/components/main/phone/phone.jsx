import React from 'react'
import ReactDOM from 'react-dom'

class Phone extends React.Component {

    render() {
        return (
            <div className="phone-container">
                <video className="phone" autoPlay loop muted preload="auto">
                    <source src={window.phonescreen} type="video/mp4" />
                </video>

                <div className="phone-frame-div">
                    <img className="phone-frame" src={window.mainpagephone} />
                </div> 

            </div>
        );
    }
}

export default Phone;