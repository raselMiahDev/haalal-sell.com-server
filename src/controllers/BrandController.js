const { AllBrands } = require("../services/ProductService");
const BrandModel = require("../models/BrandModel");
exports.BrandList = async (req, res) => {
  let result = await AllBrands(req);
  return res.status(200).json(result);
};
exports.CreateBrand = async (req, res) => {
  const { brandName, brandImg } = req.body;

  try {
    const brand = await BrandModel.create({
      brandName,
      brandImg,
    });

    return res.status(200).json({
      status: true,
      message: "Brand create success",
      data: brand,
    });
  } catch (error) {
    return res.status(500).json({ error: "Failed to create brand" });
  }
};

// Update Category
exports.UpdateBrand = async (req, res) => {
  const { categoryID, categoryName, categoryImg } = req.body;

  try {
    const category = await BrandModel.findByIdAndUpdate(
      categoryID,
      {
        categoryName,
        categoryImg,
      },
      { new: true }
    );

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    } else {
      return res.status(200).json({ message: "Category updated successfully" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Failed to update category" });
  }
};

// Delete Category
exports.DeleteBrand = async (req, res) => {
  try {
    const id = req.params.id;
    const brandDelete = await BrandModel.findByIdAndDelete({ _id: id });
    if (brandDelete) {
      return { status: true, message: "Delete Success" };
    }
  } catch (err) {
    return [];
  }
};
