import useSwitch from "../CustomHook/UseSwitch";
import useDate from "../CustomHook/UseDate";
import useCustomPointer from "../CustomHook/useCustomPointer";
import useKeyPressed from "../CustomHook/useKeyPressed";

const App = () => {
  const { isOn, toggle } = useSwitch();
  const { dateTime, stopTimer, setStopTimer } = useDate();
  const customPointer = useCustomPointer("🔥");
  const { text, isPressed } = useKeyPressed();

  return (
    <div
      className={`min-vh-100 d-flex flex-column justify-content-center align-items-center text-center`}
      style={{
        backgroundColor: isOn ? "#fce96a" : "#1c1c1c",
        color: isOn ? "#000" : "#fff",
      }}
    >
      <h1 className="mb-4">
        L'interruttore è {isOn ? "ON 💡" : "OFF 💤"}
      </h1>

      <button
        className={`btn btn-${isOn ? "dark" : "warning"} mb-4`}
        onClick={toggle}
      >
        {isOn ? "Spegni" : "Accendi"}
      </button>

      <div className="mb-4">
        <h2>Ora attuale:</h2>
        <h3>{dateTime.toLocaleString()}</h3>
        <button
          className={`btn btn-${stopTimer ? "primary" : "success"} mb-4`}
          onClick={() => setStopTimer(!stopTimer)}
        >
          {stopTimer ? "Avvia" : "Ferma"}
        </button>
      </div>

      <div className="mb-4">
        <span className="fs-1">{customPointer}</span>
      </div>

      <div>
        <h2>Premi un tasto qualsiasi: {isPressed ? text : ""}</h2>
      </div>
    </div>
  );
};

export default App;



/*
🏆 Snack 1: useSwitch() – Toggle Booleano
Creare un custom hook per alternare un valore booleano tra true e false.


🏆 Snack 2: useDate() – Ottenere la Data Attuale
Creare un custom hook che restituisca la data e l'ora correnti, 
aggiornandosi automaticamente ogni secondo.


🏆 Snack 3: useCustomPointer() – Cambia il Cursore del Mouse
Creare un custom hook che sostituisca il cursore del mouse con 
un componente personalizzato.

🎯 Bonus: useKeyPress() – Rilevare un Tasto Premuto
Creare un custom hook che rilevi se un tasto specifico della tastiera è premuto.

Cosa deve fare?

Prende in input il nome di un tasto ("Enter", "Escape", ecc.).
Ritorna true quando il tasto è premuto e false quando viene rilasciato.
Usa event listener su keydown e keyup.
Esempio di utilizzo:

*/