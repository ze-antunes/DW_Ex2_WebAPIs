import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAPI } from '../hooks/apis/General.ts';
import Display from './Display';

export default function Categorypage() {
    const [playlistsData, setPlaylistsData] = useState('');
    const { id } = useParams();
    const api = useAPI();

    useEffect(() => {
        api
            .getCategoryPlaylists(id)
            .then((data) => {
                setPlaylistsData(data);
                console.log(data);
            })
            .catch(() => { });
    }, []);

    return (
        <div>
            <Display data={playlistsData?.playlists?.items} />
        </div>
    );
}
