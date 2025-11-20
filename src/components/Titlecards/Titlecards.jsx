import React , {useRef , useEffect} from 'react'
import './Titlecards.css'
import cards_data from '../../assets/cards/Cards_data'

const Titlecards = ({title}) => {
  const cardsRef = useRef(); /* Ref for card list container access dom directly without rerender*/ 
  
  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY; /* Scroll horizontally on vertical scroll */
  };

  useEffect(() => {
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
        {cards_data.map((card) => (
          // <div className="card-item" key={card.id}>
          //   <img src={card.image} alt={card.title} />
          //   <p className='card-title'>{card.title}</p>
          // </div>
          <div className="card" key={card.id}>
            <img src={card.image} alt={card.title} />
            <p className='card'>{card.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Titlecards