import React from 'react'
import Display from '../Display'
import { useEffect, useState } from 'react';
import { useAPI } from '../../hooks/apis/General.ts';

export default function MyPlaylistSection() {

    const [playlists, setPlaylists] = useState('');
    const [error, setError] = useState('');
    const api = useAPI();

    useEffect(() => {
        api
            .getMyPlaylists()
            .then((data) => {
                setPlaylists(data);
            })
            .catch(() => {
                setError(error);
            });
    }, []);

    return (
        <div>
            <Display title="My playlists" data={playlists?.items} />
        </div>
    )
}