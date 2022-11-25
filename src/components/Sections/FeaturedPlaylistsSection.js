import React from 'react'
import Display from '../Display'
import { useEffect, useState } from 'react';
import { useAPI } from '../../hooks/apis/General.ts';

export default function FeaturedPlaylistsSection() {

    const [featuredPlaylistsData, setfeaturedPlaylistsData] = useState('');
    const [error, setError] = useState('');
    const api = useAPI();

    useEffect(() => {
        api
            .getFeaturedPlaylists()
            .then((data) => {
                setfeaturedPlaylistsData(data);
                // console.log(data);
            })
            .catch(() => {
                setError(error);
            });
    }, []);

    return (
        <div>
            <Display title="Featured Playlists" data={featuredPlaylistsData?.playlists?.items} />
        </div>
    )
}