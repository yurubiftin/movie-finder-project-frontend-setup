import React from 'react';
import MovieList from './MovieList';
import {Routes, Route} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import { useState } from 'react';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (

    <div>
      
      <Routes> 

          <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated}/>} />
          <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated}/>} />
          {isAuthenticated && (
            <>
              <Route path="MovieList" element={<MovieList/>} />
              
            </>
          )}

      </Routes>
    </div>
  )
}
export default App
