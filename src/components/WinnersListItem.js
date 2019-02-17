import React from 'react';
import FlagIconFactory from 'react-flag-icon-css';
import { getCountryCodeByNationality } from '../../src/APICalls';
const FlagIconComp = FlagIconFactory(React, { useCssModules: false });

const WinnersListItem = props => {
    const { round, raceName, driverName, constructorName, highLighted, nationality, points } = props;
	return (
		<div className={`${highLighted  ? 'winners-list-item highLighted' : 'winners-list-item'}`}>
			<div className="flag">
				<span>{round} </span> 
				<FlagIconComp code={getCountryCodeByNationality(nationality)} />
			</div>
			<span>{raceName}</span>
			<span>{driverName}</span>
			<span>{constructorName}</span>
			<span>{points}</span>
		</div>
	);
}

export default WinnersListItem;