import axios from 'axios';
import countries from 'world-countries';
import { START_YEAR, FINISH_YEAR, BEGINNING_YEAR, API_BASE_URL } from './constants';

export const getCountryCodeByNationality = (nationality) => {
  const country = countries.find(c => c.demonym === nationality);
  return country ? country.cca2.toLowerCase() : '';
};

export const getDriverStandingsForAllRacesInPeriod = (startYear, endYear) => {
	const offset = startYear - BEGINNING_YEAR;
	const limit = (endYear - startYear) + 1;
	return axios.get(`${API_BASE_URL}/driverStandings/1.json?limit=${limit}&offset=${offset}`);
}

export const  getDriverStandingsForAssignment = () => {
	return getDriverStandingsForAllRacesInPeriod(START_YEAR, FINISH_YEAR);
}

export const getAllRacesForYear = season => {
	return axios.get(`${API_BASE_URL}/${season}/results/1.json`);
}
