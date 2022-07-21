import React from "react";
import "./login.css";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=85e387f164e94bd6b9b5baf2e1f9d3dd&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export default function Login() {
  return (
    <div className="login-page">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
        alt="logo"
        className="logo"
      />
      <a href={AUTH_URL}>
        <div className="login-button">Log in</div>
      </a>
    </div>
  );
}
