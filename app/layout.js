"use client";

import "./globals.css";
import React from "react";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements
} from "react-router-dom";
import Home from "./Components/Home/Home";
import Root from "./Root";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import User from "./Components/User/User";
import Github, { githubInfoLoader } from "./Components/Github/Github";

// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <Root />,
// 		children: [
// 			{
// 				path: "",
// 				element: <Home />
// 			},
// 			{
// 				path: "about",
// 				element: <About />
// 			},
// 			{
// 				path: "contact",
// 				element: <Contact/>
// 			}
// 		]
// 	}
// ]);

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />}>
			<Route path="" element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="contact" element={<Contact />} />
			<Route 
			loader={githubInfoLoader}
			path="github" element={<Github />} />
			<Route path="user/:userid" element={<User />} />
		</Route>
	)
);

export default function RootLayout({ children }) {
	return (
		<>
			<html lang="en">
				<head>
					<title>React Router</title>
				</head>
				<body>
					<RouterProvider router={router}>{children}</RouterProvider>
				</body>
			</html>
		</>
	);
}
