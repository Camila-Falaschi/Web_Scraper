const scraperService = require("../Services/ScraperService");

/**
 * Returns a successful response (status 200) with the product data as an array of objects.
 * @param {Request} req
 * @param {Response} res
 */
const getProducts = async (req, res) => {
  const products = await scraperService.getProducts(req.body);
  return res.status(200).json(products);
};

export default getProducts;
