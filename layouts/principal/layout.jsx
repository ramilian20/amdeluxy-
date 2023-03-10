import Header from "../../components/globales/header";
import Footer from "../../components/globales/footer";

export default function layout({ children }) {
  return (
    <div>
      <Header title="Am Deluxy Service IT" />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
