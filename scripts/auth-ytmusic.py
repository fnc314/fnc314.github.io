import os
from ytmusicapi import YTMusic

def main():
    print("Starting YouTube Music OAuth setup...")
    print("This will open a browser window for you to authenticate with Google.")
    
    # Ensure functions-python directory exists
    os.makedirs("functions-python", exist_ok=True)
    
    auth_file = "functions-python/oauth.json"
    
    print(f"The credentials will be saved to: {auth_file}")
    
    YTMusic.setup(filepath=auth_file)
    
    print(f"\nAuthentication successful! {auth_file} has been created.")
    print("Remember to NOT commit this file to source control.")

if __name__ == "__main__":
    main()
