import { v4 as uuid } from 'uuid';
import { Car } from 'src/cars/interfaces/car.interface';

export const CARS_SEED: Car[] = [
    {
        id: uuid(),
        model: 'Corolla',
        brand: 'Toyota',
    },
    {
        id: uuid(),
        model: 'Civic',
        brand: 'Honda',
    },
    {
        id: uuid(),
        model: 'Accord',
        brand: 'Honda',
    },
];
