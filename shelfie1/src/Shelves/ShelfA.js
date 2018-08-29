import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Shelf.css';
import logo from '../logo.png';

export default class ShelfA extends Component{
    render(){
        return(
            <div>
                <header className='shelf-banner'>
               <Link to ='/'><img src={logo} className='shelf-logo' alt="logo"/></Link>
                <h1 className="shelf-title">Shelf A</h1>
                </header>
            </div>
        )
    }
}

