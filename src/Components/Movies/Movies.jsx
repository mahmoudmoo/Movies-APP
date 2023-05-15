import React, { useEffect, useState } from 'react'
import styles from './Movies.module.css'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default function Movies() {
const [Movies, setMovies] = useState([])
let imgpath='https://image.tmdb.org/t/p/w500'
async function getMovies(){
  let{data}=await axios('https://api.themoviedb.org/3/trending/movie/week?api_key=6f381e31f69d47056db54a3c7a3dcd71')
  setMovies(data.results)
}

useEffect(() => {
  getMovies()
}, [])

return <>

<div className="row container mx-auto">
  {Movies.map(ele=>{
    return <div className="col-xl-2 col-lg-3 col-md-4 col-6 my-3" key={ele.id}>
      <Link className='nav-link' to={'/MovieData/'+ele.id}>
      <div className="item text-center">
        <img src={imgpath+ele.poster_path} alt="" className='w-75'/>
        <h3 className="fw-bolder fs-5">{ele.title}</h3>
      </div>
      </Link> 
    </div>
  })}
</div>

  </>
}
