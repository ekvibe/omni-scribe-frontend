import React, { useState } from "react";

function App() {
  const [transcript, setTranscript] = useState("");
  console.log(setTranscript); // temporary line to avoid unused var error


  const startTranscription = () => {
    console.log("Start transcription clicked");
    // Later: will call AWS API Gateway for signed URL and start streaming
  };

  const stopTranscription = () => {
    console.log("Stop transcription clicked");
    // Later: will stop audio and websocket connection
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(transcript);
    alert("Transcript copied!");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h1>Omni_Scribe – Live Medical Dictation</h1>
      <div style={{ marginBottom: "10px" }}>
        <button onClick={startTranscription}>Start</button>{" "}
        <button onClick={stopTranscription}>Stop</button>{" "}
        <button onClick={copyToClipboard}>Copy</button>
      </div>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          height: "300px",
          overflowY: "scroll",
          whiteSpace: "pre-wrap"
        }}
      >
        {transcript || "Transcript will appear here..."}
      </div>
    </div>
  );
}

export default App;
