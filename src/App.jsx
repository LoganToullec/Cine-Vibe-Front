import './App.css';
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import DetailPage from './pages/DetailPage';
import SearchBar from './components/homePage/SearchBar';
import PlayerPage from './pages/PlayerPage';
import UserProfilePage from './pages/UserProfilePage';
import AdminPage from './pages/AdminPage';
import WatchListPage from './pages/WatchListPage';

import {
  BrowserRouter as Router,
  Routes, //replaces "Switch" used till v5
  Route,
  Navigate
} from "react-router-dom";

const moviesList = [
  {
    id: 1,
    image: "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_.jpg",
    title: "Coco",
    starRating: 3,
    rating: 4.2,
    year: 2018,
    genre: "Action",
    runtime: "1h 56m",
    cast: "Maiwenn Simon, Logan Toullec, Ines Daffef"
  },
  {
    id: 2,
    image: "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_.jpg",
    title: "Coco",
    starRating: 3,
    rating: 4.2,
    year: 2018,
    genre: "Action",
    runtime: "1h 56m",
    cast: "Maiwenn Simon, Logan Toullec, Ines Daffef"
  },
  {
    id: 3,
    image: "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_.jpg",
    title: "Coco",
    starRating: 3,
    rating: 4.2,
    year: 2018,
    genre: "Action",
    runtime: "1h 56m",
    cast: "Maiwenn Simon, Logan Toullec, Ines Daffef"
  }
]

function App() {
  return (
    <div className='App'>
        <Router>
          <Routes>
            <Route exact path="/" element={ <Navigate to="/home/Home" /> }/>
            <Route exact path="" element={ <Navigate to="/home/Home" /> }/>
            <Route path="/home/:appName" element={<HomePage/>} />
            <Route path="/signin" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/appletv" element={<HomePage />} />
            <Route path="/disneyplus" element={<HomePage />} />
            <Route path="/mycanal" element={<HomePage />} />
            <Route path="/netflix" element={<HomePage />} />
            <Route path="/paramountplus" element={<HomePage />} />
            <Route path="/primevideo" element={<HomePage />} />
            <Route path="/detail/:contentId" element={<DetailPage />} />
            <Route path="/play/:contentId" element={<PlayerPage/>} />
            <Route path="/myprofile" element={<UserProfilePage/>} />
            <Route path="/adminPage" element={<AdminPage/>} />
            <Route path="/watchList" element={<WatchListPage />} />
          </Routes>
        </Router>
      </div>
      
    
  );
}

export default App;
