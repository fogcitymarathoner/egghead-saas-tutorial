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
#
# python jprq - ngrok alternative - did not work switching to ngrok.exe
#
# Tutorial suggests installing ngrok globally, I'd rather not, hence python alternative
# which did not work
#
# 1. setup venv
# C:\Users\marc\AppData\Local\Programs\Python\Python311\python.exe -m venv ./venv
# 2. activate venv
# ./venv/scripts/activate
# 3. install jprq
# pip install jprq
# 4. run jprq to forward 3000
# jprq http 3000
#
import requests
# Define the URL
url = 'http://localhost:3000/api/create-stripe-customer'
#url = 'https://4ca8-172-56-47-158.ngrok-free.app/api/create-stripe-customer'

# Define the parameters
# Intercepted datagram from Supabase to Ngrok
"""
    "record": {
        "id": "cd15950e-3413-4409-a092-2f315cc2bf62",
        "interval": null,
        "created_at": "2024-10-03T04:15:18.747722+00:00",
        "is_subscribed": false,
        "stripe_customer_id": null
    }
"""
# Don't forget to change user id
params = {
    'API_ROUTE_SECRET': "1256a38bd2a4995f5067d4eb2fc6aa6e",
    "record": {
        'id': '43067903-0bbb-4c0c-a20e-a6a9e3e8dfc3',
        'email': 'jon@test.com',
        "interval": None,
        "created_at": "2024-10-03T04:15:18.747722+00:00",
        "is_subscribed": False,
        "stripe_customer_id": None
    }
    }
# testing 401 trap
params_bad = {
    'API_ROUTE_SECRET': 'EEE6a38bd2a4995f5067d4eb2fc6aa6e',
    "record": {
        'id': '43067903-0bbb-4c0c-a20e-a6a9e3e8dfc3',
        'email': 'jon@test.com',
        "interval": None,
        "created_at": "2024-10-03T04:15:18.747722+00:00",
        "is_subscribed": False,
        "stripe_customer_id": None
    }

    }


# Send the POST request with parameters, catch 401 error trap
response = requests.post(url, json=params_bad)

# Print the response content
print(response.text)

print(response.status_code)
response = requests.post(url, json=params)

# Print the response content
print(response.text)

print(response.status_code)
