import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Main from './pages/Main';
import Dashboard from './pages/Dashboard';
import Book from './pages/Book';
import Users from './pages/Users';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element ={<Login/>}/>
        <Route path="/main" element={<Main/>}>
        <Route index element={<Dashboard />} />
        <Route path="book" element ={<Book/>}/>
        <Route path="users" element ={<Users/>}/>
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
