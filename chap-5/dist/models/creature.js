"use strict";
// src/models/creature.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatureCapability = exports.CreatureType = void 0;
// Using an enum for a fixed set of creature types.
// Provides type safety and autocompletion compared to using raw strings.
var CreatureType;
(function (CreatureType) {
    CreatureType["DRAGON"] = "dragon";
    CreatureType["PHOENIX"] = "phoenix";
    CreatureType["GRIFFIN"] = "griffin";
    CreatureType["UNICORN"] = "unicorn";
    CreatureType["PEGASUS"] = "pegasus";
})(CreatureType || (exports.CreatureType = CreatureType = {}));
// Using an enum for creature capabilities.
var CreatureCapability;
(function (CreatureCapability) {
    CreatureCapability["FLYING"] = "flying";
    CreatureCapability["FIREPROOF"] = "fireproof";
    CreatureCapability["WATERPROOF"] = "waterproof";
    CreatureCapability["COLDRESISTANT"] = "cold-resistant";
    CreatureCapability["HEAVYLIFTING"] = "heavy-lifting";
    CreatureCapability["SPEEDYDELIVERY"] = "speedy-delivery";
})(CreatureCapability || (exports.CreatureCapability = CreatureCapability = {}));
