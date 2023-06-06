import Greeting from './components/Greeting';

function App() {
  const csrfToken = document.head.querySelector('[name=csrf-token]').content;

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
      return (
      <div style={containerStyles}>
        <h3>Random Greeting</h3>
        <Greeting csrfToken={csrfToken} />
      </div>
      );
    </>
  );
}

export default App;
