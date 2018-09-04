import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import logo from '../logo.png';
import './Shelf.css';

export default class ShelfC extends Component{constructor(){
    super()
    this.state={
        bin:[]
    }
}

componentDidMount(){
    axios.get('/api/products_c').then(response=>{
        this.setState({bin: response.data})
    })
}

    render(){

        let products=this.state.bin.map((element,index)=>{
            if(element.product_name===null){
                return <Link key={index} to ={`/cadd/${element.id}`}><button  className="bin-no-inv-button">+ Add Inventory</button></Link>
              }else{ 
              return <Link key={index} to = {`/cinventory/${element.id}`}><button key="element.id" className="bin-with-inv-button">Bin {element.id}</button></Link>}
               
          })
            
                
            
        return(
            <div>
                <header className='shelf-banner'>
               <Link to ='/'><img src={logo} className='shelf-logo' alt="logo"/></Link>
                <h1 className="shelf-title">Shelf C</h1>
                </header>
                {products}                
            </div>
        )
    }
}

