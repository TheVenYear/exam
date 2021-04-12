import { Card } from 'react-bootstrap';

const Item = ({ title, description, img, link }) => {
  return (
    <Card style={{ marginBottom: '50px' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <a className="btn btn-primary" href={link}>
          Переход к работе
        </a>
      </Card.Body>
    </Card>
  );
};

export default Item;
