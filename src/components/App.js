import "../styles/App.scss";
import { useState } from "react";

function App() {
  //Variables estados
  const [numberOfErrors, setNumberOfErrors] = useState(0); //estado del contador
  const [lastLetter, setLastLetter] = useState(""); //estado del input
  const [word, setWord] = useState("katakroker"); //almacenar la palabra de la API
  const [userLetters, setUsesLeters] = useState([]); //array para almacenar las letras que introduce la jugadora.

  //función para incrementar el contador
  const handleButton = (ev) => {
    ev.preventDefault();
    const increment = numberOfErrors + 1;
    setNumberOfErrors(increment);
  };

  //función para obtener lo que escribe la usuaria en el input
  const handleInput = (ev) => {
    let lettersAllowed =  /^[a-zA-ZñÑá-úÁ-Ú´]$/; //expresión regular
    if (lettersAllowed.test(ev.target.value) === true) {
      setLastLetter(ev.target.value);
      setUsesLeters([...userLetters,ev.target.value]);
    } //hacemos una condicional: le decimos que si el valor que introduce la usuaria es igual a los caracteres permitidos, entonces me guarde la letra, sino no.
    
  };

  //función para que no se recarge la página al dar al enter.
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  //funcion para pintar
  const renderSolutionLetters = () => {
    const wordLetters = word.split("");
    // setWord([...wordLetters]);
    return wordLetters.map((word, index) => {
      return <li className="letter" key={index}> {word}</li>;
    });
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
            <ul className="letters">{renderSolutionLetters()}</ul>
          </div>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters"></ul>
          </div>
          <form className="form" onSubmit={handleSubmit}>
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
              value={lastLetter}
              onChange={handleInput}
            />
          </form>
        </section>
        <section className={`dummy error-${numberOfErrors}`}>
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
