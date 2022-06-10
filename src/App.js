import { Routes, Route, Navigate } from 'react-router-dom';
import Overview from './pages/Overview';
import Portfolio from './pages/Portfolio';
import Navbar from './components/navbar/navbar';
import './App.css';

function App() {
    return (
      <div className={'main-section'}>
          <Navbar />
          <div className={'content'}>
              <Routes>
                  <Route path={'/'} element={<Overview/>} />
                  <Route path={'/portfolio'} element={<Portfolio/>} />
                  <Route path={'*'} element={<Navigate to={'/'}/>} />
              </Routes>
          </div>
      </div>
    );
}

export default App;
