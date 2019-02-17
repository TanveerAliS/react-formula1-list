import React, { Component } from 'react';
import ChampionsListItem from '../components/ChampionsListItem';
import { getDriverStandingsForAssignment, getAllRacesForYear } from './../APICalls';

export default class WorldChampions extends Component {
	constructor() {
		super();
		this.state = {
			champions: [],					
			championsRaces: [],				
			selectedSeason: '',				
			selectedChampionId: '',	
		};
	}

	componentDidMount() {
		getDriverStandingsForAssignment().then(
			(res) => {
				if (res.data) {
					this.setState({
						champions: res.data.MRData.StandingsTable.StandingsLists,
					});
				}
			},
			(err) => {
				//	console.log(err);
			},
		);
	}

	handleSeasonClicked = e => {
        const season= e.target.id
        const championId = e.target.dataset.championid
		getAllRacesForYear(season).then(
			(res) => {
				if (res.data) {
					this.setState({
						championsRaces: res.data.MRData.RaceTable.Races,
						selectedSeason: season,
						selectedChampionId: championId,
					});
				}
			},
			(err) => {
				//	console.log(err);
			},
		);
	}

	render() {
		const championsList = this.state.champions.map((seasonData) => {
			return (
				<ChampionsListItem
                    key={seasonData.season}
                    id={seasonData.season}
                    season={seasonData.season}
                    races={this.state.championsRaces}
                    nationality={seasonData.DriverStandings[0].Driver.nationality}
					driverName={`${seasonData.DriverStandings[0].Driver.givenName} ${seasonData.DriverStandings[0].Driver.familyName}`}
					championId={seasonData.DriverStandings[0].Driver.driverId}
					constructorName={`${seasonData.DriverStandings[0].Constructors[0].name}`}
					seasonClicked={this.handleSeasonClicked}
				/>
			);
		});
		return (
			<div className="acc-wrap">
				{this.state.champions.length > 0 ? championsList : <div className="loading"><span></span></div> }
			</div>
		);
	}
}
