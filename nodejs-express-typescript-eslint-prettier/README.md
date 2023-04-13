# Other dev dependencies
    "@types/bcrypt": "^5.0.0",
    "@types/cookie-parser": "^1.4.3",
    "@types/jsonwebtoken": "^9.0.1",
    "cookie-parser": "^1.4.6",
    "body-parser": "^1.20.2",
    "bcrypt": "^5.1.0",
    "@types/lodash": "^4.14.191",
# Other dependencies
    "mongoose": "^6.10.0",
    "lodash": "^4.17.21",
    "jsonwebtoken": "^9.0.0",
# Test script
    "test": "echo \"Error: no test specified\" && exit 1",

# (put this in index.ts)
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import urls from './config/urls.js';

dotenv.config();
const app = express();

// INITIALIZATION CONNECTION
    try {
      app.listen(urls.port, () =>
        console.log(`[server]: Server is running at http://localhost:${urls.port}`),
      );
    } catch (e: any) {
      console.log("Can't connect to the server. " + e.message);
    }


// MIDDLEWARES
app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
const corsOptions = {
  origin: process.env.CLIENT,
  optionsSuccessStatus: 200,
  credentials: true,
};
app.use(cors(corsOptions));
// app.use(cookieParser());

// ROUTES