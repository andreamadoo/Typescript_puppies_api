import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AddPuppy } from '../types'
import {AiFillHome, AiFillEdit} from 'react-icons/ai'
import { AiFillPlusCircle} from 'react-icons/ai'

interface IAddPuppy {
  addPuppy : (newPuppy : AddPuppy) => void;
  message:string;
}

const AddNewPuppy = ({addPuppy,message}:IAddPuppy) => {
    const navigate = useNavigate();

    const [newPuppy, SetNewPuppy] = useState<AddPuppy>({breed_name:"",pet_name:"",gender:"",age:0,icon_url:""});

    const handleChange =(e : React.ChangeEvent<HTMLInputElement>) =>{
      const {value,name} = e.target;
      SetNewPuppy({...newPuppy,[name]:value})

    }

    const addNewPuppy = (newPuppy : AddPuppy) =>{
        addPuppy(newPuppy);
        navigate('/')        
    }
  return (
    <div className='addpuppy-container'>
        <Link to={`/`}> <button className='home-btn'>Home <AiFillHome className='home-icon' /> </button></Link>

        <div className="add-text">AddPuppy</div>

        <h3>{message}</h3>

        <form className='form-container' onSubmit={() =>addNewPuppy(newPuppy)}>
            <label className="form-label">Name: </label>
            <input className="form-input" type="text" name="pet_name" value={newPuppy.pet_name} onChange={handleChange} />

            <label className="form-label">Breed: </label>
            <input className="form-input" type="text" name='breed_name' value={newPuppy.breed_name} onChange={handleChange} />

            <label className="form-label">Gender: </label>
            <input className="form-input" type="text" name="gender" value={newPuppy.gender} onChange={handleChange} />

            <label className="form-label">Age: </label>
            <input className="form-input" type="number" name='age' value={newPuppy.age} onChange={handleChange} />

            <label className="form-label">Icon </label>
            <input className="form-input" type="text" name='icon_url' value={newPuppy.icon_url} onChange={handleChange} />

            
          <button className='edit-btn'>        
            AddPuppy <AiFillPlusCircle className='home-icon' /></button>

        </form>
        
    </div>
  )
}

export default AddNewPuppy