import React from 'react';
import Navbar from './../components/Navbar';
import { Container } from '@mui/material';
import Main from '../components/Main.tsx';
import Counter from '../components/Counter.tsx';
import Specials from '../components/Specials.tsx';

const LandingPage = () => {
    return (
        <>
            <Navbar />
            <Container>
                <Main />
                <Counter />
                <Specials />
                {/* <Services /> */}
                {/* <Rate /> */}
                {/* <ContactUs /> */}
                {/* <Blog /> */}
            </Container>
            {/* <Footer /> */}
        </>
    );
};

export default LandingPage;