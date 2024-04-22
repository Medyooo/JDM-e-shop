const mongoose = require("mongoose");

// 1-Create schema
const BrandSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Brand name is required'],
        unique: [true, 'Brand name must be unique'],
        minlength: [3, 'too short Brand name'],
        maxlength: [30, 'too long Brand name'],

    },

  slug:{
    type: String,
    lowercase: true,
    
  },

  image:String,

},
{ timestamps: true }
);

const SetImageUrl = (doc) => {
  if(doc.image) {
    const imageUrl = `${process.env.BASE_URL}/brands/${doc.image}`
    doc.image = imageUrl;
  }
}

// GetOne, GetAll and Update
BrandSchema.post('init', (doc) => {
   SetImageUrl(doc);
})

// Create
BrandSchema.post('save', (doc) => {
  SetImageUrl(doc);
})
//2-Create model
const BrandModel = mongoose.model('Brand', BrandSchema);

module.exports = BrandModel;