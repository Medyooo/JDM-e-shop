const mongoose = require("mongoose");

// 1-Create schema
const CategorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Category name is required'],
        unique: [true, 'Category name  must be unique'],
        minlength: [3, 'too short category name'],
        maxlength: [30, 'too long category name'],

    },

  slug:{
    type: String,
    lowercase: true,
    
  },

  image:{
    type: String,
  },
},
{ timestamps: true }
);

const SetImageUrl = (doc) => {
  if(doc.image) {
    const imageUrl = `${process.env.BASE_URL}/categories/${doc.image}`
    doc.image = imageUrl;
  }
}

// GetOne, GetAll and Update
CategorySchema.post('init', (doc) => {
   SetImageUrl(doc);
})

// Create
CategorySchema.post('save', (doc) => {
  SetImageUrl(doc);
})

//2-Create model
const CategoryModel = mongoose.model('Category', CategorySchema);

module.exports = CategoryModel;