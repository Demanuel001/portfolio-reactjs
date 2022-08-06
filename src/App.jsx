import Sidebar from './components/Sidebar';
import MainContent from "./components/MainContent"
import MeritosContainer from "./components/MeritosContainer"
import FooterContainer from './components/FooterContainer'
import './styles/components/app.sass'

function App() {
  return (
    <div id="portfolio">
      <Sidebar/>
      <MainContent />
      <MeritosContainer />
      <FooterContainer />
    </div>
  );
}

export default App;
