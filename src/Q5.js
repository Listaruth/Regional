import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Q5 = () => {
  // Récupération du dispatch pour pouvoir envoyer des actions
  const dispatch = useDispatch();

  // États locaux pour stocker les données du formulaire
  const [cityName, setCityName] = useState('');
  const [district, setDistrict] = useState('');
  const [population, setPopulation] = useState(0);
  const [isCapital, setIsCapital] = useState(false);

  // Fonction de soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: 'ADD_CITY',
      city: {
        name: cityName,
        district,
        population,
        capital: isCapital
      }
    });
  };

  // Affichage du formulaire
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom de la ville :
        <input type="text" value={cityName} onChange={event => setCityName(event.target.value)} />
      </label>
      <br />
      <label>
        Province/région :
        <input type="text" value={district} onChange={event => setDistrict(event.target.value)} />
      </label>
      <br />
      <label>
        Population :
        <input type="number" value={population} onChange={event => setPopulation(event.target.value)} />
      </label>
      <br />
      <label>
        Capitale :
        <input type="checkbox" checked={isCapital} onChange={event => setIsCapital(event.target.checked)} />
      </label>
      <br />
      <button type="submit">Ajouter/modifier</button>
    </form>
  );
};

export default Q5;