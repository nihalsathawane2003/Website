import pyotp

# Create a TOTP object
totp_secret = pyotp.random_base32()  # Generate a random secret key
totp = pyotp.TOTP(totp_secret)

# Generate the current OTP
current_otp = totp.now()

print("Secret Key:", totp_secret)
print("Current OTP:", current_otp)