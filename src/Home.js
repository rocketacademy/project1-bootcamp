import { useState, useEffect } from "react";
import Authenticate from "./Authentication";
import Player from "./player";
import SearchResult from "./SearchResult";
import SpotifyWebApi from "spotify-web-api-node";
import {
  DashBoardContainer,
  SearchInput,
  ResultsContainer,
  PlayerContainer,
} from "./Home.styles";

const spotifyApi = new SpotifyWebApi({
  clientId: "85e387f164e94bd6b9b5baf2e1f9d3dd",
});

export default function Home({ code }) {
  const accessToken = Authenticate(code);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [playingTrack, setPlayingTrack] = useState();

  function chooseTrack(track) {
    setPlayingTrack(track);
    setSearch("");
  }

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;

    let cancel = false;
    spotifyApi.searchTracks(search).then((res) => {
      if (cancel) return;
      setSearchResults(
        res.body.tracks.items.map((track) => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image;
              return smallest;
            },
            track.album.images[0]
          );

          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
          };
        })
      );
    });

    return () => (cancel = true);
  }, [search, accessToken]);

  return (
    <DashBoardContainer>
      <img
        className="logo"
        src="https://rocketacademy.co/static/859a88b236f0287d824729cdc001e3c7/c11fe/rocket-brand-footer.png"
        alt=""
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "15%",
        }}
      />
      <SearchInput
        type="search"
        placeholder="Search Songs/Artists"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ResultsContainer>
        {searchResults.map((track) => (
          <SearchResult
            track={track}
            key={track.uri}
            chooseTrack={chooseTrack}
          />
        ))}
      </ResultsContainer>
      <PlayerContainer>
        <Player accessToken={accessToken} trackUri={playingTrack?.uri} />
      </PlayerContainer>
    </DashBoardContainer>
  );
}
