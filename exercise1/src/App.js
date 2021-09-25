
import './App.css';
import Header from './components/Header';
import HeaderTopics from './components/HeaderTopics';
import Notifications from './components/Notifications';
import MainSection from './components/MainSection';
import PopularNews from './components/PopularNews';
import img1 from './images/image1.png'
import img2 from './images/image2.png'


const header = {textAlign: 'left', fontFamily: 'Roboto', marginLeft: "15px", marginTop: "15px"}

function App() {
  return (
    <div className = "App">
      <Header />
      <HeaderTopics />
      <Notifications topic = "KULTTUURI: " body = "Maineensa ryvettänyt näyttelijä Johnny Depp moitti cancel-kulttuuria"/>
      <Notifications topic = "MAAILMAN MULLISTUS: " body = "Kissat ovat oppineet ratkomaan maailman kaikkeuden ihmeitä"/>
      <Notifications topic = "TIEDE: " body = "Näin käy kun poistat kärpäsen lentonavigaattorin"/>
      <div className = "Contents">
      <div>
      <MainSection topic = "Petokset" body = "Poliisi: Omakanta palvelulta näyttävät valesivustot
            kalastelevat pankkitunnuksia - näin suojaudut huijaukselta" img = {img1}/>
      <MainSection topic = "Luonnonkatastrofit" body = "Tulivuorenpurkaus kiihtyi Kanarian La Palmalla, sammuttajat joutuivat perääntymään"
      img = {img2}/>
      </div>
      <div className = "mostRead">
      <h2 style = {header}>Luetuimmat</h2>
            <h3 style = {{}}>___________________________________</h3>
      <PopularNews topic = "Kirjeenvaihtajan kommentti" body = "Britanniassa jonotetaan nyt bensiiniä, eikä se ole yllätys -
                Brexitin myötä pulasta on tullut osa arkea"/>
      <PopularNews topic = "Kuolleet" body = "Toimittaja Aarno Laitinen on kuollut"/>
      <PopularNews topic = "Historia" body = "Ensimmäiset luolamaalaukset saattoivat olla neandertalilaisten tekemiä"/>
      <PopularNews topic = "Kuluttaja" body = "Markkinoille ilmeistyivät kaiken kestävät sukkahousut - näin HS:n testeissä kävi"/>
      <PopularNews topic = "Yhteiskunta" body = "Uutisten numerointi suosituimpien mukaan on katsottu epäsopivaksi, tästä edes
      kaikki uutiset ovat samanarvoisia"/>
      <PopularNews topic = "Juhla" body = "Kauhukuukausi on melkein täällä - katso hurjan hirmuiset Halloween koristeluvinkit"/>
      </div>
      </div>
    </div>
  );
}

export default App;
