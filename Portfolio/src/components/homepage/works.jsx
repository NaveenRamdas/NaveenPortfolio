import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import brigoshaIcon from "../../Assests/brigoshaLogo.png"

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={brigoshaIcon}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src={brigoshaIcon}
								alt="brigosha"
								className="work-image"
							/>
							<div className="work-title">Brigosha Technologies Pvt Ltd</div>
							<div className="work-subtitle">
								Junior Software Engineer
							</div>
							<div className="work-duration">2022 - Present</div>
						</div>

						{/* <div className="work">
							<img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Twitter</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2019 - Present</div>
						</div> */}
					</div>
				}
			/>
		</div>
	);
};

export default Works;
