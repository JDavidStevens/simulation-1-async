import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import logo from './../logo.png';
import './add.css';

export default class A_add extends Component{
    constructor(){
        super()
        this.state={
            item:{},
            name:'',
            price:'',
            img:''
        }

    }

    componentDidMount(){
       return axios.get(`/api/product/${this.props.match.params.shelf}/${this.props.match.params.bin}`).then(response=>{
            this.setState({item:response.data[0]})
        })
    }

    updateBin(name,price,img){
        axios.post(`/api/product/${this.props.match.params.shelf}/${this.props.match.params.bin}`,{product_name:name,price:price,img:img})
        .then(results=>{this.setState({item:results.data[0]})})
    }
    

    handleUpdateName(value){
        this.setState({name:value})
    }

    handleUpdatePrice(value){
        this.setState({price:value})
    }

    handleUpdateImage(value){
        this.setState({img:value})
    }

    render(){
        return(
            <div>
                <header className='inventory-banner'>
               <Link to ='/'><img src={logo} className='inventory-logo' alt="logo"/></Link>
               <Link to = {`/shelf/${this.props.match.params.shelf}`} className="inventory-title"> <h1 className="inventory-title">Shelf {this.props.match.params.shelf}</h1></Link>
                <h1 className="inventory-number" >Bin {this.props.match.params.bin}</h1>
                </header>
                
                <h3 className="input-title">Name</h3>
                <input type="text" className="add-input" onChange={e=>this.handleUpdateName(e.target.value)}/>
                
                
                <h3 className="input-title">Price</h3>
                <input className="add-input" type="text" placeholder="$0.00" onChange={e=>this.handleUpdatePrice(e.target.value)}/>

                <h3 className="input-title">Image</h3>
                <input className="add-input" type="text" placeholder="Image URL" onChange={e=>this.handleUpdateImage(e.target.value)}/>
                <br/>
                
                <Link to ={`/shelf/${this.props.match.params.shelf}`} ><button className="add-button" onClick={()=>this.updateBin(this.state.name,this.state.price,this.state.img)}><h1 className="add-button-text">+ Add Inventory</h1></button></Link>
                
                </div>
        )
    }
}