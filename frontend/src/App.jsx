import { useState, useEffect } from 'react';
import SayidProfilKomponent from './komponenter/SayidProfil';
import './komponenter/SayidProfile.css';
import Profile2 from './komponenter/profile2';
import Profile3 from './komponenter/profile3';
import './komponenter/profile2.css';
import './komponenter/profile3.css';
import client from './helpers/sanityClient';
import './App.css';


function App() {

  const [arbeidskrav, setArbeidskrav] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    const data = await client.fetch('*[_type == "Arbeidskrav"]')
    setArbeidskrav(data)
  }
  fetchData()
}, [])

  return (
  <main>
    <header className='header'>
      <h1>Utvikling av interaktive nettsteder</h1>
    </header>
    <section className="profiles-section">
      <SayidProfilKomponent />
      <Profile2 />
      <Profile3 />
    </section>
    <section className="arbeidskrav-section">
      <h2>Arbeidskrav</h2>
      {
        arbeidskrav.map((krav) => (
          <article key={krav._id} className='arbeidskrav-article'>
            <h3>{krav.tittel}</h3>
            <p>{krav.beskrivelse}</p>
          </article>
        ))}
    </section>
  </main>
  );
}

export default App;
