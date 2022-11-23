import "../styles/App.scss";
import { useState } from "react";

function App() {
  const [numberOfErrors, setNumberOfErrors] = useState(0); 
  
  const handleButton = (ev) => {
    ev.preventDefault();
    const increment = numberOfErrors +1;
    setNumberOfErrors(increment); 
    //lo que queremos es que cuando se clicke, numberOfErrors, añada un número más. Para ello tenemos que pasarle este numberOfErrors como parámetro a su función  setNumberOfErrors.
    console.log(numberOfErrors);
  };

  return (
    <div className="page">
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header>
      <button onClick={handleButton}> Incrementar </button>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters"></ul>
          </div>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters"></ul>
          </div>
          <form className="form">
            <label className="title" htmlFor="last-letter">
              Escribe una letra:
            </label>
            <input
              autoFocus
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
            />
          </form>
        </section>
        <section className= {`dummy error- ${numberOfErrors}`} > 
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9  line"></span>
          <span className="error-8  line"></span>
          <span className="error-7  line"></span>
          <span className="error-6  head"></span>
          <span className="error-5  line"></span>
          <span className="error-4  line"></span>
          <span className="error-3  line"></span>
          <span className="error-2  line"></span>
          <span className="error-1  line"></span>
        </section>
      </main>
    </div>
  );
}

export default App;
