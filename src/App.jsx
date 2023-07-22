import { About, Footer, Header, Skills, Testimonial, Work} from "./container"
import {Navbar} from "./components/Navbar"

const App = () => {
  return (
    <div className="bg-skin-primary-color font-DM-sans">
      <Navbar/>
      <About/>
      <Footer/>
      <Header/>
      <Skills/>
      <Testimonial/>
      <Work/>
    </div>
  )
}

export default App
