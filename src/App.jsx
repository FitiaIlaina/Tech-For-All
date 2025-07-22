import './App.css'
import Application from './components/Application';
import Speech from './components/Speech'
import HomePage from './components/HomePage'
import MobileHome from './components/MobileHome'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import DocsComp from './components/docsComp';
import ChatW from './components/ChatW';


function App() {

  return (
    <>
        <Router>
            <Routes>
                <Route path ="/" element={< HomePage />} />
                <Route path='/Application' element={<Application />}/>
                <Route path='/Speech' element={<Speech />}/>
                <Route path='/Mobile' element={<MobileHome />}/>
              <Route path="/userguide" element={<DocsComp/>}/>
              <Route path="/chat" element={<ChatW/>}/>

            </Routes>
        </Router>
    </>
  )
}

export default App