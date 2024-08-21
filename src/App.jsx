import './App.scss'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'

function App() {

  return (
    <div className="App">
      <Header />

      <main>
        <div className="page" id="home">
          <Home />
        </div>
        
      </main>

    </div>
  )
}

export default App
