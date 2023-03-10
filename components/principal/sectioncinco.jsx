import Image from "next/image";

//importaciones de estilos
import StylesSectCinco from "../../styles/principal/sectioncinco.module.css";

export default function sectioncinto() {
  return (
    <div>
      <section className={StylesSectCinco.empower}>
        <div className={StylesSectCinco.empowertitle}>
          <h1 className={StylesSectCinco.titleempower}>
            Empower Your Digital Projects with our <br />
            All-in-One web Application
          </h1>
        </div>

        <div className={StylesSectCinco.empowerdescripcionimg}>
          <div className={StylesSectCinco.empowerdescripcion}>
            <p className={StylesSectCinco.empowertext}>
              Say goodbye to project management headaches - With our web
              application, you can easily track the progress of your website or
              app development, communicate with your development team, and order
              new proijects with just a few clicks. Enjoy full transparency,
              streamlined communication, and hassle-free project management, all
              in one place!
            </p>
          </div>
          <div className={StylesSectCinco.empowerimg}>
            <Image
              className={StylesSectCinco.imgempower}
              src="/assets/img/futuro.png"
              alt="empower image"
              width={350}
              height={300}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
