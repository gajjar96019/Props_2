// import logo from './logo.svg';
import './App.css';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './Slider';
import Box from './Box';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

var menu = [
  { 'Home': 'Home' },
  { 'Home': 'Contact' },
  { 'Home': 'Blogs' },
  { 'Home': 'Hello' },
  { 'Home': 'About' }
];

var arr = [
  { 'img': require(`./images/1.jpg`) },
  { 'img': require(`./images/2.jpg`) },
];

var card = [
  { title: 'Development Courses', img: require(`./images/s1.jpg`) },
  { title: 'Design Courses', img: require(`./images/s2.webp`) },
  { title: 'Programming IT', img: require(`./images/s3.webp`) },
  { title: 'Trendy Courses', img: require(`./images/s4.webp`) },
  { title: 'Civil-Mech. Engineering', img: require(`./images/s5.webp`) },
  { title: 'Business Development', img: require(`./images/s6.png`) }
];

function App() {
  return (
    <div className="">

      <div className='d-flex justify-content-center'>
        {
          menu.map((item) => {
            return (
              <div className='m-3'>
                <Home name={item.Home} />
              </div>
            )
          })
        }
      </div>

      <OwlCarousel className='owl-theme' items={1} loop margin={10} dotsEach={false}>
        {
          arr.map((item) => {
            return (
              <Slider img={item.img} />
            )
          })
        }
      </OwlCarousel>

      <div className='d-flex flex-nowrap'>
        {
          card.map((item) => {
            return (
              <Box title={item.title} img={item.img} />
            )
          })
        }
      </div>

    </div>
  );
}

export default App;
