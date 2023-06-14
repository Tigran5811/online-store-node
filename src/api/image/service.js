import { ServiceError } from '../../utils/error-handling.js';
import {
    getOneRepository,
    createRepository,
    getAllRepository,
    deleteRepository,
    getImageServiceRepository,
} from './repository.js';

export const getAllService = async () => getAllRepository();

export const getUsersImageService = async (body) => {
    const data = await getImageServiceRepository(['filename']);

    const images = data.map((item) => {
        const id = JSON.stringify(item._id);
        for (let i = 0; i < body.length; i++) {
            if (JSON.stringify(body[i]) === id) {
                return item.filename;
            }
        }
        return undefined;
    });
    const images1 = images.filter((item) => item !== undefined);

    return images1;
};

export const getOneService = async (id) => {
    const gotten = await getOneRepository(id);
    if (!gotten) {
        throw new ServiceError('Image not found', 404);
    }
    return gotten;
};

export const createService = async (file) => createRepository(file);

export const deleteService = async (id) => {
    await getOneService(id);
    return deleteRepository(id);
};
