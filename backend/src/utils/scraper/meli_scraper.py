from selenium.webdriver import Chrome, ChromeOptions
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager


BASE_URL = "https://lista.mercadolivre.com.br"
DRIVER_PATH = '/path/to/chromedriver'

def scrape_tecnology_category():
    browser_options = ChromeOptions()
    driver = Chrome(ChromeDriverManager().install(), options=browser_options)
    driver.get(BASE_URL)
    
    categories = driver.find_element(By.CLASS_NAME, "nav-menu-categories-link")
    return categories.get_attribute("href")
    
def get_mobiles():
    pass
    
def get_refrigerator():
    pass
    
    
def get_tv():
    pass
    