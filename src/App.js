import React from 'react'
import { Routes, Route } from "react-router-dom";
import PostList from './components/Posts/postList';
import InfoPage from './components/Info/infoPage';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/info" element={<InfoPage />} />
      </Routes>
    </div>
  );
};     

export default App;
