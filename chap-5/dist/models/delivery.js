"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryStatus = void 0;
var DeliveryStatus;
(function (DeliveryStatus) {
    DeliveryStatus["REQUESTED"] = "requested";
    DeliveryStatus["ASSIGNED"] = "assigned";
    DeliveryStatus["PICKED_UP"] = "picked-up";
    DeliveryStatus["IN_TRANSIT"] = "in-transit";
    DeliveryStatus["DELIVERED"] = "delivered";
    DeliveryStatus["FAILED"] = "failed";
    DeliveryStatus["CANCELLED"] = "cancelled";
})(DeliveryStatus || (exports.DeliveryStatus = DeliveryStatus = {}));
