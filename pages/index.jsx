import Layout from "../layouts/principal/layout";

//importaciones de componentes
import SectUno from "../components/principal/sectionuno";
import SectDos from "../components/principal/sectiondos";
import SectTres from "../components/principal/sectiontres";
import Sectcuatro from "../components/principal/sectioncuatro";
import SectCinco from "../components/principal/sectioncinco";

export default function index() {
  return (
    <div>
      <Layout>
        <SectUno />
        <SectDos />
        <SectTres />
        <Sectcuatro />
        <SectCinco />
      </Layout>
    </div>
  );
}
