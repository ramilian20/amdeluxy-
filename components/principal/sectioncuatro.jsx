import Image from "next/image";

//importaciones de estilos
import StylesSectCuatro from "../../styles/principal/sectioncuatro.module.css";

export default function sectioncuatro() {
  return (
    <div>
      <section className={StylesSectCuatro.boost}>
        <div className={StylesSectCuatro.boosttitle}>
          <h1 className={StylesSectCuatro.titleboost}>
            Boost Your Online Presence and Drive Business Growth
          </h1>
        </div>

        <div className={StylesSectCuatro.boostdescripcionimg}>
          <div className={StylesSectCuatro.boosttext}>
            <p className={StylesSectCuatro.textboost}>
              In today's digital age, having a strong online presence is
              essential for business of all sizes. At AM Deluxy, we specialize
              in digital marketing services that can help you achieve your
              business goals.
              <br />
              Our team of digital marketing experts will work with you to create
              a customized strategy that is tailored to your business needs and
              goals. We provide a range of digital marketing services, including
              search emgine optimization (SEO), pay-per-click advertesting
              (PPC), social media marketing, email marketing, and content
              marketing.
              <br />
              With our digital marketing services, you can increase your online
              visibility, generate more leads, and ultimately drive more
              business growth. We use the lastest tools and techniques to ensure
              that your digital marketing campaigns are effective and efficient.{" "}
              <br />
              We also provide regular reporting and analysis, so you can track
              the performance of your campaigns and make data-driven decisions
              about how to optimize them for even better results.
            </p>
          </div>
          <div className={StylesSectCuatro.boostimg}>
            <img
              className={StylesSectCuatro.imgboost}
              src="/assets/img/cerebro.png"
              alt="inteligencia"
              width={200}
              height={200}
            />
            <img
              className={StylesSectCuatro.imgboost}
              src="/assets/img/manoRobot.png"
              alt="manoRobot"
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className={StylesSectCuatro.botonboost}>
          <button className={StylesSectCuatro.btnheader}>Learn more...</button>
        </div>
      </section>
    </div>
  );
}
