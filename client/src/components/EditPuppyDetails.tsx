import React, { useState } from 'react'
import { Link,useNavigate,useParams } from 'react-router-dom';
import { AddPuppy, Puppy } from '../types';
import './EditPuppy.css';

import {AiFillHome, AiFillEdit} from 'react-icons/ai'

interface IEditPuppy {
    puppies:Puppy[];
    editNewPuppy : (editPuppy : Puppy) => void;
    message: string;
  }

const EditPuppyDetails = ({editNewPuppy,puppies,message}:IEditPuppy) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const initialPuppy : Puppy | undefined = puppies.find(puppy => puppy.id === Number(id));

    const [editPuppy, SetEditPuppy] = useState<Puppy>({
        id:initialPuppy?.id,
        age:initialPuppy?.age,
        pet_name:initialPuppy?.pet_name,
        breed_name: initialPuppy?.breed_name,
        icon_url : initialPuppy?.icon_url,
        gender: initialPuppy?.gender

    });

    const handleChange =(e : React.ChangeEvent<HTMLInputElement>) =>{
        const {value,name} = e.target;
        SetEditPuppy({...editPuppy,[name]:value})  
    }

    const editPuppyDetails = (editPuppy : Puppy) =>{
        editNewPuppy(editPuppy);
        navigate(`/puppy/${editPuppy.id}`)
    }
  return (
    <>
    <div>
        <div className='addpuppy-container'>

        <div className="edit-text">Edit Puppy Information</div>

        <Link to={`/`}> <button className='home-btn'>Home <AiFillHome className='home-icon' /> </button></Link>

        <h5>{message}</h5>

        <form className="form-container" onSubmit={() =>editPuppyDetails(editPuppy)}>
          
            <label className="form-label">Name: </label>
            <input className="form-input" type="text" name="pet_name" value={editPuppy.pet_name} onChange={handleChange} />

            <label className="form-label">Breed: </label>
            <input className="form-input" type="text" name='breed_name' value={editPuppy.breed_name} onChange={handleChange} />

            <label className="form-label">Gender: </label>
            <input  className="form-input" type="text" name="gender" value={editPuppy.gender} onChange={handleChange} />

            <label className="form-label">Age: </label>
            <input  className="form-input" type="number" name='age' value={editPuppy.age} onChange={handleChange} />

            <label className="form-label">Icon </label>
            <input  className="form-input" type="text" name='icon' value={editPuppy.icon_url} onChange={handleChange} />

            <button className='edit-btn'>Edit <AiFillEdit className='home-icon'/></button>  


        </form>       
    </div>
    </div>
    </>
  )
}

export default EditPuppyDetails