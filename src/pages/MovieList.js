import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: undefined,
      loading: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((response) => this.setState({
      movies: response,
      loading: false,
    }));
  }
  render() {
    const { movies, loading } = this.state;

    if (loading) {
      return (<Loading />);
    }

    return (
      <div>
        <div data-testid="movie-list">
          {movies.map((movie) => (<MovieCard key={movie.title} movie={movie} />))}
        </div>
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
