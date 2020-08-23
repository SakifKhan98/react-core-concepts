import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const nayoks = ["Raza", "Bappa", "Salman", "Bappy", "Shuvo"];
  const products = [
    { name: "photoshop", price: "200$" },
    { name: "Illustrator", price: "250$" },
    { name: "Adobe Reader", price: "100$" },
  ];
  const productNames = products.map((product) => product.name);
  console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react Person.</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {nayoks.map((nayok) => (
            <li>{nayok}</li>
          ))}
          {products.map((product) => (
            <li>{product.name}</li>
          ))}
        </ul>
        {products.map((product) => (
          <Product product={product}></Product>
        ))}
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(20);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

function Person(props) {
  const personStyle = {
    border: "2px solid yellow",
    margin: "10px",
  };
  return (
    <div style={personStyle}>
      <h1>Nayok: {props.name}</h1>
      <h3>Hero of {props.nayika}</h3>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    border: "1px solid gray",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    height: "200px",
    width: "200px",
    float: "left",
    color: "black",
    margin: "10px",
  };
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h3>{price}</h3>
      <h1></h1>
      <button>Buy Now!</button>
    </div>
  );
}

export default App;
