import { apple, vision, google } from "../assets";
import styles, { layout } from "../style";


const Clients = () => (
  <section id="clients" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={vision} alt="billing" className="w-[100%] h-[100%] relative z-[5] rounded-lg" />
      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        En StoaFintech,<br className="sm:block hidden" /> nuestra visión es
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-left`}>
        Nos visualizamos como pioneros y líderes indiscutibles en el espacio de Fintech, criptomonedas y blockchain.
        Aspiramos a ser el referente de confianza para aquellos que buscan explorar y aprovechar al máximo el potencial de esta
        revolucionaria tecnología.
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-right`}>
        Imaginamos un futuro en el que las barreras tradicionales de inversión y transacción sean cosa del pasado,
        y donde cada individuo tenga la capacidad de participar plenamente en la economía global,
        respaldados por la seguridad y la confiabilidad de nuestra plataforma. Nuestra visión es ser catalizadores del cambio,
        impulsando una nueva era de finanzas globales más inclusivas, sostenibles y empoderadoras.
      </p>      
    </div>
  </section>
);

export default Clients;
