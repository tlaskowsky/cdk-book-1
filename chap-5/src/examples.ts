// src/examples.ts
import { Creature, CreatureType, CreatureCapability } from './models/creature';
// Adjust import paths if models are not in a subdirectory:
// import { Creature, CreatureType, CreatureCapability } from './creature';

// Create an array explicitly typed to hold only Creature objects
const creatures: Creature[] = [
  {
    id: 'dragon-001',
    name: 'Ember',
    type: CreatureType.DRAGON,
    capabilities: [
      CreatureCapability.FLYING,
      CreatureCapability.FIREPROOF,
      CreatureCapability.HEAVYLIFTING,
    ],
    maxPayloadWeight: 500,
    range: 1000,
    speed: 80,
    available: true,
    // currentLocation and lastLocationUpdate are optional, so omitted here
  },
  {
    id: 'phoenix-001',
    name: 'Blaze',
    type: CreatureType.PHOENIX,
    capabilities: [
      CreatureCapability.FLYING,
      CreatureCapability.FIREPROOF,
      CreatureCapability.SPEEDYDELIVERY,
    ],
    maxPayloadWeight: 50,
    range: 800,
    speed: 120,
    available: true,
    lastLocationUpdate: new Date(), // Optional properties can be included
    currentLocation: {
      latitude: 37.7749,
      longitude: -122.4194,
    },
  },
  // Add more creatures if desired...
];

// Function typed to accept a string ID and return a Creature or undefined
function findCreatureById(id: string): Creature | undefined {
  // The 'find' method itself returns T | undefined, matching our return type
  return creatures.find(creature => creature.id === id);
}

// Function typed to accept a capability and return an array of Creatures
function findAvailableCreaturesByCapability(capability: CreatureCapability): Creature[] {
  // Filter returns an array, matching our return type
  return creatures.filter(
    creature => creature.available && creature.capabilities.includes(capability)
  );
}

// --- Using our typed functions ---

console.log("--- Available Flying Creatures ---");
const flyingCreatures = findAvailableCreaturesByCapability(CreatureCapability.FLYING);

if (flyingCreatures.length > 0) {
  flyingCreatures.forEach(creature => {
    // TypeScript knows 'creature' is of type Creature here,
    // so editor provides autocompletion for creature.name, creature.type etc.
    console.log(`- ${creature.name} (${creature.type}): Speed ${creature.speed} km/h`);
  });
} else {
  console.log("No available flying creatures found.");
}


console.log("\n--- Finding a Specific Creature ---");
const specificCreatureId = 'dragon-001';
const foundCreature = findCreatureById(specificCreatureId);

// We must check if foundCreature is defined because the return type is Creature | undefined
if (foundCreature) {
  console.log(`Found creature: ${foundCreature.name}`);
  console.log(`Type: ${foundCreature.type}`);
  // TypeScript knows foundCreature is a Creature here, so accessing properties is safe
  console.log(`Capabilities: ${foundCreature.capabilities.join(', ')}`);
  console.log(`Is Available: ${foundCreature.available}`);
} else {
  console.log(`Creature with ID ${specificCreatureId} not found!`);
}

// --- Example of TypeScript catching errors ---
// Uncomment the block below and try compiling to see the errors

/*
const badCreatureAttempt: Creature = {
  // Missing required properties: id, name, type, capabilities, etc.
  // TypeScript Error: Type '{}' is missing the following properties from type 'Creature':
  // id, name, type, capabilities, and 5 more.ts(2740)
  speed: 50,
  available: false
};

const anotherBadAttempt = {
  id: 'unicorn-001',
  name: 'Sparkle',
  type: 'Unicorn', // Type '"Unicorn"' is not assignable to type 'CreatureType'.ts(2322)
  capabilities: [CreatureCapability.FLYING, 'Healing'], // Type 'string' is not assignable to type 'CreatureCapability'.ts(2322)
  maxPayloadWeight: 100,
  range: 500,
  speed: 70,
  available: true,
  wingspan: 3 // Property 'wingspan' does not exist on type 'Creature'.ts(2339)
};

// Assigning the structurally incorrect object to a Creature type variable
const badAssignment: Creature = anotherBadAttempt; // Causes multiple errors
*/