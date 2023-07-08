import react from 'react';
import Navbar from './components/Navbar.tsx';
import Main from './components/Main.tsx';
import Counter from './components/Counter.tsx';
import Services from './components/Services.tsx';
import Rate from './components/Rate.tsx';
import { Container } from '@mui/material';
import ContactUs from './components/ContactUs.tsx';

function App() {

  return (
    <>
      <Navbar />
      <Container>
        <Main />
        <Counter />
        {/* <Services /> */}
        <Rate />
        <ContactUs />
      </Container>
    </>
  );
}

export default App;
