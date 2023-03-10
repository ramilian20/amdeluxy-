//importaciones de estilos
import StylesSectDos from "../../styles/principal/sectiondos.module.css";
export default function sectiondos() {
  return (
    <div>
      <section className={StylesSectDos.lenguajespaginas}>
        <div className={StylesSectDos.titlelenguajes}>
          <h3 className={StylesSectDos.lenguajestitle}>
            Create a Strong Online Presence with Our Customized Websites
          </h3>
        </div>

        <div className={StylesSectDos.descripcionlenguajeimg}>
          <div className={StylesSectDos.lenguajesdescripcion}>
            <p className={StylesSectDos.lenguajestext}>
              At AM Deluxy, we specialize in creating stunning and functional
              websites that help our clients achieve their digital goals. Our
              team of expert developers and designers work together to deliver
              custom web solutions that reflect your brand, engage your
              audience, and drive conversions. Our web development services
              include everything from basic website design to complex e-commerce
              platforms, and we use the latest technologies and frameworks to
              ensure that your website is fast, secure, and optimized for search
              engines. We also provide ongoing maintenance and support to keep
              your website up-to-date and running smoothly. Whether you are a
              startup, a small business, or a large corporation, we have the
              expertise and experience to create a website that meets your
              unique needs and goals. We take the time to understand your
              business and your target audience, and we work closely with you to
              ensure that your website reflects your brand, vision, and values.
            </p>
          </div>
          <div className={StylesSectDos.lenguajesimg}></div>
        </div>
        <div className={StylesSectDos.contenedorboton}>
          <button className={StylesSectDos.btnheader}>Learn more...</button>
        </div>
      </section>
    </div>
  );
}
