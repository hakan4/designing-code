
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
    constructor({ databaseClient, carFinderQueryFactory, carResponseFactory }) { 
        this.databaseClient = databaseClient;
        this.carFinderQueryFactory = carFinderQueryFactory;
        this.carResponseFactory = carResponseFactory;
    }

    async findCarsForBrand(brand) { 
        const query = this.carFinderQueryFactory.createBrandQuery(brand);
        const response = await this.databaseClient.searchByQuery(query);
        const cars = this.carResponseFactory.createResponse(response);
        return cars;
    }
}


class DatabaseClient { /* code */ }
class CarFinderQueryFactory { /* code */ }
class CarResponseFactory { /* code */ }

const databaseClient = new DatabaseClient({ /* dependencies */ });
const carFinderQueryFactory = new CarFinderQueryFactory({ /* dependencies */ });
const carResponseFactory = new CarResponseFactory({ /* dependencies */ });

const carFinder = new CarFinder({ databaseClient: databaseClient, carFinderQueryFactory: carFinderQueryFactory, carResponseFactory: carResponseFactory });
const carLister = new CarLister({ carFinder: carFinder });

const cars = await carLister.listForBrand('Audi');



/* 
    Inversion of control using awilix
*/

const awilix = require('awailix');

const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY
});
  
container.register({
    config: awilix.asValue(config),
    databaseClient: awilix.asClass(DatabaseClient).singleton(),
    carFinderQueryFactory: awilix.asClass(CarFinderQueryFactory),
    carResponseFactory: awilix.asClass(CarResponseFactory),
    carFinder: awilix.asClass(CarFinder),
    carLister: awilix.asClass(CarLister)
});



const carListerInstance = container.cradle.carLister;
const cars = await carListerInstance.listForBrand('Audi');
