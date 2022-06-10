import { Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components'
import Overview from './pages/Overview';
import Portfolio from './pages/Portfolio';
import Navbar from './components/navbar/navbar';
import './App.css';

const Content = styled.main`
  padding: 40px 60px 0 60px;
  margin-left: 250px;

  @media screen and (max-width: 768px) {
    margin-left: 80px;
  }
`

function App() {
    return (
      <div className={'main-section'}>
          <Navbar />
          <Content>
              <Routes>
                  <Route path={'/'} element={<Overview/>} />
                  <Route path={'/portfolio'} element={<Portfolio/>} />
                  <Route path={'*'} element={<Navigate to={'/'}/>} />
              </Routes>
          </Content>
      </div>
    );
}

export default App;
