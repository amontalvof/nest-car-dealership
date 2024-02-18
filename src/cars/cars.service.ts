import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
    private readonly cars = [
        { id: 0, name: 'Toyota', model: 'Corolla', year: 2015 },
        { id: 1, name: 'BMW', model: 'X5', year: 2018 },
        { id: 2, name: 'Ford', model: 'Fusion', year: 2016 },
        { id: 3, name: 'Audi', model: 'A4', year: 2017 },
        { id: 4, name: 'Mercedes', model: 'C-Class', year: 2019 },
        { id: 5, name: 'Lexus', model: 'RX', year: 2020 },
    ];

    findAll() {
        return this.cars;
    }

    findOneById(id: number) {
        const car = this.cars.find((item) => item.id === id);
        if (!car) {
            throw new NotFoundException(`Car with id ${id} not found`);
        }
        return car;
    }
}
