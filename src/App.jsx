import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Dropdown, Card, Image } from "semantic-ui-react";
import "./dist/css/main.css";
import { dummyImg } from "./tempdata/index.js";

const options = [
  { key: 1, text: "Italian", value: 1 },
  { key: 2, text: "Asian", value: 2 },
];

const price = [
  { key: 1, text: "0 - 100", value: 1 },
  { key: 2, text: "101 - 200", value: 2 },
  { key: 3, text: "200 - 300", value: 3 },
  { key: 4, text: "> 300", value: 4 },
];

function App() {
  const PAGE_SIZE = 8;

  const [resName, setResName] = useState([]);

  useEffect(() => {
    fetch("https://pizzaallapala.p.rapidapi.com/productos", {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "afac640e36msh5f10b465f821b5ap187722jsnde75bec25f6c",
        "X-RapidAPI-Host": "pizzaallapala.p.rapidapi.com",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.productos);
        setResName(data.productos);
      });
  }, []);

  return (
    <div className="semua">
      <Container>
        <div className="judul mb-4">
          <h1 className="mb-3 mt-4">Restaurants</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsa{" "}
            <br />
            nisi eligendi nostrum delectus odio cumque dolore quidem atque.
          </p>
        </div>
        <div className="filter-by mb-5">
          <form>
            <label className="me-4">Filter By:</label>

            <input type="radio" id="Open" name="brand" value="Open"></input>
            <label for="Open" className="me-4">
              Open now
            </label>

            <Dropdown
              selection
              options={price}
              placeholder="Price"
              className="me-4"
            />

            <Dropdown
              selection
              options={options}
              placeholder="Categories"
              className="me-5"
            />

            <input type="reset" value="Clear all" className="ms-5"></input>
          </form>
        </div>
        <div className="daftar w-100 min-vh-100">
          <h3 className="mb-4">All Restaurants</h3>
          <Row>
            {resName.map((items, index) => (
              <Col key={index}>
                <img src={items.linkImagen} />
                <h5>{items.nombre}</h5>
                <div>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Italian . {items.precio}</p>
                  <p>OPEN</p>
                </div>
                <div className="butcontainer">
                  <div className="center">
                    <button className="learn-more">LEARN MORE</button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        <div className="load">
          <div className="butcontainer">
            <div className="center">
              <button className="load-more">LOAD MORE</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
