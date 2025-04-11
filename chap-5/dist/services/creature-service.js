"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatureService = void 0;
// Adjust import path if needed: import { Creature, ... } from '../creature';
// A class encapsulates data (creatures) and behavior (methods) related to creatures.
class CreatureService {
    // The 'constructor' is a special method called when a new instance
    // of the class is created (e.g., using 'new CreatureService()').
    // It's typically used to initialize the object's state.
    // Here, it accepts an optional array of initial creatures.
    constructor(initialCreatures = []) {
        // 'private' properties are only accessible from within this class instance.
        // This enforces encapsulation - hiding internal implementation details.
        this.creatures = [];
        // 'this' refers to the instance of the class being created.
        this.creatures = initialCreatures;
    }
    // Methods define the behavior of the class. They operate on the instance's data.
    // This method returns all creatures stored in this service instance.
    getAllCreatures() {
        return this.creatures;
    }
    // Find a creature by its ID within this service instance's list.
    getCreatureById(id) {
        return this.creatures.find(creature => creature.id === id);
    }
    // Add a new creature to this service instance's list.
    // 'void' indicates this method doesn't return a value.
    addCreature(creature) {
        // Check if creature with this ID already exists (optional, good practice)
        if (!this.getCreatureById(creature.id)) {
            this.creatures.push(creature);
        }
        else {
            console.warn(`Creature with ID ${creature.id} already exists.`);
        }
    }
    // Find available creatures by capability from this instance's list.
    getAvailableCreaturesByCapability(capability) {
        return this.creatures.filter(creature => creature.available && creature.capabilities.includes(capability));
    }
    // Update the availability status of a specific creature in this instance's list.
    updateCreatureAvailability(id, available) {
        const creature = this.getCreatureById(id);
        if (creature) {
            creature.available = available;
            return true; // Indicate success
        }
        return false; // Indicate creature not found
    }
}
exports.CreatureService = CreatureService;
