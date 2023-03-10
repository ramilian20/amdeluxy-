import Image from "next/image";

//importacion de estilos
import StylesFooter from "../../styles/globales/footer.module.css";

export default function footer() {
  return (
    <div>
      <footer className={StylesFooter.footer}>
        <div className={StylesFooter.contenedorredes}>
          <div className={StylesFooter.iconofooter}>
            <Image
              src="/assets/img/icon/map.png"
              alt="ubicacion"
              width={55}
              height={55}
            />
            <p className={StylesFooter.textfooter}>Devenport, FI USA</p>
          </div>
          <div className={StylesFooter.iconofooter}>
            <Image
              src="/assets/img/icon/send-mail.png"
              alt="email"
              width={55}
              height={55}
            />
            <p className={StylesFooter.textfooter}>welcome@amdeluxy.com</p>
          </div>
          <div className={StylesFooter.iconofooter}>
            <Image
              src="/assets/img/icon/whatsapp.png"
              alt="whatsapp"
              width={55}
              height={55}
            />
            <p className={StylesFooter.textfooter}>
              +1-786-3558470 <br />
              skype Whatsapp
            </p>
          </div>
        </div>
        <div className={StylesFooter.logoredes}>
          <div className={StylesFooter.logocontenedor}>
            <Image
              src="/assets/img/AM Deluxy2.png"
              alt="logo"
              width={200}
              height={200}
            />
          </div>
          <div className={StylesFooter.redescontenedor}>
            <Image
              src="/assets/img/icon/gorjeo.png"
              alt="twitter"
              width={55}
              height={55}
            />

            <Image
              src="/assets/img/icon/facebook.png"
              alt="facebook"
              width={55}
              height={55}
            />

            <Image
              src="/assets/img/icon/instagram.png"
              alt="instagram"
              width={55}
              height={55}
            />

            <Image
              src="/assets/img/icon/linkedin.png"
              alt="linkedin"
              width={55}
              height={55}
            />

            <Image
              src="/assets/img/icon/githubicon.png"
              alt="github"
              width={55}
              height={55}
            />
          </div>
        </div>
        <div className={StylesFooter.copyright}>
          <p className={StylesFooter.copyrighttext}>
            2022 Copyright - Software Development Company
          </p>
        </div>
      </footer>
    </div>
  );
}
