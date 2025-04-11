// src/services/package-service.ts
import { Package, PackageSize, PackageRequirement } from '../models/package';
// Adjust import path if needed

export class PackageService {
  private packages: Package[] = [];

  constructor(initialPackages: Package[] = []) {
    this.packages = initialPackages;
  }

  getAllPackages(): Package[] {
    return this.packages;
  }

  getPackageById(id: string): Package | undefined {
    return this.packages.find(pkg => pkg.id === id);
  }

  addPackage(pkg: Package): void {
    if (!this.getPackageById(pkg.id)) {
        this.packages.push(pkg);
    } else {
        console.warn(`Package with ID ${pkg.id} already exists.`);
    }
  }

  getPackagesByRequirement(requirement: PackageRequirement): Package[] {
    return this.packages.filter(pkg => pkg.requirements.includes(requirement));
  }

  updateEstimatedDeliveryTime(id: string, estimatedDeliveryTime: Date): boolean {
    const pkg = this.getPackageById(id);
    if (pkg) {
      pkg.estimatedDeliveryTime = estimatedDeliveryTime;
      return true;
    }
    return false;
  }
}