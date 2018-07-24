import React from 'react';
import './main.less';
import { hot } from 'react-hot-loader';

import ResponsiveCarousel from './ResponsiveCarousel.jsx';
import ImageCarousel from './ImageCarousel.jsx';

const App = () => (
    <div>
        <ResponsiveCarousel />
        <ImageCarousel />
    </div>
);

export default hot(module)(App);
