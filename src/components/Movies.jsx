import {Movie} from "./Movie";

function Movies(props) {
    const {movies = []} = props;

    return <div className="movies">
        {
            movies.length ? (
                movies.map(movie => (
                    <Movie key={movie.imdbId} {...movie} />
                ))
            ) : (
                <h3>Nothing found</h3>
            )}
    </div>;
}

export {Movies}
