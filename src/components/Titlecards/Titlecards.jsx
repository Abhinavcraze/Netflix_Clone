import React , {useRef , useEffect} from 'react'
import './Titlecards.css'
// import cards_data from '../../assets/cards/Cards_data'  (before using apiDaata gettting data from an assets)

const Titlecards = ({title , category}) => {  /*category categories of movies eg: now playing,popular , top rated ,upcoming etc*/

  const [apiData, setApiData] = React.useState([]); {/*for pushing image from an api*/}
  const cardsRef = useRef(); /* Ref for card list container access dom directly without rerender*/ 
  

  //movie list for now playing movies from TMDB
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjQ0ZTdkZjU1ODA1ZTYzN2U5ZmQyOTliMzhmMmQ5NSIsIm5iZiI6MTc2MzYzNTU2NS4wNSwic3ViIjoiNjkxZWYxNmRjZjcyNzNiMTA0YWRiY2QyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.tu4YY1ddvqCf89o3QrqeycnLzS7ciPjX34rvy57cRhs'
  }
};

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY; /* Scroll horizontally on vertical scroll */
  };

  useEffect(() => {
    //movie list for now playing movies from TMDB    
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err));

    const cardList = cardsRef.current;
    cardList.addEventListener("wheel", handleWheel, { passive: false });  //Makes custom horizontal scroll work.
    // cardList.addEventListener("wheel", handleWheel);

    return () => {
      cardList.removeEventListener("wheel", handleWheel);
    };
  }, []);

  
  return (
    <div className='title-cards'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className = "card-list" ref={cardsRef}>
        {/* {cards_data.map((card) => ( */}  {/*for normal pics from an assets data*/}
        {apiData.map((card) => (
          // <div className="card" key={card.id}>
          //   <img src={card.image} alt={card.title} />  //for normal pics from an assets data
          //   <p className='card'>{card.title}</p>
          // </div>

          <div className="card" key={card.id}>
            <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt={card.title} />  {/*tmdb image path*/}
            <p className='card'>{card.original_title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Titlecards