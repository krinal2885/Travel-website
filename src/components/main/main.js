import React,{useEffect} from 'react'
import './main.css'
import './main.scss'

import { HiOutlineLocationMarker } from 'react-icons/hi'
import { HiOutlineClipboardCheck } from 'react-icons/hi'
import img from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/img7.jpg'
import img8 from '../../assets/img8.jpg'
import img9 from '../../assets/img9.jpg'


import Aos, { init } from 'aos'
import 'aos/dist/aos.css'


//let me paste the array named data

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora is one of the best travel destinations in the world, This place is known for its luxurious stays and adventurous activities.'
  },


  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Machu Picchu',
    location: 'peru',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: 'Huayana Picchu is a mountain in peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the sun Gant is simply spectacular.'
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Great Barrier Reef',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is lavish and beauty. Always interesting to be in this place'
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Cappadocia',
    location: 'Turkey',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description: 'According to the World Tourism Ranking, 45 Million people visit Trkey each year, and from that about 2 Milion come to visit Cappadocia. This place is known for its luxurious stays and adventurous activities'
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Guanajuato',
    location: 'Mexico',
    grade: 'CULTURAL RELAX',
    fees: '$1100',
    description: 'A city in central Mexico, Guanajuato is known for its history of silver minig and colonial architecture. The houses in the city are very attractively painted with the most bright colors available. Always welcome.'
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Cinque Terre',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees: '$840',
    description: 'The vibrant hues of the houses are its benchmark and explain the beaunty of this place. Also, if you are a foodie and love seafood, you will be exhilarated with the choice you are about to get here. Happy exploring great food! '
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Angkor Wat',
    location: 'Cambodia',
    grade: 'CULTURAL RELAX',
    fees: '$790',
    description: 'Angkot wat represents the entire range of khmer art from the 9th to the 15th century. This temple is considered the heart and soul of cambodia. This place is known for its luxurious stays and adventuroys activities '
  },

  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description: 'An immense mausoleum of white marble, built-in Agra bu mughal emperor Shah Jahan in memory of his wife Mumtaz, the monument is breathtakingly beautiful. This place is known for its luxurious stays and adventurous activities'
  },

  {
    id: 9,
    imgSrc: img9,
    destTitle: 'Bali Island',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: 'Bail is an Indonesian Island and one of the best holiday destinations in the Indonesian archiplago. Bail is known for its volcanic mountains, history, art & culture, food, temple and beautiful sandy beaches.'
  },
]



const Main = () => {
  // lets create a react hook to add a scroll animation...

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])



  return (
    <section className='main container section'>

      <div className='secTitle'>
        <h3 data-aos="fade-right" className='title'>Most visited destinations</h3>
      </div>

      <div className='secContent grid'>

        {
          Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} 
              data-aos="fade-up"className="singledescription">

                <div className='imageDiv '>
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className='cardInfo'>
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon' />
                    <span className="name">{location}</span>
                  </span>

                  <div className='fees flex'>
                    <div className='grade'>
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>


                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>

    </section>
  )
}

export default Main