
//Doing it all in one place

class Cars {
    constructor() { }

    async findCarsForBrand(brand) {
        const database = new Database('localhost:9200');
        const connection = await database.connect();
        const collection = connection.collection();
        const result = await collection.find('cars', { brand: brand });
        const cars = result.map(res => {
            //do some additional extraction of the database results
            return new Cars(/*. data .*/);
        });
        return cars;
    }
}



/*
    Separation of concerns by implementing several classes
*/

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


