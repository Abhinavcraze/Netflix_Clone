import React, { useEffect } from 'react'
import './Player.css'
import back_arrow from '../../assets/back_arrow_icon.png'
import { useNavigate , useParams } from 'react-router-dom'

const Player = () => {

  const { id } = useParams();

  const navigate = useNavigate();
  const[apiData, setApiData] = React.useState({name: '', key :'', published_at: '', type: ''});

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjQ0ZTdkZjU1ODA1ZTYzN2U5ZmQyOTliMzhmMmQ5NSIsIm5iZiI6MTc2MzYzNTU2NS4wNSwic3ViIjoiNjkxZWYxNmRjZjcyNzNiMTA0YWRiY2QyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.tu4YY1ddvqCf89o3QrqeycnLzS7ciPjX34rvy57cRhs'
  }
};

useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0])) //get 1st object results
    .catch(err => console.error(err));
}, []);



  return (
    <div className='player'>
      <img src={back_arrow} alt="" onClick={() => {navigate(-2)}}/> {/*navigate to 2 process behind*/}
      {/* <iframe src={`https://www.youtube.com/embed/37eRt5sl7ZE`} */}  {/*for reference youtube channel*/}
        <iframe src={`https://www.youtube.com/embed/${apiData.key}`}
          title='api trailer' width="90%" height="500px"
          frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.name}</p>
        <p>{apiData.published_at.slice(0,10)}</p>        
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player