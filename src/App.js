import React from "react";
import Booking from "./components/Booking.jsx";
import Food from "./components/Food.jsx";
import Footer from "./components/Footer.jsx";
import Gallery from "./components/Gallery.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Offers from "./components/Offers.jsx";
import Plan from "./components/Plan.jsx";
import Rooms from "./components/Rooms.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Offers />
      <Plan />
      <Booking />
      <Rooms />
      <Food />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
