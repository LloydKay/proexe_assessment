import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom'

import AddNew from './components/pages/AddNew';
import Edit from './components/pages/Edit';
import Home from './components/pages/Home';


function App() {
  return (
    
      <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/edit" element={ <Edit/> } />
          <Route path="/addnew" element={ <AddNew/> } />
      </Routes>
  );
}

export default App;