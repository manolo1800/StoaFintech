import React, { useState, useEffect } from 'react';
import styles from "../style";
import { gay,meta,joga,lesbianas,jugando,metav,mecarro,dj,cripto } from "../assets";
import GetStarted from "./GetStarted";



const Hero = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    gay,meta,joga,lesbianas,jugando,metav,mecarro,dj,cripto
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((imageIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(intervalId);
  }, [imageIndex]);
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          Beyond  <br className="sm:block hidden" />{" "}
            <span className="text-gradient">the future</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">          
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          ¿Te imaginas un mundo donde puedas crear, compartir y disfrutar de todo lo que te apasiona? Un mundo donde no haya fronteras, 
          barreras ni limitaciones. Un mundo donde tú seas el dueño de tu destino.
          Ese mundo existe descubrelo con nosotros.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={images[imageIndex]} alt="billing" className="w-[80%] h-[80%] max-w-3xl max-h-80 relative z-[5] rounded-lg"/>

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
