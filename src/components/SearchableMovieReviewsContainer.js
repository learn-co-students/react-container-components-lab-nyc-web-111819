import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const baseURL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ&query='


class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ""
    }

    setSearchState = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    fetchMovies = (event) => {  
        event.preventDefault()
        fetch(`${baseURL}${this.state.searchTerm}`)
        .then(response => response.json())
        .then(moveData => this.setState({
            reviews: moveData.results
        }))
    }

    
    render() {
        return (
            <div className="main-div">
                <form onSubmit={this.fetchMovies}>
                    <input type="text" onChange={(event) => this.setSearchState(event)} value={this.state.searchTerm} placeholder="Search Movies"></input>
                    <input type="submit" value="Get me a movie!"></input>
                </form>
                <div className="searchable-movie-reviews">
                    < MovieReviews
                    reviews={this.state.reviews}
                    />
                </div>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer
