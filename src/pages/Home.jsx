import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Main from '../components/Main'
import Footer from "../components/Footer";
import SobeButton from "../components/SobeButton";
import VLibras from '@djpfs/react-vlibras'

const Home = () => {


  return (
    <>
      <VLibras forceOnload={true}/>
      <Navbar />
      <Banner />
      <Main/>
      <Footer/>
      <SobeButton />
    </>
  );
};

export default Home;
