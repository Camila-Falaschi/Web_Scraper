import requests
import time


def fetch(url):
    HEADERS = {
        "user-agent": (
            "Mozilla/5.0 (X11; Linux x86_64) "
            "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 "
            "Safari/537.36"
        ),
    }

    try:
        response = requests.get(url, headers=HEADERS, timeout=3)
        response.raise_for_status()
        time.sleep(1)
    except (requests.HTTPError, requests.ReadTimeout):
        return None

    return response.text
