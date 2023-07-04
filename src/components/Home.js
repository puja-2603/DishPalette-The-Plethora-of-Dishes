import { BrowserRouter} from "react-router-dom";
import Category from './pages/Category'
import Slider from './Slider'
import Page from './pages/Page'
import Veg from './pages/Veg'
import NonVeg from './pages/NonVeg'
import Footer from './Footer'

const Home = () => {
    return (
      <>
      <Slider/>
      <BrowserRouter>
      <Category/>
    </BrowserRouter> 
       <Page/>
       <Veg/>
        <NonVeg/>
      <Footer/> 
      </>
    )
  };
  
  export default Home;