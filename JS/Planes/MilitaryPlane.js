const Plane = require('./Plane');

class MilitaryPlane extends Plane {

    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity, militaryType) {
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this._militaryType = militaryType;
    }
    getMilitaryType() {
        return this._militaryType;
    }
}

module.exports = MilitaryPlane;