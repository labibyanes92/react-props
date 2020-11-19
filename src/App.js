import React from 'react';
import './App.css';
import Profile from './profile/profile';
import Picture from './profile/luca-modric.jpg';

function App() {
  
  
 function handleName = a => {
     a.preventDefault();
    alert("Luca Modric");

 }
  
  return (
    <div className="App">
      <Profile  fullname = "Luca Modric" bio = "né le 9 septembre 1985 à Zadar en Yougoslavie (aujourd'hui en Croatie), est un footballeur international croate. Il évolue au poste de milieu de terrain au Real Madrid CF. Il est, avec Davor Šuker et Bernard Vukas, considéré comme l'un des plus grands joueurs croates de l'histoire Il est aussi le seul joueur croate à avoir gagné le ballon d'or" profession="Joueur du football " >
        <img
        className="imgPro"
        src={Picture}
        alt="luca modric"
        height={"500px"}
        width={"800px"}
        
        
        />
      </Profile>
    </div>
  );
}

export default App;
