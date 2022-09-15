import React, { useEffect, useState } from 'react'
import {Link, useParams,useNavigate} from 'react-router-dom'
import { Puppy } from '../types';
import './PuppyDetails.css';
import {AiFillEdit, AiFillHome ,AiFillDelete} from 'react-icons/ai'

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
      navigate('/');
    }


  return (
    <>
      <div className='puppydetails-container'>

        <Link to={"/"}> <button className='home-btn'>Home <AiFillHome className='home-icon' /> </button>

        </Link>
        <h5 className="puppydetails-message">{message}</h5>       
        <img src={puppy?.icon_url} height="200px" width="200px" className="puppydetails-image" />
        <div className="puppydetail-card">
          <h3 className="puppydetails-text-left">Name:  </h3>
          <h3 className="puppydetails-text-right">{puppy?.pet_name}</h3>
        </div>
        <div className="puppydetail-card">
          <h3 className="puppydetails-text-left">Breed:  </h3>
          <h3 className="puppydetails-text-right">{puppy?.breed_name}</h3>
        </div>
        <div className="puppydetail-card">
          <h3 className="puppydetails-text-left">Age:  </h3>
          <h3 className="puppydetails-text-right">{puppy?.age}</h3>
        </div>
        <div className="puppydetail-card">
          <h3 className="puppydetails-text-left">Gender:  </h3>
          <h3 className="puppydetails-text-right">{puppy?.gender}</h3>
        </div>
        
        <Link to={`/editpuppy/${puppy?.id}`}> 
        <button className='home-btn'>Edit <AiFillEdit className='home-icon'/></button> 
        </Link>

        { flag ? <button  className='btn-delete' onClick= {() => handleDelete(puppy?.id)}>Delete <AiFillDelete className='home-icon' /></button> : "" }    

      </div>
      
    </>
  )
}

export default PuppyDetails