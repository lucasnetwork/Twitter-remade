import React from 'react';
import Routes from './routes'
import {GlobalStyles} from './styles/Global'

function App() {
  return (
    <>
      <GlobalStyles/>
      <div className="App">
        <Routes>
        </Routes>
      </div>
    </>
  );
}

export default App;
