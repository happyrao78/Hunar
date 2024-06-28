import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoEarthOutline } from "react-icons/io5";

const About = () => {
  const data = useLoaderData() // Automatically loads the data

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100 p-4'>
      <div className='w-full max-w-sm bg-white rounded-lg shadow-lg p-6 m-4'>
        {/* <h1 className='text-3xl font-bold mb-4 text-center'>Github Followers: {data.followers}</h1> */}
        <div className='flex justify-center mb-4'>
          <img
            className='rounded-full border-4 border-gray-300'
            src={data.avatar_url}
            alt='Happy Yadav'
            width={150}
            style={{ display: 'block', margin: '0 auto' }}
          />
        </div>
        <p className='text-2xl font-semibold text-center'>{data.name.toUpperCase()}</p>
        <p className='text-xl text-gray-600 text-center'>{data.location}</p>
       <div className='flex justify-center items-center'>
       <a href='https://www.github.com/happyrao78'>
        <FaGithub className='text-3xl text-center flex mx-2 mt-3 mb-3 text-black' /></a>
        <a href='https://www.linkedin.com/in/happy-yadav-16b2a4287/'>
        <FaLinkedin className='text-3xl text-center flex mx-2 mt-3 mb-3 text-black' /></a>
        <a href='https://www.happyrao.tech'>
        <IoEarthOutline className='text-3xl text-center flex mx-2 mt-3 mb-3 text-black' /></a>
        </div>
        
        
        <p className='mt-4 text-lg text-center flex '>{data.bio}</p>
        
      </div>
    </div>
  )
}

export default About

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/happyrao78')
  return response.json()
}
