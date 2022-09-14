import React, { useEffect, useState } from 'react'
import {Link, useParams,useNavigate} from 'react-router-dom'
import { Puppy } from '../types';

interface IPuppyDetails {
    puppies:Puppy[];
    deletePuppy:(id:number) => void;
    message:string;
    flag:boolean;

}

const PuppyDetails = ({puppies,deletePuppy,message,flag} : IPuppyDetails) => {
    
    const {id } = useParams();
    const navigate = useNavigate();

    const puppy =  puppies.find((puppy : Puppy) =>
        puppy.id === Number(id)
    )

    const handleDelete =  (id : any) =>{
      deletePuppy(id);
    }


  return (
    <>
      <div className='puppydetails-container'>

        <Link to={"/"}> Home

        </Link>
        {message}       

        <h3>{puppy?.pet_name}</h3>
        <h3>{puppy?.breed_name}</h3>
        <h3>{puppy?.age}</h3>
        <h3>{puppy?.gender}</h3>

        { flag ? <button onClick= {() => handleDelete(puppy?.id)}>Delete</button> : "" }
    


      </div>
      
    </>
  )
}

export default PuppyDetails