import './App.css';

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import About from './components/About'
import Footer from './components/Footer'
import PreLoader from './components/PreLoader/PreLoader';

function App() {
  return (
    <div className="App">
      <PreLoader />
      {/* Navbar */}
      <Navbar />
      {/* Sidebar */}
      <Sidebar />
      {/* About Section */}
      <About />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
