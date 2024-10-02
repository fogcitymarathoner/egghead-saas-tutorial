
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
    'email': 'jon@test.com'
    }


# Send the GET request with parameters
response = requests.get(url, params=params)

# Print the response content
print(response.text)
