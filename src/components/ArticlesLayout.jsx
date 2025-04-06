import React from 'react';
import { Outlet } from 'react-router-dom';

function ArticlesLayout() {
  return (
    <div className="articles-layout">
      <h1>Articles</h1>
      
      <Outlet />
      
      {/* ... existing code ... */}
    </div>
  );
}

export default ArticlesLayout; 