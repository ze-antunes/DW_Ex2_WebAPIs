import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAPI } from '../hooks/apis/General.ts';

export default function Playlistpage() {
    const [playlistTracks, setPlaylistTracks] = useState('');
    const [playlistData, setPlaylistData] = useState('');
    const { id } = useParams();
    const api = useAPI();

    useEffect(() => {
        api
            .getPlaylist(id)
            .then((data) => {
                setPlaylistData(data);
            })
            .catch(() => { });

        api
            .getPlaylistTracks(id)
            .then((data) => {
                setPlaylistTracks(data);
            })
            .catch(() => { });
    }, []);

    function millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    return (
        <div className='playlist'>
            <h1 className='playlist__name'>{playlistData.name}</h1>
            <ul className='playlist__grid'>
                {playlistTracks && playlistTracks.items?.map(song => {
                    return (
                        <li className='playlist__song' key={song.track.id}>
                            <img className='playlist__song-img' src={song.track.album.images[0].url} alt="bruh" />
                            <div className='playlist__song-info'>
                                <h3 className='playlist__song-name'>{song.track.name}</h3>
                                <p className='playlist__song-artist'>{song.track.artists[0].name}</p>
                                <p className='playlist__song-duration'>{millisToMinutesAndSeconds(song.track.duration_ms)}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}
