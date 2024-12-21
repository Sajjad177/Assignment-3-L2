## Blog Project Backend Mangement


### 🌐 [Live link to server](https://github.com/Sajjad177/Assignment-3-L2) 🌐

## 📜 Project Overview :

- **Project Concept** :This backend for blog. There a user can write a blog, read any blog. There we handling search by title, filter by any user and sorting by blog upload time.
  <br/>
[Check Explanation Video](https://drive.google.com/file/d/1beXnhKr5sH8ObgjlYO6XZZElROy6a3M3/view)

## 🛠 Technology Used : 
**TypeScript**, **Mongoose**, **MongoDB**, **Cors**, **dotenv**, **jsonwebtoken**, **eslint**

<br/>

## How to Clone and Run the Project Locally : 

1. **Clone the repository:**
   - First, you need to clone and open your terminal and type:
     ```bash
     git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
     ```
2. **Open files in VS Code:**
   - After opening the **server-side** files in VS Code, install npm dependencies both file:
     ```bash
     npm install
     ```
4. **Environment setup:**
   - In your server side configure environment variables by creating a `.env` file in the root directory. Add the following variables:
     ```plaintext
     PORT=3000
     MONGODB_URI=mongodb:add your mongodb url
     ```
5. **Access the server :**
  - - Check the `tsconfig.json` and check whice command add there.
    1. Live reloading for typescript code : 
    ```tarminal
        npm run start
    ```
    2. The compiled javascript entry point for production environment : 
    ```tarminal
        npm run start:prod
    ```
    3. Runs the TypeScript compiler to transpile TypeScript files into JavaScript files : 
    ```tarminal
        npm run build
    ```
    4. Lints defined coding standards and check error :
    ```tarminal
        npm run lint
    ```
    5. Automatically fix any linting errors :
    ```tarminal
        npm run lint:fix
    ```

     

