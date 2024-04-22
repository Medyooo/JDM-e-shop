const mongoose = require("mongoose");

// 1-Create schema
const ProductSchema = new mongoose.Schema({
   
    title: {
        type: String,
        required: [true, 'Product title is required'],
        trim: true,
        minlength: [3, 'too short product title'],
        maxlength: [100, 'too long product title'],
    },

    slug:{
        type: String,
        required: true,
        lowercase: true,
    },

    description: {
        type: String,
        required: [true, 'Product description is required'],
        minlength: [20, 'too short product description'],
        maxlength: [2000, 'too long product description'],
    },

    quantity:{
        type: Number,
        required:[true, 'Product quantity is required'],
    },

    sold:{
        type: Number,
        default: 0,
    },

    price: {
        type: Number,
        required: [true,'Product price is required'],
        trim: true,
        max:[200000,'too long product price'],
    },

    priceAfterDiscount: {
        type:Number,
    },

    imageCover: {
        type: String,
        required: [true,'Product image cover is required']
    },

    images: [String], 

    category:{
        type: mongoose.Schema.ObjectId,
        ref: 'Category',
        required: [true,"Product must be belong to category"],
  },

    subcategories:[
        {
        type: mongoose.Schema.ObjectId,
        ref:'SubCategory',
        },
    ],

    brand: {
        type: mongoose.Schema.ObjectId,
        ref:'Brand',
   },

    ratingsAverage:{
        type: Number,
        min:[1,'Rating must be above or equal to 1.0'],
        max:[5,'Rating must be below or equal to 5.0'],
    },

    ratingsQuantity: {
        type: Number,
        default: 0,
    }
},
{ timestamps: true,
    //to anable virtual populate
    toJSON: {virtuals: true},
    toObject:{virtuals: true} }
);

const SetImageUrl = (doc) => {
    if(doc.imageCover) {
      const ImageUrl = `${process.env.BASE_URL}/products/${doc.imageCover}`
      doc.imageCover = ImageUrl;
    }
    if(doc.images) {
        const Images = [];
        doc.images.forEach((image) => {
           const ImageUrl = `${process.env.BASE_URL}/products/${image}`
           Images.push(ImageUrl);
        })
        doc.images = Images;
      }
  }
  
  // GetOne, GetAll and Update
  ProductSchema.post('init', (doc) => {
     SetImageUrl(doc);
  })
  
  // Create
  ProductSchema.post('save', (doc) => {
    SetImageUrl(doc);
  })

ProductSchema.pre(/^find/, function (next) {
    this.populate({
      path: 'category',  
      select: 'name',
    });
    next();
});

ProductSchema.virtual("reviews", {
    ref: "Review",
    foreignField: "product",
    localField: "_id"
})

//2-Create model
const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = ProductModel;