
import './App.css';
import Header from './components/Header';
import HeaderTopics from './components/HeaderTopics';
import Notifications from './components/Notifications';
import MainSection from './components/MainSection';

function App() {
  return (
    <div className = "App">
      <Header />
      <HeaderTopics />
      <Notifications topic = "KULTTUURI: " body = "Maineensa ryvettänyt näyttelijä Johnny Depp moitti cancel-kulttuuria"/>
      <Notifications topic = "MAAILMAN MULLISTUS: " body = "Kissat ovat oppineet ratkomaan maailman kaikkeuden ihmeitä"/>
      <Notifications topic = "TIEDE: " body = "Näin käy kun poistat kärpäsen lentonavigaattorin"/>
      <MainSection />
      <MainSection />
     
    </div>
  );
}

export default App;
