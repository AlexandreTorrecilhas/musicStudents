const getAllStudents = require('./getStudent/getAllStudents');
const getAllFamily = require('./getFamily/getAllFamily');
const getSingleFamily = require('./getFamily/getSingleFamily');
const getAllInstruments = require("./getInstruments/getAllInstruments");
const getAllParents = require('./getParents/getAllParents');

module.exports=[getAllStudents, getAllFamily, getSingleFamily, getAllInstruments, getAllParents]