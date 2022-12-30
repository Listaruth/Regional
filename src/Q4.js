import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Q3 from './Q3';

const Q4 = () => {
  // Récupération des données sur les pays depuis le store Redux
  const countries = useSelector(state => state.countries);

  // État local pour stocker l'année sélectionnée
  const [selectedYear, setSelectedYear] = useState(null);

  // Fonction qui filtre les pays en fonction de l'année sélectionnée
  const filterCountries = (year) => {
    return countries.filter(country => country.indepYear === year);
  };

  // Affichage des années d'indépendance sous forme de liens hypertestes
  return (
    <div>
      <h2>Années d'indépendance</h2>
      {countries.map(country => (
        <button key={country.indepYear} onClick={() => setSelectedYear(country.indepYear)}>
          {country.indepYear}
        </button>
      ))}

      {/* Affichage des pays qui ont obtenu l'indépendance dans l'année sélectionnée */}
      {selectedYear !== null && <Q3 countries={filterCountries(selectedYear)} />}
    </div>
  );
};

export default Q4;