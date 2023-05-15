  import React, { useEffect, useState } from 'react'
import styles from './TvShowData.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'


export default function TvShowData() {
  let imgpath='https://image.tmdb.org/t/p/w500'
  let {id}=useParams()
  const [TvShowData, setTvShowData] = useState(null)
  
  async function getTvShowData(){
  let {data}=   await axios(`https://api.themoviedb.org/3/tv/${id}?api_key=6f381e31f69d47056db54a3c7a3dcd71`)
  console.log(data);
  setTvShowData(data)
    }
  useEffect(() => {
   getTvShowData() 
  }, [])
  
  
  
  return <>
 
<div className='row container mx-auto align-items-center g-5 my-5'>
      <div className='col-xl-4 col-lg-6 mx-auto col-md-8'>
        <div>
          <img src={imgpath + TvShowData?.poster_path} className='w-100' alt="" />

        </div>
      </div>
      <div className='col-xl-8  mx-auto'>
        <div>
          <h3 className='fw-bolder fs-1'>{TvShowData?.name}</h3>
          {TvShowData?.genres.map((ele) => {
            return <span className='badge bg-info mx-1'>{ele.name}</span>
          })}
          
          <p className='fw-lighter'>{TvShowData?.overview}</p>
          <h3 className='h6 text-muted'>Date:{TvShowData?.first_air_date}</h3>
          
          <h3 className='h6 text-muted'>number of episodes :{TvShowData?.number_of_episodes} </h3>


          <span className='fw-bolder'>
            <i className='fa fa-star text-warning mx-1'></i>
            {TvShowData?.vote_average}
          </span>

        </div>
      </div>
    </div> 
  </>
}
