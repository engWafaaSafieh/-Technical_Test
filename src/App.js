import Header from "./components/Header";
import "./App.css"
import Explore from "./components/Explore";
import Category from "./components/Category";
import Package from "./components/Package";
import Islands from "./components/Islands";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import StoriesMap from "./components/StoriesMap";

function App() {

  return (
    <div className="app">
      <Header ></Header>
      <Explore></Explore>
      <Category></Category>
      <Package></Package>
      <Islands></Islands>
      <StoriesMap></StoriesMap>
      <Testimonial></Testimonial>
      <Footer></Footer>

    </div>
  );
}

export default App;
