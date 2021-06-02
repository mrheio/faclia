import React from 'react';
import './Home.scss';
import logo from '../../../res/images/logo.svg';
import { LabeledButton } from './../../common/LabeledButton/LabeledButton';
import { InfoBox } from '../../common/InfoBox/InfoBox.jsx';
import { List } from '../../common/List/List.jsx';

const rules = ["don't be idiot", "don't be stupid", "don't swear", "don't get mad"];

export const Home = () => {
	return (
		<div className='Home'>
			<h1 className='Home__name'>
				Facl
				<img src={logo} alt='' />a
			</h1>
			<div className='Home__main-content'>
				<InfoBox
					title='Cine suntem?'
					text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, facere. Placeat, ullam ipsam aspernatur rerum dolores dicta ex? Error, quidem.'
				/>
				<InfoBox
					title='Ce facem si de ce?'
					text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, facere. Placeat, ullam ipsam aspernatur rerum dolores dicta ex? Error, quidem.'
				/>
				<List title='Reguli' listItems={rules} />
				<div className='Home__options'>
					<LabeledButton label='Intra in cont' />
					<div className='Home__register'>
						<p>
							Nu ai cont? <LabeledButton label='Inregistrare' />
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
