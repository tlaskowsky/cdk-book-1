// src/models/delivery.ts
import { Creature } from './creature'; // Assuming models are in separate files
import { Package } from './package';   // Use './creature' if in the same directory

export enum DeliveryStatus {
  REQUESTED = 'requested',
  ASSIGNED = 'assigned',
  PICKED_UP = 'picked-up',
  IN_TRANSIT = 'in-transit',
  DELIVERED = 'delivered',
  FAILED = 'failed',
  CANCELLED = 'cancelled',
}

// Basic delivery info, referencing other entities by ID
export interface Delivery {
  id: string;
  packageId: string; // Reference to Package ID
  creatureId?: string; // Optional: Might not be assigned immediately
  status: DeliveryStatus;
  requestTime: Date;
  assignedTime?: Date;
  pickupTime?: Date;
  deliveryTime?: Date;
  failureReason?: string;
  estimatedTimeRemaining?: number; // in minutes
  currentLocation?: {
    latitude: number;
    longitude: number;
  };
}

// A more comprehensive type combining full objects for detailed views
// This demonstrates composing interfaces
export interface DeliveryDetails {
  deliveryInfo: Delivery;
  packageInfo: Package;
  creatureInfo?: Creature; // Creature might be optional if not assigned yet
}