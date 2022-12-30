import React from 'react';
import { useSelector } from 'react-redux';

const Q3 = () => {
  // Récupération des données sur les pays depuis le store Redux
  const countries = useSelector(state => state.countries);

  // Affichage des cartes pour chaque pays
  return (
    <div>
      {countries.map(country => (
        <div key={country.code} className="card">
          <img src={country.image} alt={country.name} />
          <h2>{country.name}</h2>
          <p>Superficie : {country.surfaceArea} km²</p>
          <p>Population : {country.population} habitants</p>
        </div>
      ))}
    </div>
  );
};

export default Q3;