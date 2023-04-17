# Full Stack Web Scraper - Lexart

## Software Engineering

1. Create a product search engine that connects to the free market and Buscapé (web scrap) page.

- Through a drop-down menu we can choose the categories: Mobile, Refrigerator, TV.

- Through a drop-down menu we can choose the site: Mercado Livre / Buscapé

- Create a free text entry to search for products

- After searching the list of products that will appear on the screen with: Photo, description, category, price and website where the information was obtained

- Store results in database after user search. If you repeat the same search (only take into account the category and web filters to store), show what leaves the base and don't undo it for the webs.

2. Host the solution online on a free server like heroku or some other alternative. 

<p align="right"><a href="#full-stack-web-scraper---lexart">(back to top)</a></p>


<br/>


## About the project
This project is a FullStack application that searches and displays products from Mercado Livre and Buscapé online stores.
Through a drop-down menu, you can:
- Choose between the categories: Mobile, Refrigerator, and TV;
- Choose between the site Mercado Livre and Buscapé to search for the products;
<!-- - Search for a product in the search bar. -->

<p align="right"><a href="#full-stack-web-scraper---lexart">(back to top)</a></p>


<br/>


## Build with
#### Front-end
- ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
- ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
- <img src="https://user-images.githubusercontent.com/102390423/227817511-e68fa9dd-fbb5-42d9-b106-a583fcc7814c.png" alt="axios badge" width="150">

#### Back-end
- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
- ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
- ![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
- ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)

<p align="right"><a href="#full-stack-web-scraper---lexart">(back to top)</a></p>


<br/>


## Installation
1. Clone the repository:
   - Use the command: `git clone git@github.com:Camila-Falaschi/Web_Scraper.git`
   - Navigate to the cloned repository folder: `cd Web_Scraper`

2. Install the dependencies:
   - Run the command `npm install` in the front-end directory (`~/Web_Scraper/front-end`), and back-end directory (`~/Web_Scraper/back-end`).

3. Create the virtual environment for the project and install the dependencies. ([see more](#virtual-environment))

4. You can use this project with Docker. ([see more](#docker))

<p align="right"><a href="#full-stack-web-scraper---lexart">(back to top)</a></p>


<br/>


## Virtual Environment
To create the virtual enviroment you need to have `pip` installed in you computer. You can use the following command to verify you have it installed:
```
python3 -m pip --version
// Return something similar to: pip 21.1.3 from $HOME/.local/lib/python3.9/site-packages (python 3.9)
```

1. **Create and activate the virtual environment**
```bash
python3 -m venv .venv && source .venv/bin/activate
```
2. **Install the dependencies in the virtual environment**
```bash
python3 -m pip install -r dev-requirements.txt
```

<p align="right"><a href="#full-stack-web-scraper---lexart">(back to top)</a></p>


<br/>


## Docker
To start the Docker containers run the command `docker-compose up -d --build` in the root directory (`~/Web_Scraper`). It might take a while.

<p align="right"><a href="#full-stack-web-scraper---lexart">(back to top)</a></p>


<br/>


## Usage
To start the project, follow these steps:
1. Create and configure an `.env` file with your environment variables in the back-end directory. Otherwise, the database configuration will use the default values.
2. Open the front-end terminal(`~/Web_Scraper/front-end`), and back-end terminal (`~/Web_Scraper/back-end`), and run the following command:
- `npm start` - This will start the application.

<p align="right"><a href="#full-stack-web-scraper---lexart">(back to top)</a></p>


<br/>


## `.env` File Example
```
MONGO_DB_URL=mongodb://localhost:27017/WebScraper
```

<p align="right"><a href="#full-stack-web-scraper---lexart">(back to top)</a></p>


<br/>


## API
<details>
  <summary>
    <img src="https://user-images.githubusercontent.com/102390423/229258187-e98c5da1-2ec0-44be-9598-03f84a042d17.png" alt="get icon" width="80">
    (Click here to see more ↴).
  </summary><br>
  
  **Parameters Example Values**
  ```
  {
    "category": "mobile",
    "website": "Buscape"
  }
  ```

  
  <br />


  **Responses**
  
  Status: 200 OK
  ```
    [
        {
            '_id': '507f1f77bcf86cd799439011',
            'img': 'https://i.zst.com.br/thumbs/45/17/34/-747048218.jpg',
            'name': 'Smartphone Xiaomi Redmi Note 12 Pro 5G 256GB Câmera Tripla',
            'price': 'R$ 4.391,10',
            'category': 'Mobile',
            'website': 'Mercado Livre',
        }, 
        {
            '_id': '507f191e810c19729de860ea',
            'img': 'https://i.zst.com.br/thumbs/45/17/34/-747048218.jpg',
            'name': 'Smartphone Samsung Galaxy A54 5G SM-A546E 8GB RAM 128GB Câmera Tripla',
            'price': 'R$ 4.391,10',
            'category': 'Mobile',
            'website': 'Mercado Livre',
        },
        ...
    ]
  ```
  
  Status: 400 Bad Request
  ```
  {
    "message": "Invalid empty fields"
  }
  ```
  ```
  {
    "message": "Invalid fields"
  }
  ```
  
  Status: 404 Not Found
  ```
  {
    "message": "Products not found"
  }
  ```
</details>

<p align="right"><a href="#full-stack-web-scraper---lexart">(back to top)</a></p>
