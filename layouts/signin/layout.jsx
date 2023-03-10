//importaciones de componentes
import Header from "../../components/globales/header";

//importacines de estilos de layout
import styles from "../../styles/globales.module.css";

export default function layout({ children }) {
  return (
    <div className={styles.contenedor}>
      <Header title="Sign In" />
      <div className={styles.contenedor}>{children}</div>
    </div>
  );
}
