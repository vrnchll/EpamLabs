const PassengerPlane = require('./Planes/PassengerPlane');
const MilitaryPlane = require('./Planes/MilitaryPlane');
const MilitaryType = require('./models/militaryType');
const experimentalPlane = require('./Planes/experimentalPlane');

const TRUE_CONDITION = 1;
const FALSE_CONDITION = -1;

class Airport {

     getPasssengerPlane() {
        var PassengerPlaneArray = [];
        this.planes.forEach(plane=>{
            plane instanceof PassengerPlane?PassengerPlaneArray.push(plane):null;
        })
        return PassengerPlaneArray;
    }

    getMilitaryPlanes() {
        let militaryPlanes = [];
        this.planes.forEach(plane => {plane instanceof MilitaryPlane ? militaryPlanes.push(plane):null;});
        return militaryPlanes;
    }

    getPassengerPlaneWithMaxPassengersCapacity() {
        let passengerPlanes = this.getPassengerPlane();
        let planeWithMaxCapacity = passengerPlanes[0];
        passengerPlanes.forEach(plane => passengerPlanes[i].getPassengersCapacity() > planeWithMaxCapacity.getPassengersCapacity() ? planeWithMaxCapacity = passengerPlanes[i]:null)
        return planeWithMaxCapacity;
    }
    getTransportMilitaryPlanes(){
        let transportMilitaryPlanes = [];
        let militaryPlanes = this.getMilitaryPlanes();
        militaryPlanes.forEach(plane=>militaryPlanes[i].getMilitaryType() == MilitaryType.TYPE_TRANSPORT?transportMilitaryPlanes.push(militaryPlanes[i]):null)
        return transportMilitaryPlanes;
    }


    getBomberMilitaryPlanes()
    {
        let bomberMilitaryPlanes = [];
        let militaryPlanes = this.getMilitaryPlanes();
        militaryPlanes.forEach(plane=>militaryPlanes[i].getMilitaryType()=== MilitaryType.BOMBER?bomberMilitaryPlanes.push(militaryPlanes[i]):null);
        return bomberMilitaryPlanes;
    }

    constructor(planes) {
        this.planes = planes;
    }


    getExperimentalPlanes() {
        let experimentalPlanes  = [];
        this.planes.forEach(plane => plane instanceof experimentalPlane?experimentalPlanes.push(plane):null);
        return experimentalPlanes;
    }

    sortByMaxDistance() {
        this.planes.sort((a, b) => (a.getMaxFlightDistance() > b.getMaxFlightDistance()) ? TRUE_CONDITION : FALSE_CONDITION);
        return this;
    }

    sortByMaxSpeed() {
        this.planes.sort((a, b) => (a.getMaxSpeed() > b.getMaxSpeed()) ? TRUE_CONDITION : FALSE_CONDITION);
        return this;
    }

    sortByMaxLoadCapacity() {
        this.planes.sort((a, b) => (a.getMinLoadCapacity() > b.getMinLoadCapacity()) ? TRUE_CONDITION : FALSE_CONDITION);
        return this;
    }

    getPlanes() {
        return this.planes;
    }

    static print(planes) {
        return JSON.stringify(planes);
    }
}

module.exports = Airport;
