
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import Register from './pages/Register'
import SignIn from './pages/SignIn'

function App() {

  return (
    // <Router>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout>
        <p>Home page</p>
      </Layout>}/>
      <Route path='/search' element={<Layout>
        <p>Search page</p>
      </Layout>}/> 
      <Route path='/register' element={<Layout><Register/></Layout>}/>
      <Route path='/sign-in' element={<Layout><SignIn/></Layout>}/>
       <Route path='*' element={<Navigate to="/"/>}/>

      </Routes>
    </BrowserRouter>
    // </Router>
  )
}

export default App
