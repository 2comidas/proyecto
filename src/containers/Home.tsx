import React from "react";

import { Hero, Content, Questions, JoinUs } from '../components';

export const Home: React.FC = () => {
    return (
        <React.Fragment>
            <Hero />
            <JoinUs />
            <Content />
            <Questions />
        </React.Fragment>
    );
};