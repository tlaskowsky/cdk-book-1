import { Delivery, DeliveryStatus } from '../models/delivery';
import { CreatureService } from './creature-service';
import { PackageService } from './package-service';
export declare class DeliveryService {
    protected deliveries: Delivery[];
    protected creatureService: CreatureService;
    protected packageService: PackageService;
    constructor(creatureService: CreatureService, packageService: PackageService);
    getAllDeliveries(): Delivery[];
    getDeliveryById(id: string): Delivery | undefined;
    createDeliveryRequest(packageId: string): Delivery | undefined;
    updateDeliveryStatus(id: string, status: DeliveryStatus, failureReason?: string): boolean;
}
export declare class PriorityDeliveryService extends DeliveryService {
    createDeliveryRequest(packageId: string): Delivery | undefined;
}
