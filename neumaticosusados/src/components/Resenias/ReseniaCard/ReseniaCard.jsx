import './ReseniasCard.css'
import StarRatings from 'react-star-ratings';

const ReseniaCard = ({data}) => {
  return (
    <div className='resenia-card-container'>
      <div className='resenia-card-content'>
        <div className='card-title'>
          <img src={data.profile_photo_url}/>
          <div className='estrellas-nombre-content'>
            <h2 className='nombre'>{data.author_name}</h2>
            <div className='starRating'>          
            <StarRatings
                rating={data.rating}
                starRatedColor="#d49d03"
                numberOfStars={5}
                starDimension="25px"
                starSpacing="2px"
                name='rating'
              />
            </div>
          </div>

        </div>
        <div className='resenia-body'>
            <p className='resenia-text'>{data.text}</p>
        </div>
      </div>
    </div>
  )
}

export default ReseniaCard