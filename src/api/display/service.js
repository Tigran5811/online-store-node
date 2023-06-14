import { ServiceError } from '../../utils/error-handling.js';
import {
    getOneRepository,
    createRepository,
    getAllRepository,
    deleteRepository,
    updateRepository,
} from './repository.js';
import { getOneService as getOneServiceImage } from '../image/service.js';

export const getAllService = async () => getAllRepository(['name', 'brand', 'inch', 'color', 'price', 'image'], ['image']);

export const getOneService = async (id) => {
    const gotten = await getOneRepository(
        id,
        ['name', 'brand', 'inch', 'color', 'price', 'image'],
        ['image'],
    );
    if (!gotten) {
        throw new ServiceError('Display not found', 404);
    }
    return gotten;
};

export const createService = async (body) => {
    const {
        name, brand, color, inch, price, image,
    } = body;
    const getOneImage = await getOneServiceImage(image);
    return createRepository({
        name,
        brand,
        color,
        inch,
        price,
        image: getOneImage.id,
    });
};

export const deleteService = async (id) => {
    await getOneService(id);
    return deleteRepository(id);
};

export const updateService = async (id, body) => {
    await getOneService(id);
    return updateRepository(id, body);
};
