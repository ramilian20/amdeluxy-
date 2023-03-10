import Image from "next/image";

//importaciones de estilos
import styles from "../../styles/globales.module.css";
import stylesSignIn from "../../styles/signin/signin.module.css";

export default function signin() {
  return (
    <div className={styles.contenedor}>
      <section className={stylesSignIn.signin}>
        <div className={stylesSignIn.contenedorsignin}>
          <div className={stylesSignIn.signinimg}>
            <Image
              src="/assets/img/imglogin.png"
              alt="Login"
              width={300}
              height={200}
            />
          </div>
          <div className={stylesSignIn.formulariocontenedor}>
            <form action="" className={stylesSignIn.formulario}>
              <h1 className={stylesSignIn.titleform}>SIGN IN</h1>
              <input
                className={stylesSignIn.inputform}
                type="email"
                name="email"
                id="email"
                placeholder="E-mail or Phone"
              />
              <input
                className={stylesSignIn.inputform}
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <input
                className={stylesSignIn.btnlogin}
                type="submit"
                value="Login"
              />
              <div className={stylesSignIn.opcionesform}>
                <a className={stylesSignIn.opciones} href="">
                  Create Account
                </a>
                <a className={stylesSignIn.opciones} href="">
                  Need Help?
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
