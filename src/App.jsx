import React, { useState, useEffect, createContext, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "./App.css";

const ScoreContext = createContext();

function App() {
  const [score, setScore] = useState(0);

  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      <Router>
        <div className="container">
          <h1 className="title">Brain Boost</h1>
          <p className="score">Score: {score}</p>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reaction" element={<ReactionGame />} />
            <Route path="/riddle" element={<RiddleGame />} />
            <Route path="/memory" element={<MemoryGame />} />
            <Route path="/result" element={<ResultPage />} />
          </Routes>
        </div>
      </Router>
    </ScoreContext.Provider>
  );
}

function Home() {
    return (
      <div className="home">
        <GameCard title="Game for reaction" link="/reaction"></GameCard>
        <GameCard title="Solve the mystery" link="/riddle"></GameCard>
        <GameCard title="Save to memory" link="/memory"></GameCard>
      </div>
    )
}
function GameCard({ title, link }) {
    return(
        <Link to={link} className="card">
            <h2> {title} </h2>
        </Link>
    )
}

function ReactionGame() {
  const { setScore } = useContext(ScoreContext)
  const [state, setState] = useState("intro")
  const [message, setMessage] = useState("Ойын ережесы: Wait деген кезде баспа тек Now шыкканда бас ")
  const [startTime, setStartTime] = useState(null)
  const [reactionTime, setReactionTime] = useState(null)
  const [timeoutId, setTimeoutId] = useState(null)
  const navigate = useNavigate()

  const start = () => {
    setState("waiting");
    setMessage("waittt...");
    const id = setTimeout(() => {
      setState("ready");
      setMessage("Now! Clickkkk!");
      setStartTime(Date.now());
    }, Math.random() * 2000 + 2000);
    setTimeoutId(id);
  };

  const handleClick = () => {
    if (state === "intro") start();
    else if (state === "waiting") {
      clearTimeout(timeoutId);
      setMessage("early click, wait for 'now'");
      setState("intro");
    } else if (state === "ready") {
      const time = Date.now() - startTime;
      setReactionTime(time);
      setMessage(`time answer: ${time} ms`);
      setState("done");
      setScore((prev) => prev + Math.max(0, 500 - time));
    } else {
      navigate("/result", { state: { from: "reaction" } });
    }
  }

  return (
    <div className={`game reaction ${state}`} onClick={handleClick}>
      <p>{message}</p>
      {state === "done" && (
        <button onClick={() => navigate("/result", { state: { from: "reaction" } })}> finish game </button>
      )}
    </div>
  )
}


function RiddleGame() {
  const { setScore } = useContext(ScoreContext);
  const riddles = [
    {
      q: "Қалтада жүрсем, бар әлем менікі, Сөйлесем, көрсем — бәрі де тікелей. Ақылды болсам, саусағың жетеді Бұл не?",
      a: "телефон",
    },
    {
      q: "Қара түсті қорапша, Бәрін көреді оңаша. Көзге көрінбей тыңдайды, Үйдің сырын жинайд. Бұл не?",
      a: "камера",
    },
    { q: "Всегда өсіп тұрады, бірақ орнынан қозғалмайды. Бұл не?", a: "шаш" },
    { q: "Суға салсаң батпайды, отқа салсаң жанбайды. Бұл не?", a: "мұз" },
    { q: "Күні бойы жүріп тұрады, бірақ бір орында. Бұл не?", a: "сағат" },
    { q: "Көзге көрінбейді, қолға ұсталмайды, бірақ бар. Бұл не?", a: "ауа" },
    {
      q: "Кішкентай ғана бөлме, ішіне адамдар толып отырады. Бұл не?",
      a: "автобус",
    },
    { q: "Басы бар, аяғы жоқ, өзенге ұқсас. Бұл не?", a: "жол" },
    { q: "Үстінде қақпағы бар, ішінде ас сақталады. Бұл не?", a: "ыдыс" },
    { q: "Аяғы жоқ, қолы жоқ, бірақ жүреді. Бұл не?", a: "сағат" },
  ];

  const [index, setIndex] = useState(-1);
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const startGame = () => setIndex(0);


  const checkAnswer = () => {
    if (!input.trim()) {
      setMessage("Write the answer");
      return;
    }
    if (input.toLowerCase().trim() === riddles[index].a) {
      setMessage("Correct!");
      setScore((s) => s + 100);
    } else {
      setMessage("UnCorrect. Correct answer: " + riddles[index].a);
    }
    setInput("");
    setTimeout(() => {
      if (index + 1 >= riddles.length) {
        navigate("/result", { state: { from: "riddle" } });
      } else {
        setIndex((i) => i + 1);
        setMessage("");
      }
    }, 1000);
  };

  if (index === -1) {
    return (
      <div className="game">
        <p>Solve the 10 riddle! 1riddle = 100point!</p>
        <button onClick={startGame}>Start</button>
      </div>
    );
  }

  return (
    <div className="game">
      <p>
        Quesiton {index + 1} / {riddles.length}
      </p>
      <p>{riddles[index].q}</p>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={checkAnswer}>Take a answer</button>
      <p>{message}</p>
    </div>
  );
}




function MemoryGame() {
  const { setScore } = useContext(ScoreContext);
  const [sequence, setSequence] = useState([]);
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const [started, setStarted] = useState(false);
  const navigate = useNavigate();

  const start = () => {
    const nums = Array.from({ length: 5 }, () =>
      Math.floor(Math.random() * 90 + 10)
    );
    setSequence(nums);
    setShow(true);
    setTimeout(() => setShow(false), 3000);
    setStarted(true);
  };

  const check = () => {
    if (!input.trim()) {
      setMessage("white answer");
      return;
    }
    if (input.trim() === sequence.join(" ")) {
      setMessage("great");
      setScore((s) => s + 150);
    } else {
      setMessage("error  Answer:" + sequence.join(" "))
    }
    setInput("")
  }

  if (!started) {
    return (
      <div className="game">
        <p> Саган ғ сан корсетыледы оны есте сактап калу керек и потом оны жазып тексересын</p>
        <button onClick={start}>start</button>
      </div>
    );
  }

  return (
    <div className="game">
      {show ? (
        <p className="mem-show">{sequence.join(" ")}</p>
      ) : (
        <>
          <input value={input} onChange={(e) => setInput(e.target.value)} />
          <button onClick={check}>Check</button>
        </>
      )}
      <p>{message}</p>
      <button onClick={() => navigate("/result", { state: { from: "memory" } })} > finish Game </button>
    </div>
  )
}

function ResultPage() {
  const location = useLocation();
  const { score } = useContext(ScoreContext);
  const from = location.state?.from || "";
  let title = "finish the game"

  if (from === "reaction") title = "game for reaction finished"
  else if (from === "riddle") title = "mystery game finished"
  else if (from === "memory") title =  "memory game finished"

  return (
    <div className="game">
      <h2>{title}</h2>
      <p> ALl score: {score}</p>
      <Link to="/" className="button"> back the home </Link>
    </div>
  );
}

export default App
