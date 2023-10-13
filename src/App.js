import './App.css';
import CallToAction from './components/call-to-action/CallToAction';
import NavBar from './components/nav-bar/NavBar';

function App() {
  return (
    <div className="App">
      <img src='https://upload.wikimedia.org/wikipedia/commons/2/21/Adams_The_Tetons_and_the_Snake_River.jpg' alt='' />
      <NavBar/>
      <div className='banner'>

        <h1>"Any darn fool can make something complex; it takes a genius to make something simple"</h1>
        <CallToAction >Learn more</CallToAction>

      </div>
    </div>
  );
}

export default App;
