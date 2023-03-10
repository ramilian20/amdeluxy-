import Image from "next/image";

//importaciones de estilos
import StylesSectionTres from "../../styles/principal/sectiontres.module.css";

export default function sectiontres() {
  return (
    <div>
      <section className={StylesSectionTres.buildmobile}>
        <h1 className={StylesSectionTres.buildmobiletitle}>
          Build Custom Mobile Apps for Your Business or Brand
        </h1>
        <div className={StylesSectionTres.imgdescripcionmobile}>
          <div className={StylesSectionTres.imgmobile}>
            <Image
              className={StylesSectionTres.mobileimg}
              src="/assets/img/app-mobile.png"
              alt="app mobile"
              width={100}
              height={100}
            />

            <Image
              className={StylesSectionTres.mobileimg}
              src="/assets/img/android.png"
              alt="android"
              width={120}
              height={100}
            />
          </div>
          <div className={StylesSectionTres.descripcionmobile}>
            <p className={StylesSectionTres.descripcionmobiletext}>
              In today's mobile-driven world, having a custom mobile app can
              help you reach your customers where they are, on the go. At AM
              Deluxy, we specialize in developing high-quality, user-friendly
              mobile apps for both Android and iOS plataforms. <br />
              Our team of expert developers will work with you to understand
              your business needs and create a custom app that meets your
              requirements. We use the lastest technologies and industry best
              practices to deliver apps that are fast, secure, and scalable.{" "}
              <br />
              We provide end-toend app development services, from
              conceptualization and design to development, testing, and
              deployment. We will also guide you through the process of
              submitting your app to the app stores, and we provide ongoing
              maintenance and support to ensure your app stays up-to-date and
              relevant.
            </p>
          </div>
        </div>
        <div className={StylesSectionTres.botonlearnmore}>
          <button className={StylesSectionTres.btnheader}>Learn more...</button>
        </div>
      </section>
    </div>
  );
}
