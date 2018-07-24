
class CarListerStrongDependency {
    constructor() { 
        this.carFinder = new CarFinder();
    }

    listForBrand(brand) {
        const cars = this.carFinder.findCarsForBrand(brand);
        return cars;
    }
}


class CarLister {
    constructor({ carFinder }) { 
        this.carFinder = carFinder;
    }

    listForBrand(brand) {
        const cars = this.carFinder.findCarsForBrand(brand);
        return cars;
    }
}

class CarFinder {
    constructor() { }

    findCarsForBrand(brand) { 
        //do something and return the cars
    }
}

module.exports = {
    CarLister, 
    CarFinder
}