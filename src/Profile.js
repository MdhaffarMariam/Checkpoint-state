import React, { Component } from 'react'
import FullName from './profile/fullname/FullName'
import Bio from './profile/bio/Bio'
import Profession from './profile/profession/Profession'

export default class Profile extends Component {
   
    constructor(props) {
        super(props)
      
        this.state = {
          count: 0 ,
          memory: null
        }
      }
    
    
       componentDidMount () {
         this.setState ({ memory :setInterval (()=> {this.increment()}, 1000) 
       })};
    
       componentWillUnmount () {
         clearInterval(this.state.memory) 
       };
    
    
      increment = () => {
    this.setState ({ count : this.state.count +1});
    
      };
      
    
  render() {
    const tennis = {
        FullName : 'Ons Jabeur' ,
        bio: 'Ons Jabeur (arabe : أنس جابر), née le 28 août 1994 à Ksar Hellal, est une joueuse de tennis tunisienne, professionnelle depuis 2012, classée numéro 2 mondiale par la WTA en juin 2022.',
        profession : 'Joueuse de tennis' 
      }
      const handleName=(name)=>alert(`my name is ${name}`)
    return (
      <div className='tout'>
        <FullName ons = {tennis} jabeur ={handleName}/>
    <Bio biblio={tennis}/>
    <Profession prof = {tennis}/>
        <p className="counter">{this.state.count}</p>
      </div>
    )
  }
}
