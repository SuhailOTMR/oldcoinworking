import React from 'react';
import styles from './style.module.css';

const images = [
  '1.png', '2.png', '3.png', '4.png', '5.png', '6.png',
  '7.png', '8.png', '9.png', '10.png', '11.png', '12.png',
  '13.png', '14.png', '15.png', '16.png', '17.png', '18.png',
  '19.png', '20.png', '21.png', '22.png', '23.png', '24.png'

];

const Scroller = () => {
  return (
    <div className={`${styles.marquee} mt-12 w-full overflow-hidden relative bg-transparent`}>
      <div className={`${styles.track} flex w-max gap-[30px] animate-scroll`}>
        {images.concat(images).map((src, index) => (
          <div
            key={index}
            className={`${styles.item} w-[200px] h-[290px] bg-cover bg-center flex-shrink-0 transition-transform duration-300 ease-in-out`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>
    </div>
  );
};

export default Scroller;