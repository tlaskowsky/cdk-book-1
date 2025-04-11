// src/app.ts
import { Creature, CreatureType, CreatureCapability } from './models/creature';
import { Package, PackageSize, PackageRequirement } from './models/package';
import { DeliveryStatus } from './models/delivery';

import { CreatureService } from './services/creature-service';
import { PackageService } from './services/package-service';
import { PriorityDeliveryService } from './services/delivery-service';
// Adjust import paths if not using subdirectories

// --- Setup ---
console.log("--- Initializing Services ---");

// Create sample creature data
const creatureService = new CreatureService([
  { id: 'dragon-001', name: 'Ember', type: CreatureType.DRAGON, capabilities: [CreatureCapability.FLYING, CreatureCapability.FIREPROOF, CreatureCapability.HEAVYLIFTING], maxPayloadWeight: 500, range: 1000, speed: 80, available: true },
  { id: 'phoenix-001', name: 'Blaze', type: CreatureType.PHOENIX, capabilities: [CreatureCapability.FLYING, CreatureCapability.FIREPROOF, CreatureCapability.SPEEDYDELIVERY], maxPayloadWeight: 50, range: 800, speed: 120, available: true },
  { id: 'griffin-001', name: 'Skyclaw', type: CreatureType.GRIFFIN, capabilities: [CreatureCapability.FLYING, CreatureCapability.HEAVYLIFTING], maxPayloadWeight: 300, range: 600, speed: 90, available: true }
]);

// Create sample package data
const packageService = new PackageService([
  { id: 'pkg-001', senderId: 'user-1', recipientId: 'user-2', weight: 5, size: PackageSize.MEDIUM, requirements: [PackageRequirement.FRAGILE], description: 'Crystal potion bottles', pickupLocation: { latitude: 37.7, longitude: -122.4, address: '1 Magic Ln' }, deliveryLocation: { latitude: 34.0, longitude: -118.2, address: '2 Spell Ave' }, createdAt: new Date() },
  { id: 'pkg-002', senderId: 'user-3', recipientId: 'user-4', weight: 250, size: PackageSize.LARGE, requirements: [PackageRequirement.FIREPROOF], description: 'Enchanted anvil', pickupLocation: { latitude: 40.7, longitude: -74.0, address: '3 Forge St' }, deliveryLocation: { latitude: 41.8, longitude: -87.6, address: '4 Anvil Rd' }, createdAt: new Date() }
]);

// Create the priority delivery service, injecting dependencies (other services)
const deliveryService = new PriorityDeliveryService(creatureService, packageService);

console.log("--- Services Initialized ---");

// --- Simulation ---

console.log('\n--- Available Creatures ---');
const availableCreatures = creatureService.getAllCreatures().filter(c => c.available);
availableCreatures.forEach(c => console.log(`${c.name} (${c.type}): Speed ${c.speed}, Available: ${c.available}`));

console.log('\n--- Requesting Priority Delivery for pkg-001 (Potion Bottles) ---');
const delivery1 = deliveryService.createDeliveryRequest('pkg-001');
if (delivery1) {
    console.log(`Delivery ${delivery1.id} status: ${delivery1.status}, Assigned Creature: ${delivery1.creatureId}`);
}

console.log('\n--- Current Creature Availability ---');
creatureService.getAllCreatures().forEach(c => console.log(`${c.name}: Available: ${c.available}`));

console.log('\n--- Requesting Priority Delivery for pkg-002 (Anvil) ---');
const delivery2 = deliveryService.createDeliveryRequest('pkg-002');
if (delivery2) {
    console.log(`Delivery ${delivery2.id} status: ${delivery2.status}, Assigned Creature: ${delivery2.creatureId}`);
}

console.log('\n--- Final Creature Availability ---');
creatureService.getAllCreatures().forEach(c => console.log(`${c.name}: Available: ${c.available}`));

// Simulate delivery completion
if (delivery1 && delivery1.creatureId) {
    console.log(`\n--- Simulating Completion for Delivery ${delivery1.id} ---`);
    deliveryService.updateDeliveryStatus(delivery1.id, DeliveryStatus.DELIVERED);
    // Make creature available again (simplified logic)
    creatureService.updateCreatureAvailability(delivery1.creatureId, true);
    console.log(`${delivery1.creatureId} is now available: ${creatureService.getCreatureById(delivery1.creatureId)?.available}`);
}