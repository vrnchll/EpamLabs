const Plane = require('./Plane');

class experimentalPlane   extends Plane
{
    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity, type, classificationLevel)  {
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this._type = type;
        this._classificationLevel = classificationLevel;
    }
    get type() {
        return this._type;
    }
    get classificationLevel() {
        return this._classificationLevel;
    }
}

module.exports = experimentalPlane