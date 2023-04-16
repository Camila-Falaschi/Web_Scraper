import { Schema, model, models } from "mongoose";

/**
 * ScraperODM is a class that uses Mongoose to create the project database.
 */
class ScraperODM {
  /**
   * In the constructor is defined:
   * - A Schema that creates the relationship between our MongoDB documents and the Mongoose model;
   * - And the name of the database to be used.
   */
  constructor() {
    this.schema = new Schema({
      img: { type: String, required: true },
      name: { type: String, required: true },
      price: { type: String, required: true },
      category: { type: String, required: true },
      website: { type: String, required: true },
    });
    this.modelName = "Scraper";
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  /**
   * Create a new document with the product data.
   * @param {{
   * img: string,
   * name: string,
   * price: string,
   * category: string,
   * website: string,
   * }} obj
   * @returns {{
   * _id: string
   * img: string,
   * name: string,
   * price: string,
   * category: string,
   * website: string,
   * }}
   */
  async create(obj) {
    return this.model.create({ ...obj });
  }

  /**
   * Find all products that have the same category and website.
   * @param {{
   * category: string,
   * website: string,
   * }}
   * @returns {{
   * _id: string
   * img: string,
   * name: string,
   * price: string,
   * category: string,
   * website: string,
   * }}
   */
  async findByQuery({ category, website }) {
    return this.model.find({ category, website });
  }
}

export default ScraperODM;
