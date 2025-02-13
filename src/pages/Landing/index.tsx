import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHearthIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css';


function Landing() {
	const [totalConnections, setTotalConnections] = useState(0);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => {
		api.get('/connections')
			.then(response => {
				setTotalConnections(response.data.total);
			})
	}, [totalConnections])



	return (
		<div id="page-landing">
			<div id="page-landing-content" className="container">
				<div className="logo-container">
					<img src={logoImg} alt="Proffy" />
					<h2>Sua plataforma de estudos online.</h2>
				</div>

				<div className="hero-image">
					<img
						src={landingImg}
						alt="Plataforma de Estudos"
					/>
				</div>


				<div className="buttons-container">
					<Link to="/study" className='study'>
						<img src={studyIcon} alt="Estudar" />
                        Estudar
                    </Link>
					<Link to="/give-classes" className='give-classes'>
						<img src={giveClassesIcon} alt="Estudar" />
                        Dar Aula
                    </Link>
				</div>

				<span className="total-connections">
					Total de {totalConnections} conexões já realizadas <img src={purpleHearthIcon} alt="Coração Roxo" />
				</span>

			</div>
		</div>
	)
}

export default Landing;
