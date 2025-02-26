import { useState, useEffect, useRef } from 'react'
import { Axios } from "../../config";
import ReseniaCard from './ReseniaCard/ReseniaCard.jsx'
import Slider from 'react-slick'
import flechaderecha from '../../assets/images/flechaderecha.png'
import flechaizquierda from '../../assets/images/flechaizquierda.png'
import { forwardRef } from 'react'
import { ClipLoader } from 'react-spinners';


import './Resenias.css'


const Resenias = forwardRef((props, ref) => {
    const sliderRef = useRef()
    const [reviews, setReviews] = useState(null)
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      const fetchData = async () => {
          try {
              const reviewsData = await Axios.get('reviews');
              setReviews(await reviewsData.data);
              setLoaded(true)
          } catch (error) {
              console.error('Error al obtener datos');
          }
      };

      fetchData();
  }, []);
    
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow:2,
      slidesToScroll:1,
      arrows:false,
      responsive: [
          {
              breakpoint: 769,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              }
          }
      ]
  }
    const slideRight = () => {
      sliderRef.current.slickNext()
  }

    const slideLeft = () => {
        sliderRef.current.slickPrev()
    }

  return (
    <div className='resenias-container' ref={ref}>
      <div className='resenias-content-title'>
        <h1>Reseñas</h1>
      </div>
      <div className="experience-content">
        <div className="arrow-right" onClick={slideRight}>           
          <img src={flechaderecha}/>
        </div>
        <div className="arrow-left" onClick={slideLeft}>       
          <img src={flechaizquierda}/>

        </div>
      </div>
        {!loaded ? (
          <div className='spinner-reviews'>
            <ClipLoader size={50} color={"#fbb801"} loading={!loaded} />
          </div>
        ) : (
            <div className="experience-content">
              <Slider ref={sliderRef} {...settings}>
              {reviews.reviews.map((review, index) => (
                  <ReseniaCard key={index} data={review}/>
              ))}
              </Slider>
            </div>
        )}
    </div>
  )
}
)
export default Resenias