import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import './Shelf.css';

export default class ShelfD extends Component{
    render(){
        return(
            <div>
               <header className='shelf-banner'>
               <Link to ='/'><img src={logo} className='shelf-logo' alt="logo"/></Link>
                <h1 className="shelf-title">Shelf D</h1>
                </header>
            </div>
        )
    }
}