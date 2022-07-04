
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div className='App'>
      <Navbar />
      <Homepage />
    </div>
    <Footer />
    </>
  );
}

export default App;
