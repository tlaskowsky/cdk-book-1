"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
const creature_1 = require("./models/creature");
const package_1 = require("./models/package");
const delivery_1 = require("./models/delivery"); // adjust path if needed
const creature_service_1 = require("./services/creature-service");
const package_service_1 = require("./services/package-service");
const delivery_service_1 = require("./services/delivery-service");
// Adjust import paths if not using subdirectories
// --- Setup ---
console.log("--- Initializing Services ---");
// Create sample creature data
const creatureService = new creature_service_1.CreatureService([
    { id: 'dragon-001', name: 'Ember', type: creature_1.CreatureType.DRAGON, capabilities: [creature_1.CreatureCapability.FLYING, creature_1.CreatureCapability.FIREPROOF, creature_1.CreatureCapability.HEAVYLIFTING], maxPayloadWeight: 500, range: 1000, speed: 80, available: true },
    { id: 'phoenix-001', name: 'Blaze', type: creature_1.CreatureType.PHOENIX, capabilities: [creature_1.CreatureCapability.FLYING, creature_1.CreatureCapability.FIREPROOF, creature_1.CreatureCapability.SPEEDYDELIVERY], maxPayloadWeight: 50, range: 800, speed: 120, available: true },
    { id: 'griffin-001', name: 'Skyclaw', type: creature_1.CreatureType.GRIFFIN, capabilities: [creature_1.CreatureCapability.FLYING, creature_1.CreatureCapability.HEAVYLIFTING], maxPayloadWeight: 300, range: 600, speed: 90, available: true }
]);
// Create sample package data
const packageService = new package_service_1.PackageService([
    { id: 'pkg-001', senderId: 'user-1', recipientId: 'user-2', weight: 5, size: package_1.PackageSize.MEDIUM, requirements: [package_1.PackageRequirement.FRAGILE], description: 'Crystal potion bottles', pickupLocation: { latitude: 37.7, longitude: -122.4, address: '1 Magic Ln' }, deliveryLocation: { latitude: 34.0, longitude: -118.2, address: '2 Spell Ave' }, createdAt: new Date() },
    { id: 'pkg-002', senderId: 'user-3', recipientId: 'user-4', weight: 250, size: package_1.PackageSize.LARGE, requirements: [package_1.PackageRequirement.FIREPROOF], description: 'Enchanted anvil', pickupLocation: { latitude: 40.7, longitude: -74.0, address: '3 Forge St' }, deliveryLocation: { latitude: 41.8, longitude: -87.6, address: '4 Anvil Rd' }, createdAt: new Date() }
]);
// Create the priority delivery service, injecting dependencies (other services)
const deliveryService = new delivery_service_1.PriorityDeliveryService(creatureService, packageService);
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
    deliveryService.updateDeliveryStatus(delivery1.id, delivery_1.DeliveryStatus.DELIVERED);
    // Make creature available again (simplified logic)
    creatureService.updateCreatureAvailability(delivery1.creatureId, true);
    console.log(`${delivery1.creatureId} is now available: ${(_a = creatureService.getCreatureById(delivery1.creatureId)) === null || _a === void 0 ? void 0 : _a.available}`);
}
