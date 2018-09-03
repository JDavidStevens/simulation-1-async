import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './inventory.css';
import logo from '../../logo.png';

export default class InventoryA extends Component{
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
       return axios.get(`/api/product_a/${this.props.match.params.id}`).then(results=>{
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
    
     handleUpdate(id,name,price){
         console.log("pre-axios:", id,price)
            axios.put(`/api/product_a/${id}/`,{product_name:name,price:price},
        console.log("inner-axios:",id,price))
            
            .then(results=>{
                console.log('results :')
            this.setState({item:results.data})

            })
    }

    revert(){
        this.setState({disabled:true})
    }

    render(){
        return(

            <div>

                <header className='inventory-banner'>
               <Link to ='/'><img src={logo} className='inventory-logo' alt="logo"/></Link>
               <Link to = '/alpha' className="inventory-title"> <h1 className="inventory-title">Shelf A</h1></Link>
                <h1 className="inventory-number" >Bin {this.state.item.id}</h1>
                </header>

                
               { (this.state.disabled)?(
                    <div>
                        <input className="inventory-input" disabled value={this.state.item.product_name}/>
                        <br/>
                        <input className="inventory-input" disabled value={this.state.item.price}/>
                        <br/>
                        <div className="button-container">
                        <button className='edit-button' onClick={this.handleEdit}>EDIT</button>
                        <button className='delete-button'>DELETE</button>
                        </div>
                    </div>
                    ):(
                    <div>
                        <input className="inventory-input" onChange={e=>this.updateName(e.target.value)}/>
                        <br/>
                        <input className="inventory-input" onChange={e=>this.updatePrice(e.target.value)}/>
                        <br/>
                        <div className="button-container">
                        <button className="save-button" onClick={()=>this.handleUpdate(this.props.match.params.id, this.state.price)} 
                        // onClick={this.revert}
                        
                        >SAVE</button>
                        <button className='delete-button'>DELETE</button>
                        </div>
                        
                    </div>)}
                

                
               
            </div>
        )
    }
}

