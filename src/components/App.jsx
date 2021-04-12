import { Container } from 'react-bootstrap';
import Navbar from './Navbar';
import Item from './Item';
import items from '../common/items';

const App = () => {
  return (
    <>
      <Navbar />
      <Container style={{ marginTop: '30px' }}>
        {items.map((item) => (
          <Item {...item} />
        ))}
      </Container>
    </>
  );
};

export default App;
