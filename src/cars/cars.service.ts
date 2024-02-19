import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
    private cars: Car[] = [
        { id: uuid(), brand: 'Toyota', model: 'Corolla' },
        { id: uuid(), brand: 'BMW', model: 'X5' },
        { id: uuid(), brand: 'Ford', model: 'Fusion' },
        { id: uuid(), brand: 'Audi', model: 'A4' },
        { id: uuid(), brand: 'Mercedes', model: 'C-Class' },
        { id: uuid(), brand: 'Lexus', model: 'RX' },
    ];

    findAll() {
        return this.cars;
    }

    findOneById(id: string) {
        const car = this.cars.find((item) => item.id === id);
        if (!car) {
            throw new NotFoundException(`Car with id ${id} not found`);
        }
        return car;
    }

    create(createCarDto: CreateCarDto) {
        const car: Car = { id: uuid(), ...createCarDto };
        this.cars.push(car);
        return car;
    }

    update(id: string, updateCarDto: UpdateCarDto) {
        let carDB = this.findOneById(id);

        if (updateCarDto.id && updateCarDto.id !== id) {
            throw new BadRequestException(
                `Car id ${updateCarDto.id} and URL id ${id} do not match.`,
            );
        }

        this.cars = this.cars.map((item) => {
            if (item.id === id) {
                carDB = { ...item, ...updateCarDto, id };
                return carDB;
            }
            return item;
        });
        return carDB;
    }

    delete(id: string) {
        const car = this.findOneById(id);
        this.cars = this.cars.filter((item) => item.id !== car.id);
        return car;
    }
}
