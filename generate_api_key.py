import secrets

def generate_random_hex_string(length=32):
    """Generates a random hexadecimal string of the specified length."""

    return secrets.token_hex(length // 2)

# Generate a 32-character hexadecimal string
hex_string = generate_random_hex_string()
print(hex_string)
