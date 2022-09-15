import React, { useEffect, useState } from 'react';
import './App.css';
import PuppiesList from './components/PuppiesList';
import { AddPuppy, Puppy } from './types';
import { Route, Routes,useNavigate } from 'react-router-dom';
import PuppyDetails from './components/PuppyDetails';
import Home from './components/Home';
import AddNewPuppy from './components/AddNewPuppy';
import EditPuppyDetails from './components/EditPuppyDetails';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {

  const [puppies,setPuppies] = useState<Puppy[]>([]);
  const [successMessage,SetSuccessMessage] = useState("");
  const [flag,setFlag] = useState(true);
  const navigate = useNavigate();


  const GetPuppiesInfo = async () =>{
     
      const response = await fetch("http://localhost:3020/api/puppies");
      const data = await response.json();
      setPuppies (data);
  }

  const deletePuppy = async (id : number ) =>{
    const options = {
      method:'DELETE',
      headers:{
        'Content-Type':'application/json'
      }
    }
    const response = await fetch(`http://localhost:3020/api/puppies/${id}`,options )
    if(response.ok){
      
      SetSuccessMessage("puppy is deleted");
      setFlag(false);
      // GetPuppiesInfo();
      setPuppies(prev =>{
        const data = prev.filter(puppy => puppy.id !== id)
        return data;
      })
      
    }
  }

  const addPuppy = async (puppy : Puppy ) =>{
    const options = {
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        Accept:'application/json'
      },
      body: JSON.stringify(puppy)
    }
    const response = await fetch(`http://localhost:3020/api/puppies/`,options )
    const data : Puppy = await response.json();
    console.log(data);
    if(response.ok){
      
      SetSuccessMessage("New Puppy is added");
      //setFlag(false);
      GetPuppiesInfo(); 

      setTimeout(()=>{
        SetSuccessMessage("");
      },3000)
      
    }
  }

  const editPuppy = async (editedPuppy : Puppy ) =>{
    const options = {
      method:'PUT',
      headers:{
        'Content-Type':'application/json',
        Accept:'application/json'
      },
      body: JSON.stringify(editedPuppy)
    }
    const response = await fetch(`http://localhost:3020/api/puppies/${editedPuppy.id}`,options )
    SetSuccessMessage("");

    if(response.ok){
      SetSuccessMessage("New Puppy is edited");

      setPuppies((prev : any) =>{
        const filtered : Puppy[] = prev.filter((p:Puppy) => p.id !== editedPuppy.id);
        
        return [...filtered, editedPuppy as Puppy]        
      })

      setTimeout(()=>{
        SetSuccessMessage("");
      },3000)
      
    }
  }
  

  useEffect(()=>{
      GetPuppiesInfo();
  },[])

  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path="/" element={<Home puppies={puppies} />}> </Route>
        <Route path="/addpuppy" element={<AddNewPuppy  addPuppy={addPuppy} message={successMessage}/>}> </Route>
        <Route path="/editpuppy/:id" element={<EditPuppyDetails  editNewPuppy={editPuppy} puppies={puppies} message={successMessage}/>}> </Route>
        <Route path="/puppy/:id" element={<PuppyDetails deletePuppy={deletePuppy} puppies={puppies} message={successMessage} flag={flag}/>}> </Route> 
      </Routes>
      <Footer />
    
    </div>
  );
}

export default App;
