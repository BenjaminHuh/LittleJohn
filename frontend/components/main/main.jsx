import React from 'react';
import NavbarContainer from "../navbar/navbar_container";


class Main extends React.Component {

    render() {
        return (
            <div className='main'>
                <header className='navbar'>
                    <h1>LittleJohn</h1>
                    <NavbarContainer/>
                </header>
                <body>
                    testing
                </body>
            </div>
        );
    }
}

export default Main;
