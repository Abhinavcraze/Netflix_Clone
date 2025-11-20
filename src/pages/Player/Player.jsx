import React from 'react'
import './Player.css'
import back_arrow from '../../assets/back_arrow_icon.png'

const Player = () => {
  return (
    <div className='player'>
      <img src={back_arrow} alt="" />
      <iframe src='https://www.youtube.com/embed/37eRt5sl7ZE'
          title='api trailer' width="90%" height="500px"
          frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen></iframe>
      <div className="player-info">
        <p>Published Date</p>
        <p>Name</p>
        <p>Type</p>
      </div>
    </div>
  )
}

export default Player