import React, { useState, useEffect } from 'react';
import styles, { layout } from "../style";
import { tokensf,estadistica,metaverso,robot} from "../assets";

const Billing = () => {
  const [imageService, setImageService] = useState(0);
  const images = [
    tokensf,estadistica,metaverso,robot
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageService((imageService + 1) % images.length);
    }, 7000);

    return () => clearInterval(intervalId);
  }, [imageService]);

  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={images[imageService]} alt="billing" className="w-[100%] h-[100%] relative z-[5] rounded-lg" />
        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          transforma tu vida<br className="sm:block hidden" /> usando los servicios que tenemos
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          METAVERSO: construcción de espacios en el metaverso, experiencias sociales inmersivas, comercio virtual, presencia de marcas en el metaverso.<br />
          TARJETAS CRYPTO: tarjetas de debito para utilización de crypto con múltiples beneficios y status privilegiado.<br />
          TOKENIZACION: tokenizacion de activos, captación de capital, proyectos desarrollados y en verde etc. <br />
          HOLDING: Boot de inversion a la vista con destacados rendimientos.<br />
        </p>
      </div>
    </section>
  );
};

export default Billing;
