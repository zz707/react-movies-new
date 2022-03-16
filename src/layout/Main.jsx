import {Movies} from "../components/Movies";
import React, {useEffect, useState} from "react";
import {Preloader} from "../components/Preloader";
import {Search} from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const searchMovies = (searchString, type = 'all') => {
        setLoading(true);

        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchString}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false)
            });
    }

    useEffect(() =>
    {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.Search);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false)
            });
    }, []);


    return <main className="container content">
        <Search searchMovies={searchMovies}/>
        {
            loading ? (
                <Preloader/>
            ) : (
                <Movies movies={movies}/>
            )
        }
    </main>;

}

export {Main};
