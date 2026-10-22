1. fist install vite.
2. axios: axios handles web request like fetch api. but it is better than fetch api. (command: npm i axios)
   Axios is a popular, open-source promise-based JavaScript library used to make asynchronous HTTP requests from web browsers or Node.js environments.
3. added proxy on vite.config.ts file to remove CORS error. proxy is important to tell server the url path, which will allow. Browser stops those links which has no permission.
   Another option for CORS error is whitelisting on server.
4. command: npm run build = it creates a dist folder of our all frontend which we have completed. then move dist folder to backend folder and use middleware in server.js file of backend folder. But it is bad practice because if we change anything in our frontend folder then we have to repeat the whole process again ( to move dist folder into backend folder ). But is is Cost saving trick.
