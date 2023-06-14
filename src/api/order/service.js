import { ServiceError } from '../../utils/error-handling.js';
import {
    getOneRepository,
    createRepository,
    getAllRepository,
    deleteRepository,
} from './repository.js';

export const getAllService = async (userId) => getAllRepository(
    userId,
    ['user', 'laptop', 'display', 'keyboard', 'mouse', 'processor', 'ram'],
   [{ path: 'user', populate: { path: 'image' } },
    { path: 'laptop', populate: { path: 'laptopImage' } },
    { path: 'display', populate: { path: 'image' } },
    { path: 'keyboard', populate: { path: 'image' } },
    { path: 'mouse', populate: { path: 'image' } },
    { path: 'processor', populate: { path: 'image' } },
    { path: 'ram', populate: { path: 'image' } },

],

);

export const getOneService = async (id, userId) => {
    const gotten = await getOneRepository(
        id,
        userId,
        ['user', 'laptop', 'display', 'keyboard', 'mouse', 'processor', 'ram'],
        ['user', 'laptop', 'display', 'keyboard', 'mouse', 'processor', 'ram'],
    );
    if (!gotten) {
        throw new ServiceError('Order not found', 404);
    }
    return gotten;
};

export const createService = async (body) => createRepository(body);

export const deleteService = async (id, userID) => {
    await getOneService(id, userID);
    return deleteRepository(id);
};

export const getAllOrdersByUserService = async (userId) => {
    const users = await getAllRepository(['user', 'laptop', 'display', 'keyboard', 'mouse', 'processor', 'ram'], ['user', 'laptop', 'display', 'keyboard', 'mouse', 'processor', 'ram'], userId);

    return users;
};
