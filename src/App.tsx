import { BrowserRouter } from "react-router-dom";
import Header from "./components/layouts/Header"
import About from "./components/sections/About"
import Home from "./components/sections/Home"
import Portfolio from "./components/sections/Portfolio";
import Footer from "./components/layouts/Footer"
import "./custom.scss";
import Contact from "./components/sections/Contact";


const App: React.FC = () => {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Home />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
