
import './App.css'
import Community from './Components/Community/Community'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Jobs from './Components/Jobs/Jobs'
import Companies from './Components/Companies/Companies'
import Salaries from './Components/Salaries/Salaries'
import Layout from './Components/Layout'
import Landing from './Components/Landing/Landing'
function App() {
  const isLogin = false

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path={'/'} element={isLogin? <Community/> : <Landing/> }/>
      <Route path={'/community'} element={<Community/>}/>
      <Route path={'/jobs'} element={<Jobs/>}/>
      <Route path={'/companies'} element={<Companies/>}/>
      <Route path={'/salaries'} element={<Salaries/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
