const { Shop, Product, User } = require("../models");
const ApiError = require("../utils/apiError");

const createShop = async (req, res, next) => {
  const { name } = req.body;

  try {
    // Buat toko baru
    const newShop = await Shop.create({
      name,
    });

    res.status(201).json({
      status: "Success",
      data: newShop,
    });
  } catch (err) {
    next(new ApiError(err.message, 500));
  }
};

const findShop = async (req, res, next) => {
  try {
    const shops = await Shop.findAll();

    res.status(200).json({
      status: "success",
      data: {
        shops,
      },
    });
  } catch (error) {
    next(new ApiError(error.message, 400));
  }
};

const findShopById = async (req, res, next) => {
  try {
    const shop = await Shop.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!shop) {
      next(new ApiError("Shop not found", 404));
    }

    res.status(200).json({
      status: "Success",
      data: {
        shop,
      },
    });
  } catch (error) {
    next(new ApiError(error.message, 400));
  }
};

const updateShop = async (req, res, next) => {
  const { name } = req.body;
  try {
    const shop = await Shop.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!shop) {
      next(new ApiError("Shop not found", 404));
    }
    await Shop.update(
      {
        name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).json({
      status: "success",
      message: "Shop updated",
    });
  } catch (error) {
    next(new ApiError(error.message, 400));
  }
};

const deleteShop = async (req, res, next) => {
  try {
    const shop = await Shop.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!shop) {
      next(new ApiError("Shop not found", 404));
    }

    await Shop.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({
      status: "success",
      message: "Shop deleted",
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

module.exports = {
  createShop,
  findShop,
  findShopById,
  updateShop,
  deleteShop,
};
