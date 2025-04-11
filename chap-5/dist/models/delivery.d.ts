import { Creature } from './creature';
import { Package } from './package';
export declare enum DeliveryStatus {
    REQUESTED = "requested",
    ASSIGNED = "assigned",
    PICKED_UP = "picked-up",
    IN_TRANSIT = "in-transit",
    DELIVERED = "delivered",
    FAILED = "failed",
    CANCELLED = "cancelled"
}
export interface Delivery {
    id: string;
    packageId: string;
    creatureId?: string;
    status: DeliveryStatus;
    requestTime: Date;
    assignedTime?: Date;
    pickupTime?: Date;
    deliveryTime?: Date;
    failureReason?: string;
    estimatedTimeRemaining?: number;
    currentLocation?: {
        latitude: number;
        longitude: number;
    };
}
export interface DeliveryDetails {
    deliveryInfo: Delivery;
    packageInfo: Package;
    creatureInfo?: Creature;
}
