import FindInPageIcon from '@mui/icons-material/FindInPage'
import React from 'react'

const Pin = ({ pinSize, img, name, link }) => {
  return (
    <div className={`pin ${pinSize}`}>
      <img className='mainPic' src={img} alt='' />

      <div className='content'>
        <h3>{name}</h3>

        <div className='search'>
          <a href={link} target='_blank' rel='noopener noreferrer'>
            <FindInPageIcon />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Pin
