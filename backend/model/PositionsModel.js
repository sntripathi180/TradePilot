const {model} = require("mongoose")
const {PositionsModel} = require("../schema/PositionsSchema");

const PositionsModel = new model("position",PositionsModel);
module.exports = {PositionsModel};