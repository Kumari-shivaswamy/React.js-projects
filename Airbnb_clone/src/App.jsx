import "./styles.css";
import React from "react";
import Navbar from "./Compnents/Navbar";
import Hero from "./Compnents/Hero";
import Card from "./Compnents/Card";
import data from "./Compnents/data";

const cards = data.map((item) => {
  return (
    <Card
      key={item.id}
      // img={item.coverImg}
      // rating={item.stats.rating}
      // reviewCount={item.stats.reviewCount}
      // location={item.location}
      // title={item.title}
      // price={item.price}
      // openSpots={item.openSpots}
      // the whole of the above code can be replced with a single line below using spread operaator i.e.., '...item'
      {...item}
    />
  );
});
console.log(<data />);

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
