import { useState } from 'react'
import './styles.css'
import '../../styles/font.css'

export function Home() {
  const [count, setCount] = useState(0)
  const [pokemon, setPokemon] = useState({ name:"", picture: "", number: "", type:""})
  const [type2, setType2] = useState({ type2:""})

  function colorTypeChange(){
    if(pokemon.type === "normal"){
      document.querySelector(".type_1_box").classList.add("normal");;
    }
    else{
      console.log("não faz nada");
    }
  }

  function raffleNumber(){
    let raffledNumber = Math.floor(Math.random() * 1010) + 1;
    console.log(raffledNumber);
    
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
      }

      console.log(pokemon.name);
      console.log(pokemon.picture);
      console.log(pokemon.number);
      console.log(pokemon.type);
      console.log(type2.type2);

      })
  }

  colorTypeChange();

  return (
    <>
      <main className='full_content'>
        <div className="title_box">
          <h1>
            <img src="src\assets\Image\pokedraft_logo_official.png" alt="Pokedraft Logo" />
          </h1>
        </div>
        <div className="app_raffle">
          <div className="appDisplay">
            <div className="widget_box">
              <div className="screen_box">
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
                        <div className="type_2_box">{type2.type2}</div>
                      </div>
                  </section>
                </div>
              </div>
              <div className="button_box">
                <div type="button" className="button" onClick={raffleNumber}>
                  <img src="src\assets\Image\button_image.png" alt="botão cinza com desenho de uma pokebola" />
                </div>
              </div>
            </div>
          </div>
          <div className="raffle_button_box">
            <div className="raffle_button"></div>
          </div>
        </div>
      </main>
    </>
  )
}
