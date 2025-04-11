// src/services/delivery-service.ts
import { Delivery, DeliveryStatus, DeliveryDetails } from '../models/delivery';
import { CreatureService } from './creature-service';
import { PackageService } from './package-service';
// Adjust import paths if needed

// Base DeliveryService class providing core functionality
export class DeliveryService {
  // 'protected' properties are accessible within this class AND any subclasses,
  // but NOT from outside code. Useful for inheritance.
  protected deliveries: Delivery[] = [];
  protected creatureService: CreatureService;
  protected packageService: PackageService;

  constructor(
    creatureService: CreatureService,
    packageService: PackageService
  ) {
    this.creatureService = creatureService;
    this.packageService = packageService;
  }

  getAllDeliveries(): Delivery[] {
    return this.deliveries;
  }

  getDeliveryById(id: string): Delivery | undefined {
    return this.deliveries.find(delivery => delivery.id === id);
  }

  // Basic implementation for creating a delivery request
  createDeliveryRequest(packageId: string): Delivery | undefined {
    const pkg = this.packageService.getPackageById(packageId);
    if (!pkg) {
        console.error(`Package with ID ${packageId} not found.`);
        return undefined;
    }

    const newDelivery: Delivery = {
      id: `del-${Date.now()}-${Math.random().toString(16).substring(2, 8)}`, // More unique ID
      packageId,
      // creatureId is initially undefined
      status: DeliveryStatus.REQUESTED,
      requestTime: new Date(),
    };
    this.deliveries.push(newDelivery);
    console.log(`Delivery request ${newDelivery.id} created for package ${packageId}.`);
    return newDelivery;
  }

  updateDeliveryStatus(id: string, status: DeliveryStatus, failureReason?: string): boolean {
      const delivery = this.getDeliveryById(id);
      if (delivery) {
          delivery.status = status;
          if (status === DeliveryStatus.FAILED && failureReason) {
              delivery.failureReason = failureReason;
          }
          // Could add logic here to set pickupTime, deliveryTime based on status
          console.log(`Delivery ${id} status updated to ${status}.`);
          return true;
      }
      console.error(`Delivery with ID ${id} not found for status update.`);
      return false;
  }
}

// Specialized PriorityDeliveryService that EXTENDS DeliveryService
export class PriorityDeliveryService extends DeliveryService {

  // We inherit constructor, getAllDeliveries, getDeliveryById, updateDeliveryStatus
  // and the protected properties from DeliveryService.

  // We override createDeliveryRequest to add specific priority logic.
  // The 'override' keyword is optional but recommended for clarity and safety.
  override createDeliveryRequest(packageId: string): Delivery | undefined {
    const pkg = this.packageService.getPackageById(packageId);
    if (!pkg) {
        console.error(`Package with ID ${packageId} not found for priority delivery.`);
        return undefined;
    }

    console.log(`Attempting to create PRIORITY delivery for package ${packageId}.`);

    // Find the fastest available creature (example priority logic)
    const creatures = this.creatureService.getAllCreatures(); // Accessing inherited service
    const availableCreatures = creatures.filter(c => c.available);

    if (availableCreatures.length === 0) {
        console.warn(`No creatures available for priority delivery of package ${packageId}. Creating standard request instead.`);
        // Fallback to base class behavior using 'super'
        return super.createDeliveryRequest(packageId);
    }

    // Sort by speed (descending) to find the fastest
    const fastestCreatures = [...availableCreatures].sort((a, b) => b.speed - a.speed);
    const assignedCreature = fastestCreatures[0];

    // Create the delivery, immediately assigning the fastest creature
    const newDelivery: Delivery = {
      id: `priority-${Date.now()}-${Math.random().toString(16).substring(2, 8)}`,
      packageId,
      creatureId: assignedCreature.id, // Assign immediately
      status: DeliveryStatus.ASSIGNED, // Set status to assigned
      requestTime: new Date(),
      assignedTime: new Date(), // Set assigned time
      estimatedTimeRemaining: Math.round(assignedCreature.range / assignedCreature.speed * 60 / 2), // Simplified estimate
    };
    this.deliveries.push(newDelivery); // Accessing inherited 'deliveries' array

    // Update the assigned creature's availability
    this.creatureService.updateCreatureAvailability(assignedCreature.id, false);

    console.log(`Priority delivery ${newDelivery.id} created for package ${packageId}, assigned to ${assignedCreature.name} (${assignedCreature.type}).`);
    return newDelivery;
  }

  // We could add other methods specific to PriorityDeliveryService here
}