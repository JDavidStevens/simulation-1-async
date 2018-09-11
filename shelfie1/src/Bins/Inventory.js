import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './inventory.css';
import logo from './../logo.png';

export default class Inventory extends Component{
    constructor(){
        super()
        this.state={
            item:{},
            name:'',
            price:'',
            disabled: true
        }
        this.handleEdit=this.handleEdit.bind(this);
        this.handleUpdate=this.handleUpdate.bind(this);
    }

    componentDidMount(){
       return axios.get(`/api/product/${this.props.match.params.shelf}/${this.props.match.params.bin}`).then(results=>{
            this.setState({name:results.data[0].product_name, price: results.data[0].price})
            

        })
     }

     handleEdit(){
         this.setState({disabled:false})
     }

     updateName(value){
         this.setState({name:value})
        }

     updatePrice(value){
         this.setState({price:value})
     }
    
     handleUpdate(name,price){
         console.log(name,price);
        return axios.put(`/api/product/${this.props.match.params.shelf}/${this.props.match.params.bin}/`,{product_name:name,        price:price})
            .then(results=>{
                this.setState({item:results.data[0],disabled:true})
                 
            
        })
    }

    deleteProduct(){
        axios.delete(`/api/product/${this.props.match.params.shelf}/${this.props.match.params.bin}`).then(results => 
        this.setState({item:results.data[0]}))
    }

    render(){
        return(

            <div>
                <header className='inventory-banner'>
               <Link to ='/'><img src={logo} className='inventory-logo' alt="logo"/></Link>
               <Link to = {`/shelf/${this.props.match.params.shelf}`} className="title-holder"> <h1 className="inventory-title">Shelf {this.props.match.params.shelf}</h1></Link>
                <h1 className="inventory-number" >Bin {this.props.match.params.bin}</h1>
                </header>
                <div className="page-container">
                <div className="image-container">
                    <img className="product-image" src= {this.state.item.img} alt="pic"/>
                </div>
                
                    { (this.state.disabled)?(
                    <div>
                        <h3 className="product-input-title">Name</h3>
                        <input className="inventory-input" disabled value={this.state.name}/>
                        <br/>
                        <h3 className="product-input-title">Price</h3>
                        <input className="inventory-input" disabled value= {this.state.price}/>
                        <br/>
                        <div className="button-container">
                        <button className='edit-button' onClick={this.handleEdit}>EDIT</button>
                        <Link to={`/shelf/${this.props.match.params.shelf}`}><button className='delete-button' onClick={()=>this.deleteProduct(this.props.match.params.shelf,this.props.match.params.bin)}>DELETE</button></Link>
                        </div>
                    </div>
                    ):(
                    <div>
                        <h3 className="product-input-title">Name</h3>
                        <input className="inventory-input" value={this.state.name} onChange={e=>this.updateName(e.target.value)}/>
                        <br/>
                        <h3 className="product-input-title" >Price</h3>
                        <input className="inventory-input" value={this.state.price} onChange={e=>this.updatePrice(e.target.value)}/>
                        <br/>
                        <div className="button-container">
                        <button className="save-button" onClick={()=>this.handleUpdate(
                            this.state.name, this.state.price)} 
                            >SAVE</button>
                           <Link to={`/shelf/${this.props.match.params.shelf}`}> <button className='delete-button' onClick={()=>this.deleteProduct(this.props.match.params.shelf,this.props.match.params.bin)}>DELETE</button></Link>
                            </div>
                        </div>)}
                 </div>  
                </div>
            )
        }
    }
                            
                            
                    
    
                    
                            