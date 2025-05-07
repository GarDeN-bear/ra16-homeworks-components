import "./App.css";

import Calendar from "./Calendar";

function App() {
  const now = new Date(2018, 1, 4);

  return <Calendar date={now} />;
}

export default App;
