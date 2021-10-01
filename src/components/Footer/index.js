import React, { useState } from "react";
import { FooterContainer, MenuOption } from "./styles";
import { AiOutlineHome, AiOutlineQuestionCircle } from "react-icons/ai";
import { FiFileText } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { useHistory, useLocation } from "react-router";

export default function Footer() {
	const [selectHome, setSelectHome] = useState(true);
	const [selectContracts, setSelectContracts] = useState(false);
	const [selectDoubts, setSelectDoubts] = useState(false);
	const [selectAccount, setSelectAccount] = useState(false);
	const currentRoute = useLocation();
	const history = useHistory();

	function selection(classList) {
		for (let i = 0; i < classList.length; i++) {
			if (classList[i] === "selHome") {
				setSelectHome(true);
				setSelectContracts(false);
				setSelectDoubts(false);
				setSelectAccount(false);
				history.push("/");
			} else if (classList[i] === "selContracts") {
				setSelectHome(false);
				setSelectContracts(true);
				setSelectDoubts(false);
				setSelectAccount(false);
			} else if (classList[i] === "selDoubts") {
				setSelectHome(false);
				setSelectContracts(false);
				setSelectDoubts(true);
				setSelectAccount(false);
			} else if (classList[i] === "selAccount") {
				setSelectHome(false);
				setSelectContracts(false);
				setSelectDoubts(false);
				setSelectAccount(true);
			}
		}
	}

	return (
		<FooterContainer>
			<MenuOption isSelected={selectHome} onClick={(e) => selection(e.target.classList)} className="selHome">
				<AiOutlineHome className="home icon selHome"/>
				<p className="selHome">Início</p>
			</MenuOption>
			<MenuOption isSelected={selectContracts} onClick={(e) => selection(e.target.classList)} className="selContracts">
				<FiFileText className="contracts icon selContracts"/>
				<p className="selContracts">Contratos</p>
				{ currentRoute.pathname === "/" 
					? <div className="notification"></div>
					: null
				}
			</MenuOption>
			<MenuOption isSelected={selectDoubts} onClick={(e) => selection(e.target.classList)} className="selDoubts">
				<AiOutlineQuestionCircle className="doubts icon selDoubts"/>
				<p className="selDoubts">Dúvidas</p>
			</MenuOption>
			<MenuOption isSelected={selectAccount} onClick={(e) => selection(e.target.classList)} className="selAccount">
				<FaRegUser className="account icon selAccount"/>
				<p className="selAccount">Conta</p>
			</MenuOption>
		</FooterContainer>
	);
}