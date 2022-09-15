import React from 'react'
import { Link } from 'react-router-dom';
import { Puppy } from '../types'
import './PuppiesList.css'

interface IPuppyList {
    puppies: Puppy[];
}

const PuppiesList = ({puppies} : IPuppyList) => {
  return (
    <div  className="puppiesList-container" >
      {
        puppies.map((puppy) =>(
          
          <Link to={`/puppy/${puppy.id}`} key={puppy.id} className='puppieslist-card'>
      
            <img src={puppy.icon_url} height="100px" width="100px" />
            <h2 className="puppieslist-text" >{puppy.pet_name}</h2>
          </Link>  
         )
        )
      }
    
    </div>
    
  )
}

export default PuppiesList