import { CircularProgress } from '@mui/material'
import React from 'react'
import './styles.css'
function Loader() {
  return (
    <div className='load'>
      <CircularProgress />
    </div>
  )
}

export default Loader
