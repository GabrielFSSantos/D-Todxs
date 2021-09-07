import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <BrowserRouter>
    <h1>D'Todxs</h1>

    <GlobalStyle/>
  </BrowserRouter>
);

export default App;