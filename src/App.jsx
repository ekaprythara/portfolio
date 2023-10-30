import AOS from "aos";
import "aos/dist/aos.css";
import Container from "./layouts/Container";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Wrapper from "./layouts/Wrapper";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Durasi animasi
AOS.init({
  duration: 500,
});

function App() {
  return (
    <Container>
      <ToastContainer className="right-5 top-20" />
      <ScrollToTop />
      <Navbar />
      <Home />
      <Wrapper>
        <About />
        <Projects />
        <Contact />
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default App;
