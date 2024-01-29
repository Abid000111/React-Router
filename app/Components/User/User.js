import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
	const {userid} = useParams();
	return <div className="h-28 bg-gray-500 flex justify-center items-center text-4xl font-bold">User: {userid}</div>;
};

export default User;
