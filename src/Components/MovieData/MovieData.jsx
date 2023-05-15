import React, { useEffect, useState } from 'react'
import styles from './MovieData.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'


export default function MovieData() {
  let imgpath='https://image.tmdb.org/t/p/w500'

  let {id}=useParams()
const [MovieData, setMovieData] = useState(null)

async function getMovieData(){
let {data}=   await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=6f381e31f69d47056db54a3c7a3dcd71`)
setMovieData(data)
  }
useEffect(() => {
 getMovieData() 
}, [])

return <>
<div className='row container mx-auto align-items-center g-5 my-5'>
      <div className='col-xl-4 col-lg-6 mx-auto col-md-8'>
        <div>
          <img src={imgpath + MovieData?.poster_path} className='w-100' alt="" />

        </div>
      </div>
      <div className='col-xl-8  mx-auto'>
        <div>
          <h3 className='fw-bolder fs-1'>{MovieData?.original_title}</h3>
          {MovieData?.genres.map((ele) => {
            return <span className='badge bg-info mx-1'>{ele.name}</span>
          })}
          
          <p className='fw-lighter'>{MovieData?.overview}</p>
          <h3 className='h6 text-muted'>Date :{MovieData?.release_date}</h3>
          
          <h3 className='h6 text-muted'> Runtime :{MovieData?.runtime} min</h3>
          <h3 className='h6 text-muted'>revenue: {MovieData?.revenue} $</h3>

          <h3 className='h6 text-muted'>budget : {MovieData?.budget} $</h3>

          <span className='fw-bolder'>
            <i className='fa fa-star text-warning mx-1'></i>
            {MovieData?.vote_average}
          </span>

        </div>
      </div>
    </div>

  
  </>
}
