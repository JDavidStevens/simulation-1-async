import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Shelf.css';
import logo from '../logo.png';

export default class ShelfA extends Component{

constructor(){
    super()
    this.state={
        bin:[]
    }
}

componentDidMount(){
    axios.get('/api/products_a').then(response=>{
        this.setState({bin: response.data})
    })
}

    render(){

        let products=this.state.bin.map(element=>{
            if(element.product_name===null){
                return <Link to ='/aadd'><button key="element.id" className="bin-no-inv-button">+ Add Inventory</button></Link>
              }else{ 
               return <button key="element.id" className="bin-with-inv-button">Bin {element.id}</button>}
               
          })
            
                
            
        return(
            <div>
                <header className='shelf-banner'>
               <Link to ='/'><img src={logo} className='shelf-logo' alt="logo"/></Link>
                <h1 className="shelf-title">Shelf A</h1>
                </header>
               
                {products}
                
                {/* <div className="shelfpage-div">{products[1]?
                   <button className="bin-with-inv-button"><h3 className="shelf-button-text">Bin {products.id}</h3></button>:<button className="bin-no-inv-button"><h3 className='shelf-button-text'>+ Add Inventory</h3></button>}</div> */}
            </div>
        )
    }
}

