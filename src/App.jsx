import './App.scss'
import Header from './components/Header/Header'
import About from './pages/About/About'
import Home from './pages/Home/Home'

function App() {

  return (
    <div className="App">
      <Header />

      <main>
        <div className="page" id="home">
          <Home />
        </div>
        <div className="page" id="about">
          <About />
        </div>
      </main>

    </div>
  )
}

export default App
