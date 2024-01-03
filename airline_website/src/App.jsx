import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Search from './Components/Search/Search';
import Info from './Components/Info/Info';
import Support from './Components/Support/Support';
import Lounge from './Components/Lounge/Lounge'; 
import Travelers from './Components/Travelers/Travelers';
import Subscribers from './Components/Subscribers/Subscribers';
import Footer from './Components/Footer/Footer'; 
const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Search />
      <Support />
      <Info />
      
      <Travelers />
      {/*<Subscribers />
  <Footer />*/}
    </div>
  );
};

export default App;
