"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageService = void 0;
// Adjust import path if needed
class PackageService {
    constructor(initialPackages = []) {
        this.packages = [];
        this.packages = initialPackages;
    }
    getAllPackages() {
        return this.packages;
    }
    getPackageById(id) {
        return this.packages.find(pkg => pkg.id === id);
    }
    addPackage(pkg) {
        if (!this.getPackageById(pkg.id)) {
            this.packages.push(pkg);
        }
        else {
            console.warn(`Package with ID ${pkg.id} already exists.`);
        }
    }
    getPackagesByRequirement(requirement) {
        return this.packages.filter(pkg => pkg.requirements.includes(requirement));
    }
    updateEstimatedDeliveryTime(id, estimatedDeliveryTime) {
        const pkg = this.getPackageById(id);
        if (pkg) {
            pkg.estimatedDeliveryTime = estimatedDeliveryTime;
            return true;
        }
        return false;
    }
}
exports.PackageService = PackageService;
