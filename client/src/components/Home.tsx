import React from 'react'
import { Link } from 'react-router-dom';
import { Puppy } from '../types';
import PuppiesList from './PuppiesList';

interface IHome {
    puppies: Puppy[];
}

const Home = ({puppies}:IHome) => {
  return (
    <div className='home-container'>
        <h2> List Of Puppies</h2>
        <Link to={"/addpuppy"}>Add Puppy</Link>
        <PuppiesList puppies={puppies} />

    </div>
  )
}

export default Home