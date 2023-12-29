import { Routes, Route } from "react-router-dom"
import './App.css';
import QuoteComponent from './component/Quote Component/QuoteComponent';
import Bookmarks from '../src/component/Bookmarked Quotes/Bookmarks';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <QuoteComponent/> } />
        <Route path="bookmark" element={ <Bookmarks/> } />
      </Routes>

    </div>
  );
}

export default App;
