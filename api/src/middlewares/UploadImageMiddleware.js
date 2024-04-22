const Multer = require("multer");

const ApiError = require('../../utils/ApiError');

const MulterOptions = () => {
  const MulterStorage = Multer.memoryStorage();

const MulterFilter =  function (req, file, cb){
    if(file.mimetype.startsWith('image')){ // Correction ici
        cb(null, true);
    }else{
        cb(new ApiError('Only Image allowed', 400), false)
    }
}
const Upload = Multer({storage: MulterStorage, fileFilter: MulterFilter});
 
return Upload
}

exports.UploadSingleImage = (FieldName) => MulterOptions().single(FieldName);

exports.UploadMixOfImages = (ArrayOfFields) => MulterOptions().fields(ArrayOfFields);
