import Job from "../models/job.model";
import { errorHandler } from "../utils/error";
export const create = async (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(errorHandler(403, "You are not allowed to create a job"));
  }
  if (!req.body.title || !req.body.description) {
    return next(errorHandler(400, "Please provide all required fields"));
  }

  const newJob = new Job({
    ...req.body,
  });
  try {
    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (error) {
    next(error);
  }
};

export const getJobs = async (req, res, next) => {};

export const deleteJobs = async (req, res, next) => {};
