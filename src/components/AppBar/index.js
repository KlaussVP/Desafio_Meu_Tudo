import React from "react";
import { useLocation } from "react-router";
import HomeHeader from "./HomeHeader";
import ModelHeader from "./ModelHeader";

export default function AppBar() {
	const currentRoute = useLocation();

	if (currentRoute.pathname === "/") {
		return (
			<HomeHeader />
		);
	} else {
		return (
			<ModelHeader />
		);
	}
}
