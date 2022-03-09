const { DestinationResource } = require('./destination.resource.js');
const { ReservationResource } = require('./reservation.resource.js');
const { SchoolResource } = require('./school.resource.js');
const { UserResource } = require('./user.resource.js');


const AdminJsResources = [
    UserResource,
    ReservationResource,
    DestinationResource,
    SchoolResource,
];

module.exports = { AdminJsResources };
