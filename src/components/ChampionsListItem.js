import React, { Fragment }  from 'react';
import WinnersListItem from './WinnersListItem';
import FlagIconFactory from 'react-flag-icon-css';
import { getCountryCodeByNationality } from '../../src/APICalls';
const FlagIconComp = FlagIconFactory(React, { useCssModules: false });

const ChampionsListItem = props => {
    const { id, driverName, constructorName, nationality, championId, seasonClicked } = props;
    const championRaces = (
		props.races.length > 0)
		?
		props.races.map((race) => {
			return (
				<WinnersListItem
					key={race.round}
					round={race.round}
                    raceName={race.raceName}
                    points={race.Results[0].points}
                    nationality={race.Results[0].Driver.nationality}
					driverName={`${race.Results[0].Driver.givenName} ${race.Results[0].Driver.familyName}`}
					constructorName={race.Results[0].Constructor.name}
					highLighted={(championId === race.Results[0].Driver.driverId)}
				/>
			);
		})
		: <div className="loading"><span></span></div>;
    return (
        <Fragment>
            <input type="radio" name="accordion" id={id} data-championid={championId} onChange={seasonClicked}/>
            <div className="acc-box" data-championid={championId} data-season={id} >
                <label className="acc-trigger" htmlFor={id}>
                    <div className="flag-season">
                    <FlagIconComp code={getCountryCodeByNationality(nationality)} />
                    <p>{id}</p>
                    </div>
                    <div>
                        <p className="name">{driverName}</p>
                        <p className="constructorName">{constructorName}</p>
                    </div>
                    <i></i>
                </label>
                <label className="acc-trigger close" htmlFor="acc-close"></label>
                <div className="acc-con">
                    <div className="pop-in tac">
                        {championRaces}
                    <input type="radio" name="accordion" id="acc-close" />
                    </div>
                </div>
            </div> 
        </Fragment>
    )
}

export default ChampionsListItem;
