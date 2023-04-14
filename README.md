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
# Return something similar to: pip 21.1.3 from $HOME/.local/lib/python3.9/site-packages (python 3.9)
```

1. **Create and activate the virtual environment**
```bash
python3 -m venv .venv && source .venv/bin/activate
```
2. **Install the dependencies in the virtual environment**
```bash
python3 -m pip install -r dev-requirements.txt
```

