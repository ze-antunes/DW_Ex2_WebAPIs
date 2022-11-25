import { React, useState, useEffect } from "react";
import Display from './Display'
import { useAPI } from '../hooks/apis/General.ts';


function SearchBar() {

    // Cards
    const [categoriesData, setCategoriesData] = useState('');
    const [playlists, setPlaylists] = useState('');
    // Results 
    const [categoriesSearchResults, setCategoriesSearchResults] = useState('');
    const [playlistsSearchResults, setPlaylistsSearchResults] = useState('');
    const [error, setError] = useState('');
    const api = useAPI();



    useEffect(() => {
        api
            .getCategories()
            .then((data) => {
                setCategoriesData(data);
                // console.log(data);
            })
            .catch(() => {
                setError(error);
            });

        api
            .getMyPlaylists()
            .then((data) => {
                setPlaylists(data);
                // console.log(data)
            })
            .catch(() => {
                setError(error);
            });
    }, []);

    const handleChange = e => {
        if (e.target.value === '' || e.target.value === ' ') {
            setCategoriesSearchResults('')
            setPlaylistsSearchResults('')
        }
        else {
            let resultsCategories = []
            let resultsPlaylists = []

            for (let i = 0; i < categoriesData.categories.items.length; i++) {
                if (categoriesData.categories.items[i].name.includes(e.target.value.toUpperCase()) || categoriesData.categories.items[i].name.includes(e.target.value)) {
                    resultsCategories.push(categoriesData.categories.items[i])
                }
            }

            for (let i = 0; i < playlists.items.length; i++) {
                if (playlists.items[i].name.includes(e.target.value.toUpperCase()) || playlists.items[i].name.includes(e.target.value)) {
                    resultsPlaylists.push(playlists.items[i])
                }
            }

            setCategoriesSearchResults(resultsCategories)
            setPlaylistsSearchResults(resultsPlaylists)
        }
    };

    return (
        <div>
            <div className="search">
                <form>
                    <input
                        className="search__input"
                        placeholder="Title, Name, Category.."
                        onChange={handleChange}
                    />
                </form>
            </div>

            <div>
                {playlistsSearchResults && categoriesSearchResults && <Display title="Search Results" data={playlistsSearchResults} categoryBlocks={categoriesSearchResults} />}
            </div>
        </div>
    );
}

export default SearchBar;