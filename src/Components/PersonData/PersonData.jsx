import React, { useEffect, useState } from 'react'
import styles from './PersonData.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'


export default function PersonData() {
  let {id}=useParams()
  let imgpath='https://image.tmdb.org/t/p/w500'

  const [PersonData, setPersonData] = useState([  ])
  
  async function getPersonData(){
  let {data}=   await axios(`https://api.themoviedb.org/3/person/${id}?api_key=6f381e31f69d47056db54a3c7a3dcd71`)
  console.log(data);
  setPersonData(data)
    }
  useEffect(() => {
   getPersonData() 
  }, [])
return <>
<div className='row container mx-auto align-items-center g-5 my-5'>
      <div className='col-xl-4 col-lg-6 mx-auto col-md-8'>
        <div>
          <img src={imgpath + PersonData?.profile_path} className='w-100' alt="" />

        </div>
      </div>
      <div className='col-xl-8  mx-auto'>
        <div>
          <h3 className='fw-bolder fs-1'>{PersonData?.name}</h3>
          <span className='badge bg-info'>
            
            {PersonData?.known_for_department}
          </span>
          
          <p className='fw-lighter'>{PersonData?.biography}</p>
          <h3 className=' text-muted h6'>{PersonData?.place_of_birth}</h3>
          
          <h3 className=' text-muted h6'>birthday : {PersonData?.birthday} </h3>


          

        </div>
      </div>
    </div>


  </>
}
