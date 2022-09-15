import React from 'react'
import { Link } from 'react-router-dom';
import { Puppy } from '../types';
import PuppiesList from './PuppiesList';
import './Home.css'
import { AiFillPlusCircle} from 'react-icons/ai'

interface IHome {
    puppies: Puppy[];
}

const Home = ({puppies}:IHome) => {
  return (
    <div className='home-container'>
        <h2 className="home-text"> Available Puppies <br />to take Home</h2>
        <Link to={"/addpuppy"}>
          <button className='home-btn'>        
            AddPuppy <AiFillPlusCircle className='home-icon' /></button></Link>
        <PuppiesList puppies={puppies} />

    </div>
  )
}

export default Home