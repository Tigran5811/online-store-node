import {
  createService,
  getOneService,
  getAllService, deleteService,
  getUsersImageService,
} from './service.js';

export const getAllController = async (req, res, next) => {
  try {
    const images = await getAllService();
    res.send(images);
  } catch (err) {
    next(err);
  }
};
export const getUsersImageController = async (req, res, next) => {
  try {
    const { images } = req.body;
    const imagesId = await getUsersImageService(images);
    res.send(imagesId);
  } catch (err) {
    next(err);
  }
};

export const getOneController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const image = await getOneService(id);
    res.send(image);
  } catch (err) {
    next(err);
  }
};

export const createController = async (req, res, next) => {
  try {
    const created = await createService(req.file);
    res.send(created);
  } catch (err) {
    next(err);
  }
};

export const deleteController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await deleteService(id);
    res.send(deleted);
  } catch (err) {
    next(err);
  }
};
