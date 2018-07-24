const chai = require('chai');
const sinonChai = require('sinon-chai');
const sinon = require('sinon');

chai.use(sinonChai);
const expect  = chai.expect;


const { CarLister, CarFinder } = require('../../../lib/concepts/dependency-injection');

describe('CarLister', () => {    
    var carFinderStub;
    
    beforeEach(() => {
        carFinderStub = sinon.createStubInstance(CarFinder);
    });

    describe('List cars by brand', () => {
        it('Calls function listForBrand with brand on carFinder', () => {
            const brand = 'A';
            const carLister = new CarLister({ carFinder: carFinderStub });
            carLister.listForBrand(brand);
            expect(carFinderStub.findCarsForBrand).to.be.calledWithExactly(brand);
        });
    });
});
