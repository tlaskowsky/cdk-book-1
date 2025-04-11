import { Package, PackageRequirement } from '../models/package';
export declare class PackageService {
    private packages;
    constructor(initialPackages?: Package[]);
    getAllPackages(): Package[];
    getPackageById(id: string): Package | undefined;
    addPackage(pkg: Package): void;
    getPackagesByRequirement(requirement: PackageRequirement): Package[];
    updateEstimatedDeliveryTime(id: string, estimatedDeliveryTime: Date): boolean;
}
