import { mision } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section id="mision" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        En StoaFintech,<br className="sm:block hidden" /> nuestra misión es        
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-left`}>
        
        liderar la transformación del panorama financiero global a través de la innovación en tecnología blockchain y criptomonedas. 
        Nuestro propósito es brindar acceso y educación sobre el fascinante mundo de las criptomonedas y blockchain. 
        Creemos en democratizar las finanzas, permitiendo a las personas de todos los ámbitos de la vida participar 
        en la economía global de manera segura y confiable.

      </p>

      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-right`}>
     
        Nos dedicamos a proporcionar soluciones vanguardistas que democratizan el acceso a oportunidades 
        de inversión y empoderan a individuos y empresas para tomar el control de sus activos financieros. 
        Nos esforzamos por fomentar la adopción responsable de las criptomonedas y la tecnología blockchain, 
        promoviendo así un ecosistema financiero más inclusivo, eficiente y transparente.

      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={mision} alt="billing" className="w-[100%] h-[100%] rounded-lg" />
    </div>
  </section>
);

export default CardDeal;
