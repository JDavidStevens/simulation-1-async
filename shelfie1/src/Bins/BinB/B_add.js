import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import logo from '../../logo.png';
import '../add.css';

export default class B_add extends Component{
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
       return axios.get(`/api/product_b/${this.props.match.params.id}`).then(response=>{
            this.setState({item:response.data[0]})
        })
    }

    updateBin(name,price){
        axios.put(`/api/product_b/${this.props.match.params.id}`,{product_name:name,price:price})
        .then(results=>{this.setState({item:results.data[0]})})
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
               <Link to='/bravo' className="add-title"> <h1 >Shelf B</h1></Link>
                <h1 className="add-number" >Add to Bin {this.props.match.params.id}</h1>
                </header>
                <h3 className="input-title">Name</h3>
                <input type="text" className="add-input" onChange={e=>this.handleUpdateName(e.target.value)}/>
                
                
                <h3 className="input-title">Price</h3>
                <input className="add-input" type="text" placeholder="$0.00" onChange={e=>this.handleUpdatePrice(e.target.value)}/>
                <br/>
                <Link to ='/bravo'><button className="add-button" onClick={()=>this.updateBin(this.state.name,this.state.price)}><h1 className="add-button-text">+ Add Inventory</h1></button></Link>
                
                </div>
        )
    }
}