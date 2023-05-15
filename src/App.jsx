import React from 'react'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import Layout from '../src/Components/Layout/Layout'
import Home from '../src/Components/Home/Home'
import Movies from '../src/Components/Movies/Movies'
import TvShows from '../src/Components/TvShows/TvShows'
import Person from '../src/Components/Person/Person'
import MovieData from '../src/Components/MovieData/MovieData'
import TvShowData from '../src/Components/TvShowData/TvShowData'
import PersonData from '../src/Components/PersonData/PersonData'
import NotFound from '../src/Components/NotFound/NotFound'






export default function App() {



  let routers = createHashRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Movies />  },
        { path: 'TvShows', element: <TvShows /> },
        { path: 'Person', element: <Person /> },
        { path: 'movieData/:id', element: <MovieData /> },
        { path: 'TvShowData/:id', element: <TvShowData /> },
        { path: 'PersonData/:id', element: <PersonData /> },
        { path: '*', element: <NotFound /> },


      ]
    }
  ])
  return (
    <RouterProvider router={routers}>
    </RouterProvider>
  )
}
