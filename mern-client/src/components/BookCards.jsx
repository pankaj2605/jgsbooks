import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import {FaCartShopping} from 'react-icons/fa6';

export default function BookCards({headline,books}) {

  return (
    <div className='my-16 px-4 lg:px-24 '>
        <h2 className='text-4xl text-center font-bold text-black'>{headline}</h2>
         {/* cards  */}
        <div className='mt-12'>
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
            clickable: true,
            }}
            breakpoints={{
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            
            {
                books.map(book=><SwiperSlide key={book._id}>
                    <Link to={`/book/${book._id}`}>
                        <div className='relative'>
                            <img className='w-80 h-70' src={book.imageURL} alt=" book cover" />
                            <div className='absolute top-3 right-3 bg-slate-400 hover:bg-black p-2 rounded-sm'>
                                <FaCartShopping className='w-4 h-4 text-white '/>
                            </div>
                        </div>
                        <div>
                            <h3>{book.bookTitle}</h3>
                            <p>{book.authorName}</p>
                        </div>
                        <div>
                            <p>Rs 100.00</p>
                        </div>
                    </Link>
                </SwiperSlide>)
            }
      </Swiper>
        </div>
    </div>
  )
}

// max-width: 50%;
// max-height: 50%