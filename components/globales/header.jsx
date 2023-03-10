import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

//importaciones de estilos css
import StylesIndex from "../../styles/globales/header.module.css";
import styles from "../../styles/globales.module.css";

export default function header({ title }) {
  return (
    <div className={styles.contenedor}>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />
      </Head>
      <div className={StylesIndex.barra}>
        <li className={StylesIndex.baratitle}>WHATSAPP: 3008430122</li>
      </div>

      <header className={StylesIndex.header}>
        <div className={StylesIndex.contenedorheader}>
          <div className={StylesIndex.logoheader}>
            <Image
              src="/assets/img/AM Deluxy2.png"
              alt="logo"
              width={200}
              height={200}
            />
          </div>
          <nav className={StylesIndex.navegacion}>
            <div className={StylesIndex.menu}>
              <div className={StylesIndex.contenedorenlace}>
                <Link className={StylesIndex.enlaceheader} href="">
                  SERVICE <i class="fa-solid fa-chevron-down icono"></i>
                </Link>
                <div className={StylesIndex.submenu}>
                  <Link className={StylesIndex.enlaceheader} href="#0">
                    APPS WEB
                  </Link>
                  <Link className={StylesIndex.enlaceheader} href="#0">
                    APPS ANDROID
                  </Link>
                  <Link className={StylesIndex.enlaceheader} href="#0">
                    APPS iOS
                  </Link>
                  <Link className={StylesIndex.enlaceheader} href="#0">
                    MARKETING DIGITAL
                  </Link>
                </div>
              </div>
              <Link className={StylesIndex.enlaceheader} href="">
                ABOUT
              </Link>
              <Link className={StylesIndex.enlaceheader} href="">
                PRICE
              </Link>
              <Link className={StylesIndex.enlaceheader} href="">
                PORTFOLIO
              </Link>
              <Link className={StylesIndex.enlaceheader} href="">
                BLOG
              </Link>
              <Link className={StylesIndex.enlaceheader} href="">
                CONTACT
              </Link>
            </div>
          </nav>
          <div className={StylesIndex.botonesheader}>
            <button className={StylesIndex.btnheader}>Sing In</button>
            <button className={StylesIndex.btnheader}>Sign Up</button>
          </div>
        </div>
      </header>
    </div>
  );
}
