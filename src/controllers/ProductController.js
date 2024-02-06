const { CreateWish, RemoveWish, Wish } = require("../services/WishService");
const {
  ProductByRemarks,
  ProductBySlider,
  ProductByCategory,
  ProductByCategoryLimit10,
  ProductByBrand,
  ProductByKeyword,
  DetailsById,
  SuggestionProducts,
  GetAllProducts,
} = require("../services/ProductService");
const { RemoveCart, CreateCart, Cart } = require("../services/CartService");
const ProductDetailModel = require("../models/ProductDetailsModel");

exports.SliderList = async (req, res) => {
  let result = await ProductBySlider(req);
  return res.status(200).json(result);
};

exports.ListByCategory = async (req, res) => {
  let result = await ProductByCategory(req);
  return res.status(200).json(result);
};

exports.ListBySmilier = async (req, res) => {
  let result = await ProductByCategoryLimit10(req);
  return res.status(200).json(result);
};

exports.ListByBrand = async (req, res) => {
  let result = await ProductByBrand(req);
  return res.status(200).json(result);
};

exports.ListByKeyword = async (req, res) => {
  let result = await ProductByKeyword(req);
  return res.status(200).json(result);
};
exports.ListByRemark = async (req, res) => {
  let result = await ProductByRemarks(req);
  return res.status(200).json(result);
};

exports.WishList = async (req, res) => {
  let result = await Wish(req);
  return res.status(200).json(result);
};

exports.CreateWishList = async (req, res) => {
  let result = await CreateWish(req);
  return res.status(200).json(result);
};

exports.RemoveWishList = async (req, res) => {
  let result = await RemoveWish(req);
  return res.status(200).json(result);
};

exports.CartList = async (req, res) => {
  let result = await Cart(req);
  return res.status(200).json(result);
};

exports.CreateCartList = async (req, res) => {
  let result = await CreateCart(req);
  return res.status(200).json(result);
};

exports.RemoveCartList = async (req, res) => {
  let result = await RemoveCart(req);
  return res.status(200).json(result);
};

exports.ListReview = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "ListReview",
  });
};

exports.ProductDetails = async (req, res) => {
  let result = await DetailsById(req);
  return res.status(200).json(result);
};

exports.CreateProductDetails = async (req, res) => {
  let reqBody = req.body;
  let data = await ProductDetailModel.create(reqBody);
  res.status(200).json({ status: "success", data: data });
};
exports.AllProductsList = async (req, res) => {
  let result = await SuggestionProducts();
  return res.status(200).json(result);
};
exports.AllProducts = async (req, res) => {
  let result = await GetAllProducts(req);
  return res.status(200).json(result);
};
