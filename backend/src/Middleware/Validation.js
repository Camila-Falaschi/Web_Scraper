const categoriesList = ["Mobile", "Refrigerator", "TV"];
const websiteList = ["Mercado Livre", "Buscape"];

/**
 * Check that the request body has no missing fields or wrong values.
 * And if it has, throw a new Error.
 * @param {Request} req 
 * @param {Response} _res 
 * @param {NextFunction} next 
 */
const validateFields = (req, _res, next) => {
  const { category, website } = req.body;
  if (!category || !website) throw new Error("Invalid empty fields");
  const checkCategory = categoriesList.some((element) => element === category);
  if (!checkCategory) throw new Error("Invalid fields");
  const checkWebsite = websiteList.some((element) => element === website);
  if (!checkWebsite) throw new Error("Invalid fields");

  next();
};

export default validateFields;
