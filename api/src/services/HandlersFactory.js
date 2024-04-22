const asyncHandler = require("express-async-handler");
const ApiError = require("../../utils/ApiError");
const ApiFeatures = require("../../utils/ApiFeatures");



exports.DeleteOne = (Model) => asyncHandler(async (req, res, next) => {
    const { id } = req.params;
  
    const document = await Model.findByIdAndDelete(id);
    if (!document) {
      next(new ApiError(`No document for this id : ${id}`, 404));
    } 
     //the middleware "findByIdAndDelete" event when delete document
      res.status(204).send();
    
  });

exports.UpdateOne = (Model) =>  asyncHandler(async (req, res, next) => {

    const document = await Model.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!document) {
      next(new ApiError(`No document for this id : ${req.params.id}`, 404));
    } 
    //Trigger "save" event when update document
    document.save();
      res.status(200).json({ data: document });
    
  });

exports.CreateOne = (Model) => asyncHandler(async (req, res) => {

    const document = await Model.create(req.body);
    res.status(201).json({ data: document });
  });

exports.GetOne = (Model, populationOpt) => asyncHandler(async (req, res, next) => {
    const { id } = req.params;
    //1- build query
    let query =  Model.findById(id);

    if(populationOpt){
     query = query.populate(populationOpt)
    }
    //2-Execute query 
    const document = await query;

    if (!document) {
      next(new ApiError(`No document for this id : ${id}`, 404));
    } else {
      res.status(200).json({ data: document });
    }
  });

exports.GetAll = (Model, Modelname = '') => asyncHandler(async (req, res) => {
    let filter={};
    if(req.filterObj) {filter = req.filterObj}
    //build query
    const documentsCounts = await Model.countDocuments();
    const apiFeatures = new ApiFeatures(Model.find(filter), req.query)
      .paginate(documentsCounts)
      .filter()
      .limitFields()
      .sort()
      .search(Modelname);
  
    //Execute query
    const { mongooseQuery, paginationResult } = apiFeatures;
    const document = await mongooseQuery;
  
    res
      .status(200)
      .json({ results: document.length, paginationResult, data: document });
  });