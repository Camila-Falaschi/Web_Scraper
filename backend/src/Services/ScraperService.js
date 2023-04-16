import ScraperODM from "../Models/ScraperODM.js";
import { python } from "pythonia";

// const test = await python("../PythonScraper/test.py");
// const meliScraperFile = await python("../PythonScraper/meli_scraper.py");
// const buscapeScraperFile = await python("../PythonScraper/buscape_scraper.py");

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

const buscapeProducts = async () => {
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

const getProducts = async (reqValues) => {
  const scraperODM = new ScraperODM();
  const products = await scraperODM.findByQuery(reqValues);

  if (products.length === 0) {
    const newList = createProducts(reqValues);
    return newList;
  } else {
    return products;
  }
};

export default getProducts;
