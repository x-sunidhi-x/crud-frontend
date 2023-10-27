import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import CS from './components/CS';
import StudeList from './components/StudeList';
import EditStudent from './components/EditStudent';
function App() {
  return (
    <div class="container">
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<CS />} />
          <Route path="/create-student" element={<CS />} />
          <Route path="/student-list" element={<StudeList />} />
          <Route path="/edit-student/:id" element={<EditStudent />} />
        </Routes>
      </HashRouter>
    </div>
  );
}


export default App;
