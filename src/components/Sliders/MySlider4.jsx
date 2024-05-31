import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './MySlider4.css';
import { useNavigate } from 'react-router-dom';

export default function MySlider4() {
    const navigate= useNavigate()
    const [activeIndex, setActiveIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);
    const images = [
        { img:'images/royale.png', text:'Royale', link:'/cheuffeurdrive/Royale/65ae67099aff1fd320dd7470' },
        { img:'images/mpv.png', text:'MPV', link:'/cheuffeurdrive/MPV/65ae67099aff1fd320dd74d1' },
        { img:'images/hatchbacks.png', text:'Hatchbacks', link:'/cheuffeurdrive/Hatchbacks/65ae67099aff1fd320dd7494' },
        { img:'images/corporate.png', text:'Corporate', link:'/cheuffeurdrive/Corporate/65ae67099aff1fd320dd748b' },
        // { img:'images/sports.png', text:'Sports', link:'/Royale' },
        { img:'images/buses-ac.png', text:'Buses Ac', link:'/cheuffeurdrive/Buses AC/65ae67099aff1fd320dd74fe' },
        { img:'images/buses-nac.png', text:'Buses Nac', link:'/cheuffeurdrive/Buses%20Non%20AC/65ae67099aff1fd320dd74f0' },
        { img:'images/president.png', text:'President', link:'/cheuffeurdrive/President/65ae67099aff1fd320dd747d' },
        { img:'images/luxury-van.png', text:'Luxury Vans', link:'/cheuffeurdrive/Luxury%20Vans/65ae67099aff1fd320dd74a0' },
        { img:'images/suv.png', text:'Luxury SUV', link:'/cheuffeurdrive/Luxury%20SUV/65ae67099aff1fd320dd74b7' },
        { img:'images/electric.png', text:'Electric', link:'/cheuffeurdrive/Electric/65ae67099aff1fd320dd74e4' },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        beforeChange: (current, next) => setActiveIndex(next)
    };

    const nextSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const prevSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    return (
        <div>
            <div className="slider-container">
                <Slider {...settings} ref={sliderRef}>
                    {images.map((image, index) => (
                        <div key={index} className="slide">
                            <div onClick={() => navigate(image.link)} className="slide-content">
                                <img src={image.img} alt={image.text} />
                                <p>{image.text}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="navigation-buttons">
                <div className="nav-button" onClick={prevSlide}>Back</div>
                <div className="nav-button" onClick={nextSlide}>Next</div>
            </div>
        </div>
    );
}