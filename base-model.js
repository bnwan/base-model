/**
 * Created by Benjamin on 11/04/2014.
 */

var Emitter = require("wildemitter"),
    inherits = require("inherits"),
    protoMethods = require("prototype-methods"),
    _ = require("lodash");

var BaseModel = function baseModel(options) {
    if(options){
        _.defaults(this, options);
    }

    Emitter.call(this);
};

var prototypeApi = {
    constructor: BaseModel
};

inherits(BaseModel, Emitter);
protoMethods(BaseModel, prototypeApi);

module.exports = BaseModel;