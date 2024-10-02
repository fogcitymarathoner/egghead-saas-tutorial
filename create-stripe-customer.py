# python location
#
#   C:\Users\marc\AppData\Local\Programs\Python\Python311\python.exe -m idlelib
#
## doing pip install here to deal with issues with multiple python installations
##import subprocess
##import sys
##
##def install(package):
##    subprocess.check_call([sys.executable, "-m", "pip", "install", package])
##install('requests')
import requests
# Define the URL
url = 'http://localhost:3000/api/create-stripe-customer'


# Define the parameters
params = {
    'email': 'jon@test.com',
    'id': '43067903-0bbb-4c0c-a20e-a6a9e3e8dfc3'
    }


# Send the GET request with parameters
response = requests.get(url, params=params)

# Print the response content
print(response.text)
