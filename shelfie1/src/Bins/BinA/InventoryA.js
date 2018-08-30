import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import logo from '../../logo.png';

export default class InventoryA extends Component{
    constructor(){
        super()
        this.state={
            item:{}
        }
    }

    componentDidMount(){
        return axios.get(`/api/product_a/${this.props.match.params.id}`).then(response=>{
             this.setState({id:response.data})
         })
     }

    render(){
        return(
            <div>
                <header className='add-banner'>
               <Link to ='/'><img src={logo} className='add-logo' alt="logo"/></Link>
                <h1 className="add-title">Shelf A</h1>
                <h1 className="add-number" >Bin {this.state.id}</h1>
                </header>
                <h1>{this.state.item.product_name}</h1>
            </div>
        )
    }
}