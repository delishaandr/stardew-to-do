import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddCrop from './pages/AddCrop';
import AddToDo from './pages/AddToDo';

import './App.css';

function App() {
  return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-crop" element={<AddCrop />} />
          <Route path="/add-todo" element={<AddToDo />} />
       </Routes>
    </>
  );
}

export default App;
