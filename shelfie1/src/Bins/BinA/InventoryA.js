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
       return axios.get(`/api/product_a/${this.props.match.params.id}`).then(results=>{
           console.log(results);
             this.setState({item:results.data[0]})
         })
     }

    render(){
        console.log(this.state);
        return(
            <div>

                <header className='add-banner'>
               <Link to ='/'><img src={logo} className='add-logo' alt="logo"/></Link>
               <Link to = '/alpha' className="add-title"> <h1 className="add-title">Shelf A</h1></Link>
                <h1 className="add-number" >Bin {this.state.item.id}</h1>
                </header>
                <h1>{this.state.item.product_name}</h1>
                <h1>{this.state.item.price}</h1>
            </div>
        )
    }
}