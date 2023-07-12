import { useEffect} from 'react'
import './styles.css'


export function Home() {
  const [count, setCount] = useState(0)
  const [pokemon, setPokemon] = useState({ name:"", picture: "", number: "", type1: "", type2: ""})

  function raffleNumber(){
    let raffledNumber = Math.floor(Math.random() * 1010) + 1;
    console.log(raffledNumber);
    
      fetch(`https://pokeapi.co/api/v2/pokemon/${raffledNumber}/`)
      .then(response => response.json())
      .then(data => {
        setPokemon({
          name: data.name,
          picture: data.sprites.front_default,
          number: data.id
        })
        console.log(data.types.length);
        console.log(pokemon.name);
        console.log(pokemon.picture);
        console.log(pokemon.number);
      })
  }


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
                  <div className="pokemon_name_box">{pokemon.name}</div>
                  <div className="pokemon_number_box">{pokemon.number}</div>
                  <div className="pokemon_type_box">
                      <div className="type_1_box">{pokemon.type1}</div>
                      <div className="type_2_box">{pokemon.type2}</div>
                  </div>
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
