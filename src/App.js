import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'

const contactsArray = contacts.slice(0, 5);


function App() {
  return (
    <div className="App">
      <h2><u>It works like gold.</u></h2>
      {contactsArray.map(elem => {
        return (
          <div>
            <table>
              <ul>
                <li><img src={elem.pictureUrl} alt={elem.name}></img></li>
                <li>{elem.name}</li>
                <li>{elem.popularity}</li>
              
                {elem.wonEmmy ? <p>🏆</p> : <p>Not yet</p>}
              </ul>


            </table>
          </div>

        )
      })}





    </div>
  );
}

export default App;
