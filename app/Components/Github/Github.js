import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


const Github = () => {
	const data = useLoaderData();
	// const [data, setData] = useState([]);
	// useEffect(() => {
	// 	fetch("https://api.github.com/users/Abid000111")
	// 	.then((res) => res.json())
	// 	.then((data) => setData(data))
	// }, [])

	return (
		<>
			<div className=" bg-gray-500 text-4xl font-bold flex flex-col justify-center items-center">
				Github followers: {data.followers}
				<img className="" src={data.avatar_url} />
			</div>
		</>
	);
};

export default Github;

export const githubInfoLoader = async () => {
	const response = await fetch("https://api.github.com/users/Abid000111");
	return response.json();
};
