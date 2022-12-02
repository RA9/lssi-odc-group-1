// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import SchoolsInfo from './components/SchoolInfo';

function App() {
  return (
    <>
     <Navbar />
    
     
     <div class="py-6">
          <div class="py-20 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <SchoolsInfo />
          </div>
      </div>
    </>
  );
}

export default App;
