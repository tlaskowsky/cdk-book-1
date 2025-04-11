export declare enum CreatureType {
    DRAGON = "dragon",
    PHOENIX = "phoenix",
    GRIFFIN = "griffin",
    UNICORN = "unicorn",
    PEGASUS = "pegasus"
}
export declare enum CreatureCapability {
    FLYING = "flying",
    FIREPROOF = "fireproof",
    WATERPROOF = "waterproof",
    COLDRESISTANT = "cold-resistant",
    HEAVYLIFTING = "heavy-lifting",
    SPEEDYDELIVERY = "speedy-delivery"
}
export interface Creature {
    id: string;
    name: string;
    type: CreatureType;
    capabilities: CreatureCapability[];
    maxPayloadWeight: number;
    range: number;
    speed: number;
    available: boolean;
    lastLocationUpdate?: Date;
    currentLocation?: {
        latitude: number;
        longitude: number;
    };
}
