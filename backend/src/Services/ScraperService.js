import ScraperODM from "../Models/ScraperODM.js";
import { python } from "pythonia";

const meliScraperFile = await python("../PythonScraper/meli_scraper.py");
const buscapeScraperFile = await python("../PythonScraper/buscape_scraper.py");

/**
 * The meliProducts function creates an instance of the MeliScraper Python
 * class and calls its function according to the requested category.
 * And it returns the list of products scraped from the Mercado Livre website.
 * @param {string} category
 * @returns {Array.<{img: string, name: string, price: string}[]>}
 */
const meliProducts = async (category) => {
  const MeliScraper = await meliScraperFile.MeliScraper();
  if (category === "Mobile") {
    const mobileList = await MeliScraper.get_mobiles();
    python.exit();
    return mobileList;
  }
  if (category === "Refrigerator") {
    const refrigeratorList = await MeliScraper.get_refrigerators();
    python.exit();
    return refrigeratorList;
  }
  if (category === "TV") {
    const tvList = await MeliScraper.get_tv();
    python.exit();
    return tvList;
  }
};

/**
 * The buscapeProducts function creates an instance of the BuscapeScraper
 * Python class and calls its function according to the requested category.
 * And it returns the list of products scraped from the Buscape website.
 * @param {string} category
 * @returns {Array.<{img: string, name: string, price: string}[]>}
 */
const buscapeProducts = async (category) => {
  const BuscapeScraper = await buscapeScraperFile.BuscapeScraper();
  if (category === "Mobile") {
    const mobileList = await BuscapeScraper.get_mobiles();
    python.exit();
    return mobileList;
  }
  if (category === "Refrigerator") {
    const refrigeratorList = await BuscapeScraper.get_refrigerators();
    python.exit();
    return refrigeratorList;
  }
  if (category === "TV") {
    const tvList = await MeliScraper.get_tv();
    python.exit();
    return tvList;
  }
};

/**
 * The "createProducts" function will call the function with the list of
 * scraped products according to the website requested.
 * And it will create an instance of the ScraperODM class and call the
 * Mongoose creat function.
 * Finally, it will return the list of products created in the database.
 * @param {{category: string, website: string}} {category, website}
 * @returns {Array.<{
 * _id: string,
 * img: string,
 * name: string,
 * price: string,
 * category: string,
 * website: string}>}
 */
const createProducts = async ({ category, website }) => {
  let productList = [];
  if (website === "Mercado Livre") {
    const list = await meliProducts(category);
    productList = list;
  }
  if (website === "Buscape") {
    const list = await buscapeProducts(category);
    productList = list;
  }
  const scraperODM = new ScraperODM();
  let newList = [];
  for (const product of productList) {
    const newProduct = await scraperODM.create(product);
    newList.push(newProduct);
  }
  return newList;
};

/**
 * The "getProducts" function will check if there are products
 * in the database with the requested category and site.
 * If yes, it will return the products that are in the database.
 * Otherwise, it will call a function to search for new products,
 * add them to the database, and return them as a new list of products.
 * @param {{category: string, website: string}} reqValues
 * @returns {Array.<{
 * _id: string,
 * img: string,
 * name: string,
 * price: string,
 * category: string,
 * website: string}>}
 */
const getProducts = async (reqValues) => {
  const scraperODM = new ScraperODM();
  const products = await scraperODM.findByQuery(reqValues);

  if (products.length === 0) {
    const newList = await createProducts(reqValues);
    return newList;
  } else {
    return products;
  }
};

export default getProducts;
