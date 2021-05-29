import React from 'react';
import './Home.scss';
import logo from '../../../res/images/logo/logo.svg';

export const Home = () => {
	return (
		<div class='Home'>
			<h1>Flacara, fara cenzura</h1>
			<div className='Home__intro'>
				<img src={logo} alt='' />
				<div className='Home__about'>
					<div>
						<h2>Cine suntem?</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eveniet ea id dolores
							fugit, vel odio sequi iste aperiam illo?
						</p>
					</div>
					<div>
						<h2>Ce facem si de ce?</h2>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, illum.</p>
					</div>
					<div>
						<h2>La ce sa te astepti?</h2>
						<ul>
							<li>Lorem, ipsum dolor.</li>
							<li>Lorem, ipsum dolor.</li>
							<li>Lorem, ipsum dolor.</li>
							<li>Lorem, ipsum dolor.</li>
							<li>Lorem ipsum dolor sit.</li>
						</ul>
					</div>
					<div>
						<h2>Reguli</h2>
						<ul>
							<li>Lorem, ipsum dolor.</li>
							<li>Lorem, ipsum dolor.</li>
							<li>Lorem, ipsum dolor.</li>
							<li>Lorem, ipsum dolor.</li>
							<li>Lorem ipsum dolor sit.</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
