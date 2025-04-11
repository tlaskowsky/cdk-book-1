// src/models/package.ts

export enum PackageSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
    EXTRA_LARGE = 'extra-large',
  }
  
  export enum PackageRequirement {
    FRAGILE = 'fragile',
    REFRIGERATED = 'refrigerated', // Renamed from TEMPERATURE_CONTROLLED for clarity
    FIREPROOF = 'fireproof',
    WATERPROOF = 'waterproof',
    URGENT = 'urgent',
  }
  
  export interface Package {
    id: string;
    senderId: string;
    recipientId: string;
    weight: number; // in kilograms
    size: PackageSize;
    requirements: PackageRequirement[];
    description: string;
    value?: number; // Made optional, maybe not all packages have declared value
    pickupLocation: {
      latitude: number;
      longitude: number;
      address: string;
    };
    deliveryLocation: {
      latitude: number;
      longitude: number;
      address: string;
    };
    createdAt: Date;
    estimatedDeliveryTime?: Date;
  }