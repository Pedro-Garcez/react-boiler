/*
 * Dependencies
 */

// Vendors
import React from 'react';
import { connect } from 'react-redux';
import { actions as userActions } from 'store/user.js';

/*
 * MOVIECARD
 * =========
 */
@connect(
	state => ({
		likedList: state.user.likedList
	}), {
		toggleLike: userActions.toggleLike
	}
)
class MovieCard extends React.Component {

	static propTypes = {
		movie: React.PropTypes.object.isRequired,
		likedList: React.PropTypes.array.isRequired,
		toggleLike: React.PropTypes.func.isRequired
	};

	constructor (props) {
		super(props);

	}

	handleSave () {
		const { likedList, movie, toggleLike } = this.props;
		const index = likedList.map(item => { return item.Title; }).indexOf(movie.Title);

		if (index === -1) {
			toggleLike([].concat(likedList, [movie]));
		}
		else {
			toggleLike([].concat(likedList.filter(list => { return list.Title !== movie.Title; })));
		}

	}

	render () {
		const { movie, likedList } = this.props;

		return (
			<div className="moviecard__item">
				<div className="moviecard">
					<div className="moviecard__result">
						{movie.Poster ? (
							<div className="moviecard__image" style={{ backgroundImage: `url(${movie.Poster})` }}>
							</div>
						) : null}
						<div className="moviecard__content">
							<div className="moviecard__title">
								{movie.Title}
							</div>
							<div className="moviecard__date">
								{movie.Year}
							</div>
							<div className="moviecard__desc">
								{movie.Plot}
							</div>
							{movie.imdbRating ? (
								<div className="moviecard__rating">
									{movie.imdbRating}
								</div>
							) : null}
							<div className="moviecard__heart">
								{likedList.some(likedMovie => { return likedMovie.Title === movie.Title; }) ? (
								<button onClick={() => this.handleSave()}>
									Unlike Movie
								</button>
							) : (
								<button onClick={() => this.handleSave()}>
									Like Movie
								</button>
							)}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default MovieCard;
