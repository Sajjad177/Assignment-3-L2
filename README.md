## Blog Project Backend Mangement


### 🌐 [Live link to server](https://assignment-3-l2-xi.vercel.app) 🌐

## 📜 Project Overview :

- **Project Concept** :This backend for blog. There a user can write a blog, read any blog. There we handling search by title, filter by any user and sorting by blog upload time.
  <br/>
[Check Explanation Video](https://drive.google.com/file/d/1_zQ0tIDRAXM5bKxpYWkdwVPo1xQm2VJX/view?usp=sharing)

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
## API Endpoint: 
  1. When create user:
      **POST: /api/auth/register**
  2. User and Admin Login:
     **POST: /api/auth/login**
  3. Create Blog:
     **POST: /api/blogs**
  4. Update Blog:
     **PATCH: /api/blogs/:id**
  5. Delete Blog:
     **DELETE: /api/blogs/:id**
  6. Get All Blogs
     **GET: /api/blogs**
     ***There you can also search by title, sort any blog by "title or createAt, sortOrder with asc (ascending) or desc (descending) and also filter by authorId.**
     <br/>
  ## For admin:
  1. Block User:
     **PATCH: /api/admin/users/:userId/block**
  2. Delete Blog:
     **DELETE: /api/admin/blogs/:id**

  ## Authorization
  **You can also check route and see auth gurad some route add for user.SO this route access only user and some route for admin this route only admin can access.**
  **If you test this you add user and admin token in header section** : 
    ```tarminal
        Key : Authorization and add value : Bearer <token>
    ```

