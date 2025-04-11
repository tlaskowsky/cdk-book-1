// src/services/creature-service.ts
import { Creature, CreatureType, CreatureCapability } from '../models/creature';
// Adjust import path if needed: import { Creature, ... } from '../creature';

// A class encapsulates data (creatures) and behavior (methods) related to creatures.
export class CreatureService {
  // 'private' properties are only accessible from within this class instance.
  // This enforces encapsulation - hiding internal implementation details.
  private creatures: Creature[] = [];

  // The 'constructor' is a special method called when a new instance
  // of the class is created (e.g., using 'new CreatureService()').
  // It's typically used to initialize the object's state.
  // Here, it accepts an optional array of initial creatures.
  constructor(initialCreatures: Creature[] = []) {
    // 'this' refers to the instance of the class being created.
    this.creatures = initialCreatures;
  }

  // Methods define the behavior of the class. They operate on the instance's data.
  // This method returns all creatures stored in this service instance.
  getAllCreatures(): Creature[] {
    return this.creatures;
  }

  // Find a creature by its ID within this service instance's list.
  getCreatureById(id: string): Creature | undefined {
    return this.creatures.find(creature => creature.id === id);
  }

  // Add a new creature to this service instance's list.
  // 'void' indicates this method doesn't return a value.
  addCreature(creature: Creature): void {
    // Check if creature with this ID already exists (optional, good practice)
    if (!this.getCreatureById(creature.id)) {
      this.creatures.push(creature);
    } else {
      console.warn(`Creature with ID ${creature.id} already exists.`);
    }
  }

  // Find available creatures by capability from this instance's list.
  getAvailableCreaturesByCapability(capability: CreatureCapability): Creature[] {
    return this.creatures.filter(
      creature => creature.available && creature.capabilities.includes(capability)
    );
  }

  // Update the availability status of a specific creature in this instance's list.
  updateCreatureAvailability(id: string, available: boolean): boolean {
    const creature = this.getCreatureById(id);
    if (creature) {
      creature.available = available;
      return true; // Indicate success
    }
    return false; // Indicate creature not found
  }
}