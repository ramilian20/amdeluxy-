//importacion de layout
import Layout from "../layouts/signin/layout";

//importaciones de las sectiones
import Signin from "../components/signin/signin";

export default function signup() {
  return (
    <Layout>
      <Signin />
    </Layout>
  );
}
