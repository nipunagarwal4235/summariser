How to run this project

Step 1: Git clone this repo
https://github.com/nipunagarwal4235/summariser.git

Step 2: Open your terminal and navigate to client and server
cd server
cd summariser-client

Step 3: Install dependencies in both of them
pnpm i

Step 4: Prepare .env files for both

/server .env
MONGODB_URL = ''
JWT_SECRET = ''
NODE_ENV = 'development'
HUGGINGFACE_API_KEY = ''

/summariser-client .env
VITE_BACKEND_URL = 'http://localhost:5000'

Step 5: Sign up and enjoy your summarization
