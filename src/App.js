import "./App.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useInterval from "@use-it/interval";
import { useState } from "react";

function App() {
  const {
    transcript,
    resetTranscript,
    // interimTranscript,
    // finalTranscript,
    listening,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const [index, setIndex] = useState(0);
  const [word, setWord] = useState("");
  const [intv, setIntv] = useState(undefined);

  useInterval(() => {
    setWord(transcript.slice(index, transcript.length));
    setIndex(transcript.length + 1);
  }, intv);

  return (
    <div className="App">
      <button
        onClick={() => {
          SpeechRecognition.startListening({
            language: "id",
            continuous: true,
          });
          setIntv(5000);
        }}
      >
        Mulai Berbicara
      </button>
      <button onClick={() => SpeechRecognition.stopListening()}>
        Stop Berbicara
      </button>
      <button onClick={() => resetTranscript()}>Reset</button>
      <p>{word.split(" ").length}</p>

      <br />
      <br />
      <br />
      <br />
      <p>{transcript}</p>
      {/* <p>interimTranscript : {interimTranscript}</p>
      <p>finalTranscript : {finalTranscript}</p>*/}
      <p>listening : {`${listening}`}</p>
      <p>
        browserSupportsSpeechRecognition :{" "}
        {`${browserSupportsSpeechRecognition}`}
      </p>
    </div>
  );
}

export default App;
