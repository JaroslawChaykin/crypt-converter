import { Routes, Route, Navigate, NavLink } from 'react-router-dom';
import Overview from './pages/Overview';
import Portfolio from './pages/Portfolio';
import chart from '../src/assets/images/chart-icon.svg'
import portfolio from '../src/assets/images/portfolio-icon.svg'
import './App.css';

function App() {
    return (
      <div className={'main-section'}>
          <nav className={'main-nav'}>
              <NavLink to={'/'}>
                  <img src={chart}/>
                  <span>Overview</span>
              </NavLink>
              <NavLink to={'/portfolio'}>
                  <img src={portfolio}/>
                  <span>Portfolio</span>
              </NavLink>
          </nav>
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
