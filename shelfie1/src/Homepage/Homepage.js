// import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
// import logo from '../logo.png';
// import './Homepage.css';


// export default class Homepage extends Component{

//     render(){
//         return(
//             <div className="homepage">
//                 <header className='logo-banner'>
//                 <img src={logo} className='home-logo' alt="logo"/>
//                 <h1 className="home-title" >SHELFIE</h1>
//                 </header>
//                 <div className="homepage-buttons">
//                 <br />
//                 <Link to='/alpha'><button className="home-page-button"><h3 className="homepage-button-text">Shelf A</h3></button></Link>
//                 <br/>
//                 <Link to ='/bravo'><button className="home-page-button"><h3 className="homepage-button-text">Shelf B</h3></button></Link>
//                 <br/>
//                 <Link to='/charlie'><button className="home-page-button"><h3 className="homepage-button-text">Shelf C</h3></button></Link>
//                 <br/>
//                 <Link to='/delta'><button className="home-page-button"><h3 className="homepage-button-text">Shelf D</h3></button></Link>
//                 </div>

//             </div>
//         )
//     }
// }

//Revised Sketch

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import './Homepage.css';


export default class Homepage extends Component{

    render(){
        return(
            <div className="homepage">
                <header className='logo-banner'>
                <img src={logo} className='home-logo' alt="logo"/>
                <h1 className="home-title" >SHELFIE</h1>
                </header>
                <div className="homepage-buttons">
                <br />
                <Link to='/shelf/A'><button className="home-page-button"><h3 className="homepage-button-text">Shelf A</h3></button></Link>
                <br/>
                <Link to ='/shelf/B'><button className="home-page-button"><h3 className="homepage-button-text">Shelf B</h3></button></Link>
                <br/>
                <Link to='/shelf/C'><button className="home-page-button"><h3 className="homepage-button-text">Shelf C</h3></button></Link>
                <br/>
                <Link to='/shelf/D'><button className="home-page-button"><h3 className="homepage-button-text">Shelf D</h3></button></Link>
                </div>

            </div>
        )
    }
}