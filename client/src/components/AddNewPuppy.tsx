import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { AddPuppy } from '../types'

interface IAddPuppy {
  addPuppy : (newPuppy : AddPuppy) => void;
}

const AddNewPuppy = ({addPuppy}:IAddPuppy) => {

    const [newPuppy, SetNewPuppy] = useState<AddPuppy>({breed_name:"",pet_name:"",gender:"",age:0});

    const handleChange =(e : React.ChangeEvent<HTMLInputElement>) =>{
      const {value,name} = e.target;
      SetNewPuppy({...newPuppy,[name]:value})

    }

    const addNewPuppy = (newPuppy : AddPuppy) =>{
        addPuppy(newPuppy)
        console.log(newPuppy)
    }
  return (
    <div className='addpuppy-container'>

        <div>AddPuppy</div>

        <form onSubmit={() =>addNewPuppy(newPuppy)}>
            <label>Name: </label>
            <input type="text" name="pet_name" value={newPuppy.pet_name} onChange={handleChange} />

            <label>Breed: </label>
            <input type="text" name='breed_name' value={newPuppy.breed_name} onChange={handleChange} />

            <label>Gender: </label>
            <input type="text" name="gender" value={newPuppy.gender} onChange={handleChange} />

            <label>Age: </label>
            <input type="number" name='age' value={newPuppy.age} onChange={handleChange} />

            <button>Add Puppy</button>

            <Link to={"/"}> Home

            </Link>
            
          

        </form>
    </div>
  )
}

export default AddNewPuppy