import Image from "next/image";

//importaciones de los estilos
import StylesSectionUno from "../../styles/principal/sectionuno.module.css";

export default function sectionuno() {
  return (
    <div>
      <section className={StylesSectionUno.descripcion}>
        <div className={StylesSectionUno.contenedorimgdescripcion}>
          <div className={StylesSectionUno.descripciontext}>
            <div className={StylesSectionUno.titledescripcion}>
              <h1 className={StylesSectionUno.title}>
                Bringing your vision to life online
              </h1>
            </div>
            <p className={StylesSectionUno.descripciontexto}>
              Join us as we help modernize and integrate mainstream IT to
              transform customer experiences and pave the way for a successful
              digital future. Together, we can drive innovation and success in
              the digital realm.
            </p>
          </div>
          <div className={StylesSectionUno.contenedorimg}></div>
        </div>
      </section>

      <div className={StylesSectionUno.contenedorboton}>
        <button className={StylesSectionUno.btnheader}>Contact</button>
      </div>

      <div className={StylesSectionUno.titleempresa}>
        <h1 className={StylesSectionUno.empresatitle}>
          AM Deluxy Welcome to our Web Development and Digital Product Services
        </h1>
      </div>
    </div>
  );
}
