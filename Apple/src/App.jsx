import "./App.css";
import MainProductsComponent from "./Components/MainProducts.jsx";
import NewProducts from "./Components/NewProducts.jsx";
import Footer from "./Footer/Footer.jsx";
import Header from "./Header/Header.jsx";
import React, { useEffect, useState } from "react";
import "./Components/GiftCard.css"


function App() {
  const [location, setLocation] = useState("");

  useEffect(() => {
    const userLanguage = navigator.language || navigator.userLanguage;
    const lang = userLanguage.split("-")[0];

    const locationsByLanguage = {
      en: "United States",
      tr: "Türkiye",
      de: "Deutschland",
      fr: "France",
      es: "España",
      it: "Italia",
    };

    if (lang in locationsByLanguage) {
      setLocation(locationsByLanguage[lang]);
    } else {
      setLocation("Default Location");
    }
  }, []);

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <section>
          <MainProductsComponent />
        </section>
        <section>
          <NewProducts />
        </section>
      </main>
      <footer>
        <Footer location={location} />
      </footer>
    </>
  );
}

export default App;
