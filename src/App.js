import "./App.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function App() {
  const { transcript, resetTranscript } = useSpeechRecognition();

  return (
    <div className="App">
      <button
        onClick={() =>
          SpeechRecognition.startListening({ language: "id", continuous: true })
        }
      >
        Mulai Berbicara
      </button>
      <button
        onClick={() =>
          SpeechRecognition.stopListening()
        }
      >
        Stop Berbicara
      </button>
      <button
        onClick={() => resetTranscript()}
      >
        Reset
      </button>
      <p>{transcript}</p>
    </div>
  );
}

export default App;
