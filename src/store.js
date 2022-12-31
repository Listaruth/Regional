import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';

// Définition de l'état initial de l'application
const initialState = {
  countries: [
    {
      code: 'FR',
      name: 'France',
      continent: 'Europe',
      surfaceArea: 671308,
      indepYear: 1789,
      population: 66813000,
      cities: [
        {
          name: 'Paris',
          district: 'Ile-de-France',
          population: 2141000,
          capital: true
        },
        {
          name: 'Marseille',
          district: "Provence-Alpes-Côte d'Azur",
          population: 874800,
          capital: false
        }
      ]
    },
    {
      code: 'DE',
      name: 'Germany',
      continent: 'Europe',
      surfaceArea: 357386,
      indepYear: 1871,
      population: 83517045,
      cities: [
        {
          name: 'Berlin',
          district: 'Berlin',
          population: 3748000,
          capital: true
        },
        {
          name: 'Munich',
          district: 'Bavaria',
          population: 1450000,
          capital: false
        }
      ]
    }
  ]
};

// Définition des types d'actions
const ADD_COUNTRY = 'ADD_COUNTRY';
const UPDATE_POPULATION = 'UPDATE_POPULATION';
const ADD_CITY = 'ADD_CITY';

// Définition des action creators
const addCountry = (country) => ({
  type: ADD_COUNTRY,
  country
});

const updatePopulation = (code, population) => ({
  type: UPDATE_POPULATION,
  code,
  population
});

const addCity = (code, city) => ({
  type: ADD_CITY,
  code,
  city
});

// Définition du reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTRY:
      return {
        ...state,
        countries: [...state.countries, action.country]
      };
    case UPDATE_POPULATION:
      return {
        ...state,
        countries: state.countries.map(country => {
          if (country.code === action.code) {
            return {
              ...country,
              population: action.population
            };
          }
          return country;
        })
      };
    case ADD_CITY:
      return {
        ...state,
        countries: state.countries.map(country => {
          if (country.code === action.code) {
            return {
              ...country,
              cities: [...country.cities, action.city]
            };
          }
          return country;
        })
      };
    default:
      return state;
    }
}

// Reducers
const countriesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_COUNTRIES':
      return action.countries;
    default:
      return state;
  }
};

// Actions creators
const setCountries = (countries) => {
  return {
    type: 'SET_COUNTRIES',
    countries
  };
};

const fetchCountries = () => {
  return (dispatch) => {
    fetch('https://FAKEAPI.com/PAYS')
      .then(response => response.json())
      .then(countries => dispatch(setCountries(countries)));
  };
};

// Création du store
const rootReducer = combineReducers({
  countries: countriesReducer
});

const store = configureStore(rootReducer, applyMiddleware(thunk));

// Remplissage du tableau countries avec les données de l'API
store.dispatch(fetchCountries());

export default store;
