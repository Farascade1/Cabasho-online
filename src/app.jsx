import {Route, Routes} from 'react-router-dom'
 import AragCabashada from './pages/AragCabashada' 
import DirCabasho from './pages/DirCabasho'
import Complaint from './pages/complaint'
import Hero from './components/Hero'
import Details from './pages/Details'
import Login from './pages/Login'
import Dashboard from './pages/dashboard'


function App() {
  return (
     <Routes>
      <Route path='dash' element={< Dashboard/> }/>
       <Route path='/login' element={ < Login/>} />
      <Route path='/' element={<Hero/>}></Route>
      <Route path='/detail' element={<Details/>}></Route>
      <Route path='/register' element={ <Complaint /> }></Route>
         <Route path='/arag' element={ <AragCabashada/>} /> 
        <Route path='/dir' element={ < DirCabasho />}> </Route>
     </Routes>
  )
}

export default App
