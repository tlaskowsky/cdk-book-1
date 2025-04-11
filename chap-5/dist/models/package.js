"use strict";
// src/models/package.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageRequirement = exports.PackageSize = void 0;
var PackageSize;
(function (PackageSize) {
    PackageSize["SMALL"] = "small";
    PackageSize["MEDIUM"] = "medium";
    PackageSize["LARGE"] = "large";
    PackageSize["EXTRA_LARGE"] = "extra-large";
})(PackageSize || (exports.PackageSize = PackageSize = {}));
var PackageRequirement;
(function (PackageRequirement) {
    PackageRequirement["FRAGILE"] = "fragile";
    PackageRequirement["REFRIGERATED"] = "refrigerated";
    PackageRequirement["FIREPROOF"] = "fireproof";
    PackageRequirement["WATERPROOF"] = "waterproof";
    PackageRequirement["URGENT"] = "urgent";
})(PackageRequirement || (exports.PackageRequirement = PackageRequirement = {}));
