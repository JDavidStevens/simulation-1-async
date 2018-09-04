import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../inventory.css';
import logo from '../../logo.png';

export default class InventoryD extends Component{
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
        this.revert=this.revert.bind(this);
    }

    componentDidMount(){
       return axios.get(`/api/product_d/${this.props.match.params.id}`).then(results=>{
            this.setState({item:results.data[0]})
            

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
         
         console.log("pre-axios:", name, price)

            axios.put(`/api/product_d/${this.props.match.params.id}/`,{product_name:name, price:price})
            .then(results=>{
                
            this.setState({item:results.data[0]})
        })
        
    }

    revert(){
        this.setState({disabled:true})
    }

    deleteProduct(id){
        axios.delete(`/api/product_d/${id}`).then(results => 
        this.setState({item:results.data[0]}))
    }

    render(){
        return(

            <div>
                <header className='inventory-banner'>
               <Link to ='/'><img src={logo} className='inventory-logo' alt="logo"/></Link>
               <Link to = '/delta' className="inventory-title"> <h1 className="inventory-title">Shelf D</h1></Link>
                <h1 className="inventory-number" >Bin {this.props.match.params.id}</h1>
                </header>
                <div className="page-container">
<div className="image-container">
    <img className="product-image" src= {this.state.item.img} 
    alt="pic"/>
</div>
                
               { (this.state.disabled)?(
                    <div>
                        <h3 className="product-input-title">Name</h3>
                        <input className="inventory-input" disabled value={this.state.item.product_name}/>
                        <br/>
                        <h3 className="product-input-title">Price</h3>
                        <input className="inventory-input" disabled value= {this.state.item.price}/>
                        <br/>
                        <div className="button-container">
                        <button className='edit-button' onClick={this.handleEdit}>EDIT</button>
                        <Link to='/delta'><button className='delete-button' onClick={()=>this.deleteProduct(this.props.match.params.id)}>DELETE</button></Link>
                        </div>
                    </div>
                    ):(
                    <div>
                        <h3 className="product-input-title">Name</h3>
                        <input className="inventory-input" onChange={e=>this.updateName(e.target.value)}/>
                        <br/>
                        <h3 className="product-input-title">Price</h3>
                        <input className="inventory-input" onChange={e=>this.updatePrice(e.target.value)}/>
                        <br/>
                        <div className="button-container">
                        <button className="save-button" onClick={()=>this.handleUpdate(
                            // this.props.match.params.id,
                            this.state.name, this.state.price)} 
                        
                        >SAVE</button>
                       <Link to='/delta'> <button className='delete-button' onClick={()=>this.deleteProduct(this.props.match.params.id)}>DELETE</button></Link>
                        </div>
                        
                    </div>)}
                </div>  
            </div>
        )
    }
}

