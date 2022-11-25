import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SpotifyApiContext } from "react-spotify-api";
import Cookies from "js-cookie";
import { SpotifyAuth, Scopes } from "react-spotify-auth";
import { axios } from "./hooks/Axios.ts";

import SearchBar from './components/SearchBar';
import Header from './components/Header';
import MyPlaylistSection from './components/Sections/MyPlaylistsSection';
import CategoriesSection from './components/Sections/CategoriesSection';
import FeaturedPlaylistsSection from './components/Sections/FeaturedPlaylistsSection';
import Playlistpage from './components/Playlistpage';
import Categorypage from './components/Categorypage';


function App() {

  const [token, setToken] = React.useState(Cookies.get("spotifyAuthToken"));

  useEffect(() => {

    if (token && token.length >= 30) {
      axios.defaults.headers.common['authorization'] = `Bearer ${token}`;
    }

  }, [token])

  return (
    <Router>
      {token ? (
        <SpotifyApiContext.Provider value={token}>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/">
                <SearchBar />
                <MyPlaylistSection />
                <CategoriesSection />
                <FeaturedPlaylistsSection />
              </Route>
              <Route path="/playlist/:id">
                <Playlistpage />
              </Route>
              <Route path="/category/:id">
                <Categorypage />
              </Route>
              <Route path="*">
                <SearchBar />
                <MyPlaylistSection />
                <CategoriesSection />
                <FeaturedPlaylistsSection />
              </Route>
            </Switch>
          </div>
        </SpotifyApiContext.Provider>
      ) : (
        // Display the login page
        <div className='authentication'>
          <div className="authentication__section">
            <SpotifyAuth
              redirectUri='http://localhost:3000/callback'
              clientID='1a70ba777fec4ffd9633c0c418bdcf39'
              scopes={[Scopes.userReadPrivate, 'user-read-email']} // either style will work
              onAccessToken={(token) => setToken(token)}
            />
            <h3>Login with your spotify account!</h3>
            <p className='authentication__section-description'>Click in the spotify logo to complete the login.</p>
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;
