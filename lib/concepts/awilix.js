
class CarFinder {
    constructor(carDatabase, carFinderQueryFactory, carResponseFactory) { 
        this.carDatabase = carDatabase;
        this.carFinderQueryFactory = carFinderQueryFactory;
        this.carResponseFactory = carResponseFactory;
    }
}

class CarFinder {
    constructor(proxy) { 
        this.carDatabase = proxy.carDatabase;
        this.carFinderQueryFactory = proxy.carFinderQueryFactory;
        this.carResponseFactory = proxy.carResponseFactory;
    }
}

class CarFinder {
    constructor({ carDatabase, carFinderQueryFactory, carResponseFactory }) { 
        this.carDatabase = carDatabase;
        this.carFinderQueryFactory = carFinderQueryFactory;
        this.carResponseFactory = carResponseFactory;
    }
}


/*
Register the classes with an awilix container
*/


const carListerInstance = container.cradle.carLister;
const cars = await carListerInstance.listForBrand('Audi');