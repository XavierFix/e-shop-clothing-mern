const mongoose = require("mongoose");
const helper = require("./helper/productHelper");

const productSchema = new mongoose.Schema({
    productName: {
        en: helper.productNameObj,
        cn: helper.productNameObj,
        jpn: helper.productNameObj,
    },
<<<<<<< HEAD
    category: {
        en: helper.categoryObj,
        cn: helper.categoryObj,
        jpn: helper.categoryObj,
    },
    gender: {
=======
  ],
  feature: {
    en: helper.featureObj,
    cn: helper.featureObj,
    jpn: helper.featureObj,
  },
  description: {
    en: helper.descriptionObj,
    cn: helper.descriptionObj,
    jpn: helper.descriptionObj,
  },
  style: {
    en: helper.styleObject,
    cn: helper.styleObject,
    jpn: helper.styleObject,
  },

  price: {
    hkd: helper.priceObject,
    jpn: helper.priceObject,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  material: {
    type: String,
    trim: true,
  },
  washing_care: {
    type: String,
    trim: true,
  },
  discount: {
    hkd: helper.discountObject,
    jpn: helper.discountObject,
  },

  size: [
    {
      sizeType: {
>>>>>>> 80770e6 (added image upload in both front and backend, and refactored the create and edit product screen)
        type: String,
        required: true,
<<<<<<< HEAD
      },

      colors: [
        {
          colorHex: {
            type: String,
          },
          color: {
            en: helper.colorObject,
            cn: helper.colorObject,
            jpn: helper.colorObject,
          },
          count: {
            type: Number,
            required: true,
          },
        },
      ],
=======
>>>>>>> ab0aa75 (latest progress)
    },

<<<<<<< HEAD
<<<<<<< HEAD
    image: [
        {
            type: String,
            required: true,
            default: "https://semantic-ui.com/images/wireframe/image.png",
        },
    ],
    feature: {
        en: helper.featureObj,
        cn: helper.featureObj,
        jpn: helper.featureObj,
    },
    description: {
        en: helper.descriptionObj,
        cn: helper.descriptionObj,
        jpn: helper.descriptionObj,
    },
    style: {
        en: helper.styleObject,
        cn: helper.styleObject,
        jpn: helper.styleObject,
    },
=======
  // allColors: [
  //   {
  //     type: String,
  //   },
  // ],
=======
  colors: [{ type: String }],
>>>>>>> 849d31e (added filter for new-arrivals, colors, price, category for men)

  createdAt: {
    type: Date,
    default: Date.now(),
    required: true,
  },
})
>>>>>>> 3efbd08 (filter in the backend)

    price: {
        hkd: helper.priceObject,
        jpn: helper.priceObject,
    },
    ratings: {
        type: Number,
        default: 0,
    },
    material: {
        type: String,
    },
    washing_care: {
        type: String,
    },
    discount: {
        hkd: helper.discountObject,
        jpn: helper.discountObject,
    },

    // size: [
    //     {
    //         sizeType: { type: String, required: true },
    //         count: { type: Number },
    //     },
    // ],

    // colors: [
    //     {
    //         color: { type: String, required: true },
    //         colorHex: { type: String, required: true },
    //     },
    // ],

    size: [
        {
            sizeType: {
                type: String,
                required: true,
            },

            colors: [
                {
                    colorHex: {
                        type: String,
                    },
                    color: {
                        en: helper.colorObject,
                        cn: helper.colorObject,
                        jpn: helper.colorObject,
                    },
                    count: {
                        type: Number,
                        required: true,
                    },
                    image: {
                        type: String,
                        required: true,
                        default:
                            "https://semantic-ui.com/images/wireframe/image.png",
                    },
                },
            ],
        },
    ],

    createdAt: {
        type: Date,
        default: Date.now(),
        required: true,
    },
});

const Product = mongoose.model("products", productSchema);
module.exports = { productSchema, Product };
