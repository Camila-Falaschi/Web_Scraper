from selenium.webdriver import Chrome, ChromeOptions
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait


class Meli_Scraper:
    """
    Creates a new Scraper instance to get data from the Mercado Livre website.

    Attributes
    ----------
    browser_options : <class 'selenium.webdriver.chrome.options.Options'>
        Creates a new instance of ChromeOptions.
    browser_options.headless : bool
        Defines browser options headless to True.
    driver : <class 'selenium.webdriver.chrome.webdriver.WebDriver'>
        Creates a new instance of the Chrome driver.
    BASE_URL : str
        Mercado Livre home page URL.

    Methods
    -------
    search_products(products:str) -> None
        This function will redirect the current page
        to a page with the results of the products searched
        according to the given term.
    get_data(self, product:WebElement) -> dict
        This function will return a dictionary
        with the product's image, description, and price.
    get_products() -> list[dict]
        Returns dictionaries' list.
        Each dictionary has the data of a product from the results page.
    get_mobiles() -> list[dict]
        Returns dictionaries' list.
        Each dictionary has the data of a mobile phone from the results page.
    get_refrigerators() -> list[dict]
        Returns dictionaries' list.
        Each dictionary has the data of a refrigarator from the results page.
    get_tv() -> list[dict]
        Returns dictionaries' list.
        Each dictionary has the data of a television from the results page.
    """

    def __init__(self):
        self.browser_options = ChromeOptions()
        self.browser_options.headless = True
        self.driver = Chrome(
            ChromeDriverManager().install(), options=self.browser_options
        )
        self.BASE_URL = "https://lista.mercadolivre.com.br"

    def search_products(self, products: str) -> None:
        """This function will redirect the current page
        to a page with the results of the products searched
        according to the given term."""

        self.driver.get(self.BASE_URL)
        search_input = self.driver.find_element(By.CLASS_NAME, "nav-search-input")
        search_button = self.driver.find_element(By.CLASS_NAME, "nav-search-btn")

        search_input.send_keys(products)
        search_button.click()

    def get_data(self, product) -> dict:
        """This function will return a dictionary
        with the product's image, description, and price.

        Parameters
        ----------
        product : WebElement
            Web element
        """

        data = {}
        data["img"] = product.find_element(
            By.XPATH, "//img[contains(@class, 'ui-search-result-image__element')]"
        ).get_attribute("src")
        data["name"] = product.find_element(By.TAG_NAME, "h2").text
        price_symbol = product.find_element(By.CLASS_NAME, "price-tag-symbol").text
        price_value = product.find_element(By.CLASS_NAME, "price-tag-fraction").text
        data["price"] = f"{price_symbol} {price_value}"
        return data

    def get_products(self) -> list[dict]:
        """This function returns a list of all available products
        on the page.
        Each product on the list is a dictionary
        with product's description, photo, and price.
        """

        products_elements = self.driver.find_elements(
            By.XPATH,
            "//div[contains(@class, 'andes-card--default ui-search-result')]",
        )
        products_list = []
        for product in products_elements:
            data = self.get_data(product)
            products_list.append(data)
        return products_list

    def get_mobiles(self) -> list[dict]:
        """This function returns dictionaries' list.
        Each dictionary has the data of a mobile phone from the results page."""

        self.search_products("Celulares e smartphones")
        products_list = self.get_products()
        self.driver.quit()
        return products_list

    def get_refrigerators(self) -> list[dict]:
        """This function returns dictionaries' list.
        Each dictionary has the data of a refrigarator from the results page."""

        self.search_products("Geladeiras")
        products_list = self.get_products()
        self.driver.quit()
        return products_list

    def get_tv(self) -> list[dict]:
        """This function returns dictionaries' list.
        Each dictionary has the data of a television from the results page."""

        self.search_products("Televisores")
        try:
            wait = WebDriverWait(self.driver, 10)
            wait.until(
                EC.presence_of_all_elements_located(
                    (By.CLASS_NAME, "andes-card--default")
                )
            )
            products_list = self.get_products()
            self.driver.quit()
            return products_list
        except:
            self.driver.quit()
            return []
