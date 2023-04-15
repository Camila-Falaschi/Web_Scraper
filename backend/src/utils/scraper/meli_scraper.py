from selenium.webdriver import Chrome, ChromeOptions
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from webdriver_manager.chrome import ChromeDriverManager
import time


class Meli_Scraper:
    """
    Creates a new Scraper instance to get data from the Mercado Livre website.

    Attributes
    ----------
    browser_options: <class 'selenium.webdriver.chrome.options.Options'>
        Creates a new instance of ChromeOptions.
    browser_options.headless: bool
        Defines browser options headless to True.
    driver : <class 'selenium.webdriver.chrome.webdriver.WebDriver'>
        Creates a new instance of the Chrome driver.

    Methods
    -------
    scrape_homepage_navbar() -> str
        Returns the URL to the page with the categories list.
    scrape_categories_list(category:str) -> str
        Returns the URL to the page with the categories list.
    """

    def __init__(self):
        self.browser_options = ChromeOptions()
        # self.browser_options.headless = True
        self.driver = Chrome(
            ChromeDriverManager().install(), options=self.browser_options
        )
        self.BASE_URL = "https://lista.mercadolivre.com.br"

    def scrape_homepage_navbar(self) -> str:
        """This function returns the URL to the page with the categories list."""
        
        self.driver.get(self.BASE_URL)
        categories = self.driver.find_element(By.CLASS_NAME, "nav-menu-categories-link")
        return categories.get_attribute("href")


    def scrape_categories_list(self, category:str) -> str:
        """This function returns the URL of the chosen category page."""
        
        category_list_url = self.scrape_homepage_navbar()
        self.driver.get(category_list_url)
        page_url = self.driver.find_element(
            By.XPATH, f"//h3[contains( text( ), '{category}')]"
        ).find_element(By.XPATH, "..").get_attribute("href")
        return page_url

    def get_mobiles(self):
        mobile_url = self.scrape_categories_list("Celulares e Smartphones")
        self.driver.get(mobile_url)
        WebDriverWait(self.driver, 20).until(Chrome.find_element((By.XPATH, "//button[@class='andes-button']")))
        button = self.driver.find_element(By.CLASS_NAME, "andes-button")
        button.find_element(By.XPATH, "..").click()
        
        products = self.driver.find_elements(By.XPATH, "//li[contains(@class, 'ui-search-layout__item')]")
        # self.driver.quit()
        return products

    def get_refrigerator(self):
        pass

    def get_tv(self):
        pass
