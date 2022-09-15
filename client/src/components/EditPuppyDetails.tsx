import React, { useState } from 'react'
import { Link,useParams } from 'react-router-dom';
import { AddPuppy, Puppy } from '../types';

interface IEditPuppy {
    puppies:Puppy[];
    editNewPuppy : (editPuppy : Puppy) => void;
    message: string;
  }

const EditPuppyDetails = ({editNewPuppy,puppies,message}:IEditPuppy) => {
    const {id} = useParams();
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
    }
  return (
    <>
    <div>
        <div className='addpuppy-container'>

        <div>Edit Puppy</div>

        {message}

        <form onSubmit={() =>editPuppyDetails(editPuppy)}>
            <label>Name: </label>
            <input type="text" name="pet_name" value={editPuppy.pet_name} onChange={handleChange} />

            <label>Breed: </label>
            <input type="text" name='breed_name' value={editPuppy.breed_name} onChange={handleChange} />

            <label>Gender: </label>
            <input type="text" name="gender" value={editPuppy.gender} onChange={handleChange} />

            <label>Age: </label>
            <input type="number" name='age' value={editPuppy.age} onChange={handleChange} />

            <label>Icon </label>
            <input type="text" name='icon' value={editPuppy.icon_url} onChange={handleChange} />

            <button>Edit Puppy</button>  


        </form>
        <Link to={`/puppy/${id}`}> Home </Link>       
    </div>
    </div>
    </>
  )
}

export default EditPuppyDetails