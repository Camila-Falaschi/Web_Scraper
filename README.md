# Full Stack Developer Review - Lexart

## Software Engineering

1. Create a product search engine that connects to the free market and Buscapé (web scrap) page.

- Through a drop-down menu we can choose the categories: Mobile, Refrigerator, TV.

- Through a drop-down menu we can choose the site: Mercado Livre / Buscapé

- Create a free text entry to search for products

- After searching the list of products that will appear on the screen with: Photo, description, category, price and website where the information was obtained

- Store results in database after user search. If you repeat the same search (only take into account the category and web filters to store), show what leaves the base and don't undo it for the webs.

2. Host the solution online on a free server like heroku or some other alternative. 

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

## Docker
To start the Docker containers run the command `docker-compose up -d --build` in the root directory (`~/web_scraper`). It might take a while.

## `.env` File Example
```
MONGO_DB_URL=mongodb://localhost:27017/WebScraper
```

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
            'img': 'https://i.zst.com.br/thumbs/45/17/34/-747048218.jpg',
            'name': 'Smartphone Xiaomi Redmi Note 12 Pro 5G 256GB Câmera Tripla',
            'price': 'R$ 4.391,10'
        }, 
        {
            'img': 'https://i.zst.com.br/thumbs/45/17/34/-747048218.jpg',
            'name': 'Smartphone Samsung Galaxy A54 5G SM-A546E 8GB RAM 128GB Câmera Tripla',
            'price': 'R$ 4.391,10'
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
  
  Status: 404 Not Found
  ```
  {
    "message": "Products not found"
  }
  ```
</details>
