import { useState } from 'react';
import { APP_ROUTES } from './Routes';
import { NotFound } from './pages/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {APP_ROUTES.map(({ path, element: Element }, index) => {
          return <Route path={path} element={<Element />} key={index} />;
        })}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
