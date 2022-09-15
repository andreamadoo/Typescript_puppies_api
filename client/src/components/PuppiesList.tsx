import React from 'react'
import { Link } from 'react-router-dom';
import { Puppy } from '../types'

interface IPuppyList {
    puppies: Puppy[];
}

const PuppiesList = ({puppies} : IPuppyList) => {
  return (
    <div  className="puppiesList-container" >
      <div className='puppieslist-header'>PuppiesList</div>
      {
        puppies.map((puppy) =>(
          <Link to={`/puppy/${puppy.id}`} key={puppy.id}>
            <img src={puppy.icon_url} height="100px" width="100px" />
            <h2 >{puppy.pet_name}</h2>
          </Link>      
         )
        )
      }
    
    </div>
    
  )
}

export default PuppiesList