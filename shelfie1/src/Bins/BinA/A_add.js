import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import logo from '../../logo.png';
import '../add.css';

export default class A_add extends Component{
    constructor(){
        super()
        this.state={
            item:{},
            id:'',
            name:'',
            price:''
        }

    }

    componentDidMount(){
       return axios.get(`/api/product_a/${this.props.match.params.id}`).then(response=>{
            this.setState({item:response.data})
        })
    }

    updateBin(id,name,price){
        axios.put(`/api/product/${id}`,{name,price}).then(results=>{this.setState({item:results.data})})
    }
    

    handleUpdateName(value){
        this.setState({name:value})
    }

    handleUpdatePrice(value){
        this.setState({price:value})
    }

    render(){
        return(
            <div>
                <header className='add-banner'>
               <Link to ='/' className='add-logo'><img src={logo}  alt="logo"/></Link>
               <Link to='/alpha' className="add-title"> <h1 >Shelf A</h1></Link>
                <h1 className="add-number" >Add to Bin {this.props.match.params.id}</h1>
                </header>
                <h3 className="input-title">Name</h3>
                <input className="add-input" onChange={e=>this.handleUpdateName(e.target.value)}/>
                
                
                <h3 className="input-title">Price</h3>
                <input className="add-input" placeholder="0.00" onChange={e=>this.handleUpdatePrice(e.target.value)}/>
                <br/>
                <Link to ='/alpha'><button className="add-button" onClick={()=>this.updateBin(this.state.item.id,this.state.name,this.state.price)}><h1 className="add-button-text">+ Add Inventory</h1></button></Link>
                
                </div>
        )
    }
}