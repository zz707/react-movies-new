import {Movies} from "../components/Movies";
import React from "react";
import {Preloader} from "../components/Preloader";
import {Search} from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            movies: [],
        }
    }

    searchMovies = (searchString) => {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchString}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}));
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}));
    }

    render() {
        const {movies} = this.state;

        return <main className="container content">
            <Search searchMovies={this.searchMovies} />
            {
                movies.length ? (
                    <Movies movies={this.state.movies}/>
                ) : <Preloader />
            }
        </main>;
    }
}

export {Main};
