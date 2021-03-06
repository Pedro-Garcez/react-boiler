/*
 * MATCHUP
 * =======
 */

export default function getMatchupApi (exec) {

	/*
	 * Expose API
	 * --
	 * On top for clarity, mind the hoisting
	 */
	return {
		getMatchups,
		getMatchup,
		updateMatchup
	};



	/*
	 * gets all matchups for a champion
	 * --
	 * @param {String} champ - champion name
	 * @return {Promise} from .exec
	 */
	function getMatchups (champ) {
		return exec({
			method: 'get',
			url: '/matchups',
			query: {
				'name': champ
			}
		});
	}

	/*
	 * Get single champion
	 * --
	 * @param {String} champ - champion name
	 * @return {Promise} from .exec
	 */
	function getMatchup (champ1, champ2) {

		return exec({
			method: 'get',
			url: '/matchup',
			query: {
				'champ1': champ1,
				'champ2': champ2
			}
		});
	}

	/*
	 *  Updates matchup
	 * --
	 * @param {String} champ - champion name
	 * @return {Promise} from .exec
	 */
	function updateMatchup (champ, update) {
		return exec({
			method: 'post',
			url: '/updateMatchup',
			query: {
				'champ1': champ.name,
				'champ2': update.name,
				'update': update
			}
		});
	}

}
