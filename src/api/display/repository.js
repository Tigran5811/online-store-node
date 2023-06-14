import { RepositoryError } from '../../utils/error-handling.js';
import { Display } from './models/model.js';

export const getAllRepository = async (projections, populateProps) => {
    try {
        return await Display.find().select(projections).populate(populateProps);
    } catch (err) {
        throw new RepositoryError(err.message, 500);
    }
};

export const getOneRepository = async (id, projections, populateProps) => {
    try {
        return await Display.findOne(
            { _id: id },
            projections,
        ).populate(populateProps);
    } catch (err) {
        throw new RepositoryError(err.message, 500);
    }
};

export const createRepository = async (body) => {
    try {
        const created = new Display(body);
        await created.save();
        return created;
    } catch (err) {
        throw new RepositoryError(err.message, 500);
    }
};

export const deleteRepository = async (id) => {
    try {
        await Display.deleteOne({ _id: id });
        return { id };
    } catch (err) {
        throw new RepositoryError(err.message, 500);
    }
};

export const updateRepository = async (id, body) => {
    try {
        return await Display.updateOne({ _id: id }, body);
    } catch (err) {
        throw new RepositoryError(err.message, 500);
    }
};
