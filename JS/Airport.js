const PassengerPlane = require('./Planes/PassengerPlane');
const MilitaryPlane = require('./Planes/MilitaryPlane');
const MilitaryType = require('./models/militaryType');
const experimentalPlane = require('./Planes/experimentalPlane');

const TRUE_CONDITION = 1;
const FALSE_CONDITION = -1;

class Airport {

    constructor(planes) {
        this.planes = planes;
    }

    getPlanes() {
        return this.planes;
    }

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
        let passengerPlanes = this.getPasssengerPlane();
        let planeWithMaxCapacity = passengerPlanes[0];
        passengerPlanes.forEach(plane => plane.getPassengersCapacity() > planeWithMaxCapacity.getPassengersCapacity() ? planeWithMaxCapacity = plane:null)
        return planeWithMaxCapacity;
    }
    getTransportMilitaryPlanes(){
        let transportMilitaryPlanes = [];
        let militaryPlanes = this.getMilitaryPlanes();
        militaryPlanes.forEach(plane=>plane.getMilitaryType() == MilitaryType.TYPE_TRANSPORT?transportMilitaryPlanes.push(plane):null)
        return transportMilitaryPlanes;
    }


    getBomberMilitaryPlanes()
    {
        let bomberMilitaryPlanes = [];
        let militaryPlanes = this.getMilitaryPlanes();
        militaryPlanes.forEach(plane=>plane.getMilitaryType()=== MilitaryType.BOMBER?bomberMilitaryPlanes.push(plane):null);
        return bomberMilitaryPlanes;
    }

    getExperimentalPlanes() {
        let experimentalPlanes  = [];
        this.planes.forEach(plane => plane instanceof experimentalPlane?experimentalPlanes.push(plane):null);
        return experimentalPlanes;
    }

    sortByMaxDistance() {
        return this.planes.sort((firstPlane, secondPlane) => (firstPlane.getMaxFlightDistance() > secondPlane.getMaxFlightDistance()) ? TRUE_CONDITION : FALSE_CONDITION);
    }

    sortByMaxSpeed() {
        return this.planes.sort((firstPlane, secondPlane) => (firstPlane.getMaxSpeed() > secondPlane.getMaxSpeed()) ? TRUE_CONDITION : FALSE_CONDITION);
    }

    sortByMaxLoadCapacity() {
        return this.planes.sort((firstPlane, secondPlane) => (firstPlane.getMinLoadCapacity() > secondPlane.getMinLoadCapacity()) ? TRUE_CONDITION : FALSE_CONDITION);
    }

    static print(planes) {
        return JSON.stringify(planes);
    }
}

module.exports = Airport;
