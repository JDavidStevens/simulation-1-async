// import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
// import axios from 'axios';
// import './Shelf.css';
// import logo from '../logo.png';

// export default class ShelfA extends Component{

// constructor(){
//     super()
//     this.state={
//         bin:[]
//     }
// }

// componentDidMount(){
//     axios.get('/api/products_a').then(response=>{
//         this.setState({bin: response.data})
//     })
// }

//     render(){

//         let products=this.state.bin.map((element,index)=>{
//             if(element.product_name===null){
//                 return <Link key={index} to ={`/aadd/${element.id}`}><button  className="bin-no-inv-button">+ Add Inventory</button></Link>
//               }else{ 
//               return <Link key={index} to = {`/ainventory/${element.id}`}><button key="element.id" className="bin-with-inv-button">Bin {element.id}</button></Link>}
               
//           })
            
                
            
//         return(
//             <div>
//                 <header className='shelf-banner'>
//                <Link to ='/'><img src={logo} className='shelf-logo' alt="logo"/></Link>
//                 <h1 className="shelf-title">Shelf A</h1>
//                 </header>
//                 {products}                
//             </div>
//         )
//     }
// }


//Revised sketch

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Shelf.css';
import logo from '../logo.png';

export default class Shelf extends Component{

constructor(){
    super()
    this.state={
        products:[]
    }
}

componentDidMount(){
    axios.get(`/api/products/${this.props.match.params.shelf}`).then(response=>{
        console.log(response)
        this.setState({products: response.data})
    })
}

    render(){

        let products=this.state.products.map((element,index)=>{
            if(element.product_name===null){
                return <Link key={index} to ={`/add/${this.props.match.params.shelf}/${element.bin_id}`}><button  className="bin-no-inv-button">+ Add Inventory</button></Link>
              }else{ 
              return <Link key={index} to = {`/inventory/${this.props.match.params.shelf}/${element.bin_id}`}><button key="element.id" className="bin-with-inv-button">Bin {element.bin_id}</button></Link>}
               
          })
            
                
            
        return(
            <div>
                <header className='shelf-banner'>
               <Link to ='/'><img src={logo} className='shelf-logo' alt="logo"/></Link>
                <h1 className="shelf-title">Shelf {this.props.match.params.shelf}</h1>
                </header>
                {products}                
            </div>
        )
    }
}
