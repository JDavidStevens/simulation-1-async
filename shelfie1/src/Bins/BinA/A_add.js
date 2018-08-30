import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../logo.png';

export default class A_add extends Component{
    constructor(){
        super()
        this.state={
            product:[],
            name:'',
            price:'',
        }
    }

    handleUpdateName(value){
        this.setState({name:value})
    }

    handleUpdatePrice(value){
        this.setState({price:value})
    }

    render(){
        let banner = this.state.product.map(element=>{
          return <h1>Add to Bin {element.id}</h1>  
        })

        return(
            <div>
                <header className='shelf-banner'>
               <Link to ='/'><img src={logo} className='shelf-logo' alt="logo"/></Link>
                <h1 className="shelf-title">Shelf A</h1>
                {banner}
                </header>
                <h4>Name</h4>
                <input onChange={e=>this.handleUpdateName(e.target.value)}/>
                
                
                <h4>Price</h4>
                <input value="$" placeholder="0.00" onChange={e=>this.handleUpdatePrice(e.target.value)}/>
                <br/>
                <button>+ Add Inventory</button>
                
                </div>
        )
    }
}