import Navigation from "./components/Navigation";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const App = () => {
  return (
    <>
      <Navigation />

      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://cdn.salla.sa/RvPxw/9e1e20df-5f56-4a2c-8a93-1a51763055f0-1000x1000-LPk5VAMVhGjCvODJfWWdSn18nP5gbnFPztja1GHj.png"
        />
        <Card.Body>
          <Card.Title>Dior Bag</Card.Title>
          <Card.Text>
            An elegant and stylish Dior bag, perfect for every occasion.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default App;
