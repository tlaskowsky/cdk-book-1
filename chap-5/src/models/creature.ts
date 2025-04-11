// src/models/creature.ts

// Using an enum for a fixed set of creature types.
// Provides type safety and autocompletion compared to using raw strings.
export enum CreatureType {
    DRAGON = 'dragon',
    PHOENIX = 'phoenix',
    GRIFFIN = 'griffin',
    UNICORN = 'unicorn',
    PEGASUS = 'pegasus',
  }
  
  // Using an enum for creature capabilities.
  export enum CreatureCapability {
    FLYING = 'flying',
    FIREPROOF = 'fireproof',
    WATERPROOF = 'waterproof',
    COLDRESISTANT = 'cold-resistant',
    HEAVYLIFTING = 'heavy-lifting',
    SPEEDYDELIVERY = 'speedy-delivery',
  }
  
  // Using an interface to define the "shape" or "contract" for a Creature object.
  // It specifies the required and optional properties and their types.
  export interface Creature {
    id: string; // Required property of type string
    name: string;
    type: CreatureType; // Using the enum type
    capabilities: CreatureCapability[]; // An array where each element must be of CreatureCapability type
    maxPayloadWeight: number; // in kilograms
    range: number; // in kilometers
    speed: number; // in km/h
    available: boolean;
    lastLocationUpdate?: Date; // Optional property (denoted by '?') of type Date
    currentLocation?: { // Optional property that is an object itself
      latitude: number;
      longitude: number;
    };
  }