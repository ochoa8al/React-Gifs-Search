import React from 'react';
import './App.css';
import SearchResults from './pages/SearchResults';
import Home from './pages/Home'
import {Link,Route} from 'wouter' 
import StaticContext from './context/StaticContext'
import Deatil from './pages/Detail';
import { GifsContext } from './context/GifsContext';
function App() {
 
  return (
    <StaticContext.Provider value={{name:"Curso MiduDev",suscribeteAlCanal:true}}>    
      <div className="App">
        <section className="App-content">
          <Link to='/'>
            <img src='/HomeIcon.png' alt='Giffy Home Logo' className='App-logo'/>
          </Link>
          <GifsContext>
            <Route 
              component={Home}
              path='/'
            />
            <Route
              component={SearchResults}
              path='/search/:keywords'    
            /> 
            <Route
              component={Deatil}
              path='/gif/:id'
            />     
          </GifsContext>
        </section>      
      </div>
    </StaticContext.Provider>
  )
}

export default App;