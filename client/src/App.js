import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Discover from "./pages/Discover";
// import About from "./pages/About";
// import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Filter from "./components/Filter";
import AllShops from "./components/AllShops";
import ShopDetails from "./components/ShopDetails";
import SanFrancisco from "./components/SanFrancisco";
import FirstDecisions from "./components/FirstDecisions";
import ArtOfLairs from "./components/ArtOfLairs";
import Makkah from "./components/Makkah";
import KingOfShave from "./components/KingOfShave";
import Maximillians from "./components/Maximillians";

// const Image = <img 

const App = () => (
  <Router>
    <div>
      <div>
        <Wrapper>
          <Route exact path="/" component={AllShops} />
          {/* <Route exact path="/shops/:id" component={ShopDetails} /> */}
          <Route exact path="/shops/5b46ab333846cf0509de85d4" component={SanFrancisco} />
          <Route exact path="/shops/5b4d2dee920ce80a9bb66478" component={FirstDecisions} />
          <Route exact path="/shops/5b4d2ebe920ce80a9bb6647a" component={ArtOfLairs} />
          <Route exact path="/shops/5b4d2f35920ce80a9bb6647b" component={Makkah} />
          <Route exact path="/shops/5b4d2f91920ce80a9bb6647c" component={KingOfShave} />
          <Route exact path="/shops/5b4d2fbe920ce80a9bb6647d" component={Maximillians} />
        </Wrapper>
      </div>

      {/* <Wrapper>
        <Route exact path="/" component={AllShops} />
      </Wrapper> */}

      {/* <Wrapper>
        <Route exact path="/shop/:id component={ShopDetails} />"
        <Route exact path="/" component={About} />
        <Route exact path="/shops" component={AllShops} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/search" component={Search} />
      </Wrapper> */}
    </div>
  </Router>
);

export default App;
