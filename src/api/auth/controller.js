import {
  signUpService, signInService, verifyEmailService,
  forgetPasswordService, recoverPasswordService,
} from './service.js';

export const signUpController = async (req, res, next) => {
  try {
      const { body } = req;
      res.send(await signUpService(body));
  } catch (err) {
      next(err);
  }
};

export const signInController = async (req, res, next) => {
  try {
      const { body } = req;

      res.send(await signInService(body));
  } catch (err) {
      next(err);
  }
};

export const verifyEmailController = async (req, res, next) => {
  try {
      await verifyEmailService(req.body);
      res.send({ message: 'Verified' });
  } catch (err) {
      next(err);
  }
};

export const forgetPasswordController = async (req, res, next) => {
  try {
      const { body } = req;
      res.send(await forgetPasswordService(body));
  } catch (err) {
      next(err);
  }
};

export const recoverPasswordController = async (req, res, next) => {
  try {
      const { body } = req;
      res.send(await recoverPasswordService(body));
  } catch (err) {
      next(err);
  }
};
