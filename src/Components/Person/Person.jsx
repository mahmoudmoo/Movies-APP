import React, { useEffect, useState } from 'react'
import styles from './Person.module.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Person() {
  const [person, setperson] = useState([])
  let imgpath='https://image.tmdb.org/t/p/w500'
  async function getperson() {
    let { data } = await axios('https://api.themoviedb.org/3/trending/person/week?api_key=6f381e31f69d47056db54a3c7a3dcd71')
    setperson(data.results)
  }

  useEffect(() => {
    getperson()
  }, [])

  return <>
<div className="row container mx-auto">
  {person.map(ele=>{
    return <div className="col-xl-2 col-lg-3 col-md-4 col-6 my-3" key={ele.id}>
      <Link className='nav-link' to={'/PersonData/'+ele.id}>
      <div className="item text-center">
        <img src={imgpath+ele.profile_path} alt="" className='w-75 rounded-circle'/>
        <h3 className="fw-bolder fs-5">{ele.name}</h3>
      </div>
      </Link>
    </div>
  })}
</div>

  </>
}
