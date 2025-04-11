import { Creature, CreatureCapability } from '../models/creature';
export declare class CreatureService {
    private creatures;
    constructor(initialCreatures?: Creature[]);
    getAllCreatures(): Creature[];
    getCreatureById(id: string): Creature | undefined;
    addCreature(creature: Creature): void;
    getAvailableCreaturesByCapability(capability: CreatureCapability): Creature[];
    updateCreatureAvailability(id: string, available: boolean): boolean;
}
