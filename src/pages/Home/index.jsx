import { useState } from 'react';
import './styles.css';
import '../../styles/font.css';
//Import Images
import logoImage from "../../assets/Image/pokeraffle_logo_official.png";
import pokeballImage from "../../assets/Image/pokeball_icon.png";
import buttonImage from "../../assets/Image/button_image.png";

export function Home() {
  const [count, setCount] = useState(0)
  const [pokemon, setPokemon] = useState({ name:"", picture: "", number: "", type:""})
  const [type2, setType2] = useState({ type2:""})
  const [showType2, setShowType2]=useState(true);
  const [hideSplash, setHideSplash]=useState(true);

  function colorTypeChange(){
    //TYPE 1
    if(pokemon.type === "normal"){
      document.querySelector(".type_1_box").classList = "type_1_box normal";
    }
    else if(pokemon.type === "fighting"){
      document.querySelector(".type_1_box").classList = "type_1_box fighting";
    }
    else if(pokemon.type === "flying"){
      document.querySelector(".type_1_box").classList = "type_1_box flying";
    }
    else if(pokemon.type === "poison"){
      document.querySelector(".type_1_box").classList = "type_1_box poison";
    }
    else if(pokemon.type === "ground"){
      document.querySelector(".type_1_box").classList = "type_1_box ground";
    }
    else if(pokemon.type === "rock"){
      document.querySelector(".type_1_box").classList = "type_1_box rock";
    }
    else if(pokemon.type === "bug"){
      document.querySelector(".type_1_box").classList = "type_1_box bug";
    }
    else if(pokemon.type === "ghost"){
      document.querySelector(".type_1_box").classList = "type_1_box ghost";
    }
    else if(pokemon.type === "steel"){
      document.querySelector(".type_1_box").classList = "type_1_box steel";
    }
    else if(pokemon.type === "fire"){
      document.querySelector(".type_1_box").classList = "type_1_box fire";
    }
    else if(pokemon.type === "water"){
      document.querySelector(".type_1_box").classList = "type_1_box water";
    }
    else if(pokemon.type === "grass"){
      document.querySelector(".type_1_box").classList = "type_1_box grass";
    }
    else if(pokemon.type === "electric"){
      document.querySelector(".type_1_box").classList = "type_1_box electric";
    }
    else if(pokemon.type === "psychic"){
      document.querySelector(".type_1_box").classList = "type_1_box psychic";
    }
    else if(pokemon.type === "ice"){
      document.querySelector(".type_1_box").classList = "type_1_box ice";
    }
    else if(pokemon.type === "dragon"){
      document.querySelector(".type_1_box").classList = "type_1_box dragon";
    }
    else if(pokemon.type === "dark"){
      document.querySelector(".type_1_box").classList = "type_1_box dark";
    }
    else if(pokemon.type === "fairy"){
      document.querySelector(".type_1_box").classList = "type_1_box fairy";
    }
    //TYPE 2
    if(type2.type2 === "normal"){
      document.querySelector(".type_2_box").classList = "type_2_box normal";
    }
    else if(type2.type2 === "fighting"){
      document.querySelector(".type_2_box").classList = "type_2_box fighting";
    }
    else if(type2.type2 === "flying"){
      document.querySelector(".type_2_box").classList = "type_2_box flying";
    }
    else if(type2.type2 === "poison"){
      document.querySelector(".type_2_box").classList = "type_2_box poison";
    }
    else if(type2.type2 === "ground"){
      document.querySelector(".type_2_box").classList = "type_2_box ground";
    }
    else if(type2.type2 === "rock"){
      document.querySelector(".type_2_box").classList = "type_2_box rock";
    }
    else if(type2.type2 === "bug"){
      document.querySelector(".type_2_box").classList = "type_2_box bug";
    }
    else if(type2.type2 === "ghost"){
      document.querySelector(".type_2_box").classList = "type_2_box ghost";
    }
    else if(type2.type2 === "steel"){
      document.querySelector(".type_2_box").classList = "type_2_box steel";
    }
    else if(type2.type2 === "fire"){
      document.querySelector(".type_2_box").classList = "type_2_box fire";
    }
    else if(type2.type2 === "water"){
      document.querySelector(".type_2_box").classList = "type_2_box water";
    }
    else if(type2.type2 === "grass"){
      document.querySelector(".type_2_box").classList = "type_2_box grass";
    }
    else if(type2.type2 === "electric"){
      document.querySelector(".type_2_box").classList = "type_2_box electric";
    }
    else if(type2.type2 === "psychic"){
      document.querySelector(".type_2_box").classList = "type_2_box psychic";
    }
    else if(type2.type2 === "ice"){
      document.querySelector(".type_2_box").classList = "type_2_box ice";
    }
    else if(type2.type2 === "dragon"){
      document.querySelector(".type_2_box").classList = "type_2_box dragon";
    }
    else if(type2.type2 === "dark"){
      document.querySelector(".type_2_box").classList = "type_2_box dark";
    }
    else if(type2.type2 === "fairy"){
      document.querySelector(".type_2_box").classList = "type_2_box fairy";
    }
  }

  function splashScreenTest(){
      if(hideSplash == true){
        setHideSplash(false);
      }
      else{
      }
  }

  function raffleNumber(){
    splashScreenTest();
    let raffledNumber = Math.floor(Math.random() * 1010) + 1;
    setShowType2(true);

      fetch(`https://pokeapi.co/api/v2/pokemon/${raffledNumber}/`)
      .then(response => response.json())
      .then(data => {
        
        setPokemon({
          name: data.name,
          picture: data.sprites.front_default,
          number: data.id,
          type: data.types[0].type.name
        })

      if(data.types[1]){
        setType2({
          type2: data.types[1].type.name
        })
      }
      else{
        setType2({
          type2: " "
        })
        setShowType2(false);
      }

      })
  }

  colorTypeChange();

  
  return (
    <>
      <main className='full_content'>
        <div className="title_box">
          <h1>
            <img src={logoImage} alt="PokeRaffle Logo" />
          </h1>
        </div>
        <div className="app_raffle">
          <div className="appDisplay">
            <div className="widget_box">
              <div className="screen_box">
              {
                hideSplash?<div className="splash_screen">
                  <img src={pokeballImage} alt="desenho de uma pokebola" />
                  <label className="splash_text">clique no botao para sortear um pokémon!!!</label>
                </div>:null
              }
                <div className="pokemon_image_box">
                  <img src={pokemon.picture} alt=""/>
                </div>
                <div className="pokemon_info_box">
                  <section className='pokemon_name_section sections'>
                    <label className='label'>Pokemon:</label>
                    <div className="pokemon_name_box">{pokemon.name}</div>
                  </section>
                  <section className='pokemon_number_section sections'> 
                    <label className='label'>Number:</label>
                    <div className="pokemon_number_box">{pokemon.number}</div>
                  </section>
                  <section className="pokemon_type_section sections">
                      <div className='type_container'>
                        <label className='label_type'>Type 1:</label>
                        <div className="type_1_box">{pokemon.type}</div>
                      </div>
                      <div className='type_container'>
                        <label className='label_type'>Type 2:</label>
                        {
                          showType2?<div className="type_2_box">{type2.type2}</div>:null
                        }
                      </div>
                  </section>
                </div>
              </div>
              <div className="button_box">
                <div type="button" className="button" onClick={raffleNumber}>
                  <img src={buttonImage} alt="botão cinza com desenho de uma pokebola" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
