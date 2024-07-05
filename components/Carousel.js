import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.css';

import { FaPython, FaPhp, FaLaravel, FaJs, FaReact, FaDocker, FaGithub } from 'react-icons/fa';
import { SiSelenium, SiPostman, SiSalesforce, SiTypescript } from 'react-icons/si';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const technologies = [
    { icon: <FaPython />, name: 'Python' },
    { icon: <FaPhp />, name: 'PHP' },
    { icon: <FaLaravel />, name: 'Laravel' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <FaReact />, name: 'React' },
    { icon: <FaGithub />, name: 'GitHub' },
    { icon: <FaDocker />, name: 'Docker' },
    { icon: <SiSelenium />, name: 'Selenium' },
    { icon: <SiPostman />, name: 'Postman' },
    { icon: <SiSalesforce />, name: 'Salesforce' },
    { icon: <SiTypescript />, name: 'TypeScript' },
  ];

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        {technologies.map((tech, index) => (
          <div key={index} className={styles.slide}>
            <div className={styles.icon}>{tech.icon}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
