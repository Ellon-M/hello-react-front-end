import Greeting from './components/Greeting';
import { Routes, Route } from 'react-router-dom';

function App() {
  const csrfToken = document.head.querySelector('[name=csrf-token]')?.content;
  console.log(csrfToken);

  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  return (
    <>
      <div style={containerStyles}>
        <h3>Random Greeting</h3>
        <Routes>
          <Route path="/" element={<Greeting csrfToken={csrfToken}/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
