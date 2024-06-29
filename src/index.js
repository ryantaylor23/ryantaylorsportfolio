import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Experience from './pages/Experience.js';
import Skills from './pages/Skills.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const root = createRoot(document.getElementById('app'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'experience',
    element: <Experience />,
  },
  {
    path: 'skills',
    element: <Skills />,
  },
  {
    path: 'about',
    element: <About />,
  },
  {
    path: 'contact',
    element: <Contact />,
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
