const express = require("express");
const cors = require("cors");
const { config } = require("../src/configs/server.config");
const { corsConfig } = require("../src/configs/cors.config");
const {
  contact: contactRoute,
} = require("../src/controllers/contact.controllers");

const PORT = config.appPort;
const app = express();

app.use(express.json());

app.use(cors(corsConfig));

app.use("/contact", contactRoute);

app.get("/redirect-to-mail", (req, res) => {
  const to = "shamoilkhan210@gmail.com";
  const subject = encodeURIComponent("Default Subject");
  const body = encodeURIComponent("Hello There! Write your message here.");

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;
  res.redirect(gmailUrl);
});

app.get("*", (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Not Found</title>
    <link rel="icon" type="image/svg+xml" href="https://shamoil-khan.vercel.app/icon.svg" />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Montserrat', sans-serif;
            margin: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            background-image: url('https://shamoil-khan.vercel.app/bg.webp');
            background-size: cover;
            background-position: center;
            color: white;
            position: relative;
        }

        .hero::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.6);
            z-index: -1;
        }

        h1 {
            font-size: 50px;
            margin-bottom: 20px;
        }

        p {
            font-size: 20px;
            margin-bottom: 30px;
        }

        .btn {
            padding: 15px 30px;
            background-color: #007bff;
            color: white;
            border: none;
            font-size: 18px;
            cursor: pointer;
            text-decoration: none;
            border-radius: 3px;
            transition: background-color 0.3s ease;
        }

        .btn:hover {
            background-color: #0056b3;
        }

        .icon {
            width: 100px;
            height: 100px;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <div class="hero">
        <!-- Insert the SVG Icon here -->
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400.000000 400.000000" preserveAspectRatio="xMidYMid meet" style="background-color: transparent; transform:scale(2);">
            <g transform="translate(0.000000,400.000000) scale(0.1,-0.1)" fill="#ffffff" stroke="none">
                <path d="M2824 3046 c-29 -29 -34 -41 -34 -80 0 -36 6 -52 29 -78 26 -29 36 -33 80 -33 41 0 55 5 79 28 78 75 28 197 -81 197 -31 0 -46 -7 -73 -34z"/>
                <path d="M1517 2979 c-21 -5 -60 -18 -86 -30 l-48 -20 5 -72 c6 -92 -10 -169 -53 -255 -35 -68 -118 -162 -168 -188 -26 -14 -27 -15 -13 -49 52 -123 134 -192 364 -307 101 -50 199 -105 218 -123 32 -30 34 -36 34 -96 0 -77 -15 -103 -74 -130 -58 -26 -183 -26 -261 1 -70 24 -175 81 -228 122 -21 17 -40 29 -42 26 -8 -8 -175 -293 -175 -299 0 -10 102 -75 180 -114 133 -67 342 -106 485 -90 49 5 68 11 72 23 28 86 81 159 153 213 60 45 124 67 205 72 60 3 60 3 74 42 8 23 14 82 15 140 1 84 -3 108 -22 149 -12 27 -21 50 -19 52 2 2 133 -147 292 -331 160 -184 295 -335 301 -335 6 0 14 19 18 43 8 48 64 138 101 163 13 9 49 26 79 38 l54 22 -250 283 c-221 250 -248 284 -236 299 7 9 102 122 211 250 l198 234 -39 19 c-21 11 -54 34 -72 52 -36 35 -80 119 -80 155 0 56 -42 15 -306 -299 l-269 -321 -3 321 -2 321 -123 0 c-67 0 -157 7 -200 15 -86 16 -229 18 -290 4z m241 -327 c9 -7 12 -49 10 -175 l-3 -167 -111 54 c-131 65 -174 106 -174 166 0 45 36 95 85 116 33 14 172 19 193 6z"/>
                <path d="M2864 1486 c-29 -29 -34 -41 -34 -80 0 -36 6 -52 29 -78 26 -29 36 -33 80 -33 41 0 55 5 79 28 78 75 28 197 -81 197 -31 0 -46 -7 -73 -34z"/>
            </g>
        </svg>

        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <a href="https://shamoil-khan.vercel.app/" class="btn">Back to Home</a>
    </div>
</body>
</html>

`);
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
