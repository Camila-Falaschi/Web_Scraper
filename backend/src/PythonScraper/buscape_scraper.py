from selenium.webdriver import Chrome, ChromeOptions
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.wait import WebDriverWait


class Buscape_Scraper:
    """
    Creates a new Scraper instance to get data from the Buscapé website.

    Attributes
    ----------
    browser_options : <class 'selenium.webdriver.chrome.options.Options'>
        Creates a new instance of ChromeOptions.
    browser_options.headless : bool
        Defines browser options headless to True.
    driver : <class 'selenium.webdriver.chrome.webdriver.WebDriver'>
        Creates a new instance of the Chrome driver.
    BASE_URL : str
        Buscapé home page URL.

    Methods
    -------
    search_products(products:str) -> None
        This function will redirect the current page
        to a page with the results of the products searched
        according to the given term.
    get_data(self, product:WebElement) -> dict
        This function will return a dictionary
        with the product's image, description, and price.
    get_products(page_url: str) -> list[dict]
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
        self.BASE_URL = "https://www.buscape.com.br/"

    def search_products(self, products: str) -> None:
        """This function will redirect the current page
        to a page with the results of the products searched
        according to the given term."""

        self.driver.get(self.BASE_URL)
        category_button = self.driver.find_element(
            By.XPATH,
            f"//a[contains(@data-testid, 'hotlink-item') and contains(@title, {products})]",
        ).get_attribute("href")

        return category_button

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
            By.XPATH, "//img[contains(@data-nimg, 'fill')]"
        ).get_attribute("src")
        data["name"] = product.find_element(By.TAG_NAME, "h2").text
        data["price"] = product.find_element(
            By.XPATH, "//p[contains(@data-testid, 'product-card::price')]"
        ).text
        return data

    def get_products(self, page_url: str) -> list[dict]:
        """This function returns a list of all available products
        on the page.
        Each product on the list is a dictionary
        with product's description, photo, and price.
        """

        self.driver.get(page_url)
        products_elements = self.driver.find_elements(
            By.XPATH,
            "//div[contains(@class, 'SearchCard_ProductCard__1D3ve')]",
        )
        products_list = []
        for product in products_elements:
            data = self.get_data(product)
            products_list.append(data)
        return products_list

    def get_mobiles(self) -> list[dict]:
        """This function returns dictionaries' list.
        Each dictionary has the data of a mobile phone from the results page."""

        mobile_page = self.search_products("Celular")
        products_list = self.get_products(mobile_page)
        self.driver.quit()
        return products_list

    def get_refrigerators(self) -> list[dict]:
        """This function returns dictionaries' list.
        Each dictionary has the data of a refrigarator from the results page."""

        refrigarator_page = self.search_products("Geladeira")
        products_list = self.get_products(refrigarator_page)
        self.driver.quit()
        return products_list

    def get_tv(self) -> list[dict]:
        """This function returns dictionaries' list.
        Each dictionary has the data of a television from the results page."""

        tv_page = self.search_products("TV")
        products_list = self.get_products(tv_page)
        self.driver.quit()
        return products_list
