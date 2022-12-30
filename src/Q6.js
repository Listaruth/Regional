import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Q6 = () => {
  // Récupération des données sur les pays depuis le store Redux
  const countries = useSelector(state => state.countries);

  // Récupération du dispatch pour pouvoir envoyer des actions
  const dispatch = useDispatch();

  // État local pour stocker le mode de filtrage sélectionné
  const [filterMode, setFilterMode] = useState('none');

  // État local pour stocker la valeur du filtre
  const [filterValue, setFilterValue] = useState('');

  // Fonction pour changer le mode de filtrage
  const handleFilterModeChange = (event) => {
    setFilterMode(event.target.value);
  };

  // Fonction pour changer la valeur du filtre
  const handleFilterValueChange = (event) => {
    setFilterValue(event.target.value);
  };

  // Fonction pour soumettre le formulaire de filtrage
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: 'FILTER_COUNTRIES',
      filterMode,
      filterValue
    });
  };

  // Récupération de tous les continents
  const continents = countries
    .map(country => country.continent)
    .filter((continent, index, self) => self.indexOf(continent) === index);

  // Affichage du formulaire de filtrage
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Mode de filtrage :
        <select value={filterMode} onChange={handleFilterModeChange}>
          <option value="none">Aucun</option>
          <option value="continent">Continent</option>
          <option value="population">Population</option>
        </select>
      </label>
    </form>
  );
}

export default Q6;
