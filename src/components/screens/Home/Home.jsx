import React from 'react';
import './Home.scss';
import { LabeledButton } from './../../common/LabeledButton/LabeledButton';
import { InfoBox } from '../../common/InfoBox/InfoBox.jsx';
import { List } from '../../common/List/List.jsx';

const rules = ["don't be idiot", "don't be stupid", "don't swear", "don't get mad"];

export const Home = () => {
	return (
		<div className='Home'>
			<div className='container--center'>
				<h1 className='Home__name text--accent--1'>Faclia</h1>
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
						<LabeledButton label='Inregistrare' />
					</div>
				</div>
			</div>
		</div>
	);
};
