/**
*Returns the corresponding matrix in dim*1, given an dim matrix, and checks
* if corresponding with the observation dimension
*@param {Array.<Number> | Array.<Array.<Number>>} observation
*@param {Number} dimension
*@returns {Array.<Array.<Number>>}
*/

module.exports = function ({observation, dimension}) {
	if (!Array.isArray(observation)) {
		if (dimension === 1 && typeof (observation) === 'number') {
			return [[observation]];
		}

		throw (new TypeError('The observation should be an array'));
	}

	if (observation.length !== dimension) {
		throw (new TypeError('Observation and dimension not matching'));
	}

	if (typeof (observation[0]) === 'number') {
		return observation.map(element => [element]);
	}

	return observation;
};