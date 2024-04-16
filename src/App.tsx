import React, { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  const [alertVisible, setAlert] = useState(false);

  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlert(false)}>My Alert</Alert>}
      <Button color="primary" onClick={() => setAlert(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
