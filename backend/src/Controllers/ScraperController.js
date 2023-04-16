const scraperService = require("../Services/ScraperService")

const getProducts = async (req, res) => {
  const products = await scraperService.getProducts(req.body);
  return res.status(200).json(products);
};

export default getProducts;
