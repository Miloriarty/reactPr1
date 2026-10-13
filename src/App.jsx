import {useState} from 'react';
import ProductCard from "./ProductCard.jsx";
import HeroImage from "./assets/hero.png";

function App() {
  return (
      <div style={{
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
          alignSelf: 'center',
      }}>
          <ProductCard name="something1" price="100" image={HeroImage}/>
          <ProductCard name="something2" price="200" image={HeroImage}/>
          <ProductCard name="something3" price="300" image={HeroImage}/>
      </div>
  )
}

export default App;