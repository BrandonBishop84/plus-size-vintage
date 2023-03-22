import React from 'react';
import './App.css';
import { createRoot } from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Link,
} from 'react-router-dom';
import Products from './routes/Products';
import Home from './routes/Home';
import Search from './routes/Search';
import About from './routes/About';
import Contact from './routes/Contact';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: 'products',
		element: <Products />,
	},
	{
		path: 'search',
		element: <Search />,
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

createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />
);
