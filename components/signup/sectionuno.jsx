import Image from "next/image";

//importaciones de estilos
import StylesSignUp from "../../styles/signup/signup.module.css";
import styles from "../../styles/globales.module.css";

export default function sectionuno() {
  return (
    <div className={styles.contenedor}>
      <section className={StylesSignUp.signup}>
        <div className={StylesSignUp.contenedorsignup}>
          <div className={StylesSignUp.textosignup}>
            <div className={StylesSignUp.contenedortextocontacto}>
              <div className={StylesSignUp.titleform}>
                <h1 className={StylesSignUp.formtitle}>Get in touch.</h1>
              </div>
              <div className={StylesSignUp.textform}>
                <p className={StylesSignUp.formtext}>
                  We're here to help and answer any <br />
                  questions you might have. We will <br />
                  answer your inquires in a <br />
                  maximum of 48 hours.
                </p>
              </div>
              <div className={StylesSignUp.contactoform}>
                <div className={StylesSignUp.contacto}>
                  <Image
                    src="/assets/img/help.png"
                    alt="Help"
                    width={16}
                    height={16}
                    className={StylesSignUp.iconocontacto}
                  />
                  <p className={StylesSignUp.textcontacto}>help@amdeluxy.com</p>
                </div>
                <div className={StylesSignUp.contacto}>
                  <Image
                    src="/assets/img/phone.png"
                    alt="Phone"
                    width={16}
                    height={16}
                    className={StylesSignUp.iconocontacto}
                  />
                  <p className={StylesSignUp.textcontacto}>+1-786-3554870</p>
                </div>
                <div className={StylesSignUp.contacto}>
                  <Image
                    src="/assets/img/amdeluxyicon.png"
                    alt="Amdeluxy"
                    width={16}
                    height={16}
                    className={StylesSignUp.iconocontacto}
                  />
                  <p className={StylesSignUp.textcontacto}>amdeluxy.com</p>
                </div>
                <div className={StylesSignUp.contacto}>
                  <Image
                    src="/assets/img/devenport.png"
                    alt="Devenport"
                    width={16}
                    height={16}
                    className={StylesSignUp.iconocontacto}
                  />
                  <p className={StylesSignUp.textcontacto}>
                    Devenport, fl 33837
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={StylesSignUp.formulariosignup}>
            <form action="" className={StylesSignUp.formulariosign}>
              <div className={StylesSignUp.inputsformularios}>
                <input
                  className={StylesSignUp.inputformulariouno}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                />
                <input
                  className={StylesSignUp.inputformulariouno}
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Last Name"
                />
              </div>
              <input
                className={StylesSignUp.inputformulario}
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
              />
              <input
                className={StylesSignUp.inputformulario}
                type="number"
                id="phone"
                name="phone"
                placeholder="Phone Number"
              />
              <input
                className={StylesSignUp.inputformulario}
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
              <input
                className={StylesSignUp.inputformulario}
                type="password"
                id="cpassword"
                name="cpassword"
                placeholder="Confirm Password"
              />

              <div className={StylesSignUp.boton}>
                <input
                  type="submit"
                  value="Sign Up"
                  className={StylesSignUp.btnheader}
                />
              </div>
            </form>
            <div className={StylesSignUp.iconosform}>
              <Image
                src="/assets/img/icon/facebook.png"
                alt="Facebook"
                width={50}
                height={50}
              />
              <Image
                src="/assets/img/icon/gorjeo.png"
                alt="Twitter"
                width={50}
                height={50}
              />
              <Image
                src="/assets/img/icon/instagram.png"
                alt="Instagram"
                width={50}
                height={50}
              />
              <Image
                src="/assets/img/icon/linkedin.png"
                alt="Linkedin"
                width={50}
                height={50}
              />
              <Image
                src="/assets/img/icon/githubicon.png"
                alt="Github"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
