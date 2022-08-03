import React from 'react';
import Header from '../Header/Header';

const AboutUs = () => {
    return (
        <>
            <Header color={"#000"} />
            <div className='container' style={{ marginBlock: "1rem", minHeight: "50vh" }}>
                <h2>About MaxFitness</h2>
                <p>MaxFitness was estabalished in 2022 by Rokan Uddin.  It is an indipendent service provider. We share training tutorials for people. We provide gym subscription.</p>
            </div>
        </>
    );
};

export default AboutUs;