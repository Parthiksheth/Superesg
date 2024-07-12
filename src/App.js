import '../src/scss/main.scss'
import './App.css';
import Home from './module/home';
import Footer from './shared/components/footer';
import Header from './shared/components/header';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
