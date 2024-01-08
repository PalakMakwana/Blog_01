import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ecom1 from './Ecom1';
import { Button, Card } from 'react-bootstrap';
const App = () => {
  const cardStyle = {
    border: '1px solid #ccc', // Border style
    borderRadius: '2px', // Border radius
    width: '300px', // Width
    margin: '10px', // Margin
    padding: '5px', // Padding
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Box shadow
    //backgroundColor: 'black', // Background color
    height: '350px' // Height
    // Add any other inline styles as needed
  };

  return (
    <div className="card-container">
  
  <Ecom1/>
      <Card style={cardStyle}>
        <Card.Img variant="top" width="100px" height="200px"src="https://5.imimg.com/data5/SELLER/Default/2022/8/DI/RM/MC/8162315/fabric-sunflower-500x500.jpg" />
        <Card.Body>
          <Card.Text>flower</Card.Text>
          <Button variant="light">Explore</Button>
        </Card.Body>
      </Card>

      <Card style={cardStyle}>
        <Card.Img variant="top"width="100px" height="200px" src="https://5.imimg.com/data5/SELLER/Default/2022/8/BZ/WB/XV/8162315/fabric-sunflower-500x500.jpg" />
        <Card.Body>
          <Card.Text>Flower</Card.Text>
          <Button variant="light">Explore</Button>
        </Card.Body>
      </Card>

      <Card style={cardStyle}>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61MmRUzVOsL._AC_UF1000,1000_QL80_.jpg" width="100px" height="200px" />
        <Card.Body>
          <Card.Text>Flower</Card.Text>
          <Button variant="light">Explore</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default App;
