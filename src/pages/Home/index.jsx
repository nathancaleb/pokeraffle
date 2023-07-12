import { useState } from 'react'
import './styles.css'

export function Home() {
  const [count, setCount] = useState(0)

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
                <div className="pokemon_image_box"></div>
                <div className="pokemon_info_box">
                  <div className="pokemon_name_box"></div>
                  <div className="pokemon_number_box"></div>
                  <div className="pokemon_type_box">
                      <div className="type_1_box"></div>
                      <div className="type_2_box"></div>
                  </div>
                </div>
              </div>
              <div className="button_box">
                <div className="button">
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
