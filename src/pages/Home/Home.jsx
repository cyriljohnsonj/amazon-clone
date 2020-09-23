import React from "react";

import "./Home.css";

import Product from "../../components/Product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
          alt="Home"
        />
        <div className="home__row">
          <Product
            id={1}
            title="The Lean Startup"
            price={199}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />
          <Product
            id={2}
            title="Kenwood FDM301SS Multipro Compact (800 Watt) Foodprocessor"
            price={16415}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71DbzDlY7rL._SX679_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id={3}
            title="Apple iPhone 11 Pro Max (64GB) - Silver"
            price={109790}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61oub4ycmVL._SX679_.jpg"
          />
          <Product
            id={4}
            title="Apple AirPods Pro"
            price={21299}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71zny7BTRlL._SX569_.jpg"
          />
          <Product
            id={5}
            title="Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Space Grey"
            price={1959029}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81bF-d1dNoL._SX466_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id={6}
            title="OnePlus 138.8 cm (55 inches) Q1 Series 4K Certified Android QLED TV 55Q1IN-1 (Black) (Without Stand)"
            price={62899}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71EO3uGdJbL._SX569_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
