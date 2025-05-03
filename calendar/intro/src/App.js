import './App.css';

import Calendar from './Calendar';

function App() {
  const now = new Date(2012, 2, 8);

    return (
      <Calendar date={
    now} />
    );
}

export default App;
