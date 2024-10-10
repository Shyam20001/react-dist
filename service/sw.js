// // To support types
// // https://github.com/microsoft/TypeScript/issues/14877
// //declare const self: ServiceWorkerGlobalScope

// import { Hono } from 'https://cdn.jsdelivr.net/npm/hono@latest/dist/hono.js'
// import { handle } from 'https://cdn.jsdelivr.net/npm/hono@4.6.3/dist/adapter/service-worker/handler.js'
// //import { cors } from 'https://cdn.jsdelivr.net/npm/hono@4.6.3/dist/middleware/cors/index.js'

// // templates //
// let staticHtml = `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Image Gallery</title>
//     <style>
//         body {
//             font-family: Arial, sans-serif;
//             margin: 20px;
//         }
//         .gallery {
//             display: flex;
//             flex-wrap: wrap;
//             gap: 10px;
//         }
//         .gallery img {
//             width: 150px; /* Set desired width */
//             height: auto;
//             border-radius: 8px;
//             box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
//         }
//     </style>
// </head>
// <body>
//     <h1>Image Gallery</h1>
//     <div class="gallery">
//         <img src="https://picsum.photos/200/300" alt="Placeholder Image">

//     </div>
// </body>
// </html>
// `

// const service = new Hono().basePath('/service')

// service.get('/home', (c) => c.text('WeB-Service worker is Alive..2'))
// // offline page
// service.get('/home2', async (c) => {
//     try {
//         const response = await fetch('https://raw.githubusercontent.com/Shyam20001/react-dist/refs/heads/master/dist/index.html', { mode: 'cors' });
//         const htmlContent = await response.text();
//         return c.render(htmlContent);
//     } catch (err) {
//         console.error(err);
//         return c.html('<h1>Error loading page</h1>'); // Fallback error response
//     }
// });

// service.get('/home3', async (c) => {

//     return c.html(staticHtml, 200);
// });


// self.addEventListener('fetch', handle(service))

// export default service


////////////////////////////////////////////////


// sw.js

import { Hono } from 'https://cdn.jsdelivr.net/npm/hono@latest/dist/hono.js';
import { handle } from 'https://cdn.jsdelivr.net/npm/hono@4.6.3/dist/adapter/service-worker/handler.js';

// Static HTML template
const staticHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Image Gallery</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        .gallery {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        .gallery img {
            width: 150px; /* Set desired width */
            height: auto;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        }
    </style>
</head>
<body>
    <h1>Image Gallery</h1>
    <div class="gallery">
        <img src="https://picsum.photos/200/300" alt="Placeholder Image">
    </div>
</body>
</html>`;

const staticHtml2 = `<!-- <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anjutha A - Portfolio</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        header {
            text-align: center;
            padding: 50px;
            background: linear-gradient(135deg, #6a11cb, #2575fc);
            color: white;
        }

        h1 {
            margin: 0;
            font-size: 2.5em;
        }

        p {
            font-size: 1.2em;
        }

        .container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            padding: 20px;
        }

        .card {
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            margin: 15px;
            padding: 20px;
            width: 300px;
            transition: transform 0.3s, box-shadow 0.3s;
            position: relative;
            overflow: hidden;
        }

        .card:hover {
            transform: translateY(-10px);
            box-shadow: 0 8px 40px rgba(0, 0, 0, 0.2);
        }

        .card h2 {
            margin-top: 0;
            color: #333;
        }

        .card p {
            color: #555;
        }

        .hover-bg {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(0, 150, 136, 0.7), rgba(0, 150, 136, 0.4));
            opacity: 0;
            transition: opacity 0.3s;
            z-index: 1;
        }

        .card:hover .hover-bg {
            opacity: 1;
        }

        .card-content {
            position: relative;
            z-index: 2;
        }

        footer {
            text-align: center;
            padding: 20px;
            background: #333;
            color: white;
        }

        a {
            color: #2575fc;
            text-decoration: none;
        }

        .linkedin-logo {
            width: 100px;
            vertical-align: middle;
            margin-right: 8px;
        }
    </style>
</head>

<body>

    <header>
        <h1>Anjutha A</h1>
        <p>Java Spring Developer</p>
        <p>Email: <a href="mailto:anjuthaanandh@gmail.com">anjuthaanandh@gmail.com</a> | Phone: +91 87548 99901</p>
    </header>

    <div class="container">
        <div class="card">
            <div class="hover-bg"></div>
            <div class="card-content">
                <h2>Stock Management System</h2>
                <p><strong>Description:</strong> Developed a system for managing stock with CRUD operations using JDBC.
                </p>
                <p><strong>Tools:</strong> Eclipse, MySQL</p>
            </div>
        </div>

        <div class="card">
            <div class="hover-bg"></div>
            <div class="card-content">
                <h2>Weather Forecasting App</h2>
                <p><strong>Description:</strong> Developed an app for Weather Forecasting using AngularJS Framework.</p>
                <p><strong>Tools:</strong> VS Code, JSON</p>
            </div>
        </div>

        <div class="card">
            <div class="hover-bg"></div>
            <div class="card-content">
                <h2>Certifications</h2>
                <p><strong>Core Java</strong>, <br> <strong>Core Web Design</strong>, <br> <strong>Angular JS
                        Framework</strong></p>
            </div>
        </div>
    </div>

    <footer>
        <p>Connect with me on >> <a href="https://www.linkedin.com/in/anjutha-anandhan-9430a4308" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" alt="LinkedIn Logo"
                    class="linkedin-logo"></a>
        </p>
    </footer>

</body>

</html>
 -->


<!-- <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anjutha A - Portfolio</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        header {
            text-align: center;
            padding: 50px;
            background: linear-gradient(135deg, #6a11cb, #2575fc);
            color: white;
        }

        h1 {
            margin: 0;
            font-size: 2.5em;
        }

        p {
            font-size: 1.2em;
        }

        .container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            padding: 20px;
        }

        .card {
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            margin: 15px;
            padding: 20px;
            width: 300px;
            transition: transform 0.3s, box-shadow 0.3s;
            position: relative;
            overflow: hidden;
        }

        .card:hover {
            transform: translateY(-10px);
            box-shadow: 0 8px 40px rgba(0, 0, 0, 0.2);
        }

        .card h2 {
            margin-top: 0;
            color: #333;
        }

        .card p {
            color: #555;
        }

        .hover-bg {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(0, 150, 136, 0.7), rgba(0, 150, 136, 0.4));
            opacity: 0;
            transition: opacity 0.3s;
            z-index: 1;
        }

        .card:hover .hover-bg {
            opacity: 1;
        }

        .card-content {
            position: relative;
            z-index: 2;
        }

        footer {
            text-align: center;
            padding: 20px;
            background: #333;
            color: white;
        }

        a {
            color: white; /* Changed email link color to white */
            text-decoration: none;
            position: relative;
            transition: color 0.3s;
        }

        a:hover {
            color: #2575fc; /* Change color on hover */
        }

        .linkedin-logo {
            width: 100px;
            vertical-align: middle;
            margin-right: 8px;
        }

        /* Responsive Styles */
        @media (max-width: 140px) {
            h1 {
                font-size: 1.2em;
            }

            p {
                font-size: 0.8em;
            }

            .card {
                width: 100%; /* Make cards full width on very small screens */
            }

            footer {
                padding: 10px;
            }
        }

        @media (min-width: 141px) and (max-width: 768px) {
            h1 {
                font-size: 2em;
            }

            p {
                font-size: 1em;
            }

            .card {
                width: 45%; /* Cards take up 45% on medium screens */
            }
        }

        @media (min-width: 769px) {
            .card {
                width: 30%; /* Standard card width for larger screens */
            }
        }
    </style>
</head>

<body>

    <header>
        <h1>Anjutha A</h1>
        <p>Java Spring Developer</p>
        <p>Email: <a href="mailto:anjuthaanandh@gmail.com">anjuthaanandh@gmail.com</a> <br> <br> Phone: +91 87548 99901</p>
    </header>

    <div class="container">
        <div class="card">
            <div class="hover-bg"></div>
            <div class="card-content">
                <h2>Stock Management System</h2>
                <p><strong>Description:</strong> Developed a system for managing stock with CRUD operations using JDBC.</p>
                <p><strong>Tools:</strong> Eclipse, MySQL</p>
            </div>
        </div>

        <div class="card">
            <div class="hover-bg"></div>
            <div class="card-content">
                <h2>Weather Forecasting App</h2>
                <p><strong>Description:</strong> Developed an app for Weather Forecasting using AngularJS Framework.</p>
                <p><strong>Tools:</strong> VS Code, JSON</p>
            </div>
        </div>

        <div class="card">
            <div class="hover-bg"></div>
            <div class="card-content">
                <h2>Certifications</h2>
                <p><strong>Core Java</strong>, <br> <strong>Core Web Design</strong>, <br> <strong>Angular JS Framework</strong></p>
            </div>
        </div>
    </div>

    <footer>
        <p>Connect with me on >> <a href="https://www.linkedin.com/in/anjutha-anandhan-9430a4308" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" alt="LinkedIn Logo" class="linkedin-logo"></a>
        </p>
    </footer>

</body>

</html> -->


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Anjutha A - Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            background: linear-gradient(135deg, #cb11a3, #57fc25);
            margin: 0;
            padding: 0;
            color: #333;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }

        header {
            background: linear-gradient(135deg, #6a11cb, #2575fc);
            color: white;
            text-align: center;
            padding: 60px 20px;
            position: relative;
            overflow: hidden;
        }

        header h1 {
            font-size: 3em;
            margin: 0;
        }

        header p {
            font-size: 1.2em;
            margin: 10px 0;
        }

        nav {
            text-align: center;
            margin: 20px 0;
            font-size: larger;
        }

        nav a {
            margin: 0 15px;
            text-decoration: none;
            color: #000;
            font-weight: bold;
            transition: color 0.3s;
            position: relative;
        }

        nav a:hover {
            color: #ffffff;
        }

        nav a::after {
            content: '';
            display: block;
            height: 2px;
            width: 0;
            background: #ffd700;
            transition: width 0.3s;
            position: absolute;
            bottom: -5px;
            left: 50%;
            transform: translateX(-50%);
        }

        nav a:hover::after {
            width: 100%;
        }

        .nav-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 15px;
        }

        .container {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            justify-content: flex-start;
            padding: 40px 20px;
            gap: 20px;
            align-items: center;
        }

        .card {
            background: white;
            border-radius: 10px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            padding: 20px;
            width: 350px;
            max-width: 400px;
            transition: transform 0.3s, box-shadow 0.3s;
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .card:hover {
            transform: rotateY(10deg);
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
            background: linear-gradient(135deg, #ffdd00, #ff6a00);
        }

        .card h2 {
            color: #6a11cb;
            font-size: 1.5em;
            margin-top: 0;
        }

        .card p {
            color: #555;
        }

        .footer {
            text-align: center;
            padding: 20px;
            background: #333;
            color: white;
        }

        .linkedin-logo {
            width: 100px;
            vertical-align: middle;
            margin-left: 10px;
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
            header h1 {
                font-size: 2.5em;
            }

            header p {
                font-size: 1em;
            }

            nav {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 10px;
            }

            nav a {
                margin: 0; /* Remove side margins for small screens */
            }

            .container {
                align-items: center;
            }

            .card {
                width: 90%; /* Full width on smaller screens */
            }
        }
    </style>
</head>

<body>

    <header>
        <h1>Anjutha A</h1>
        <p>Java Spring Developer</p>
        <p>Email: <a href="mailto:anjuthaanandh@gmail.com">anjuthaanandh@gmail.com</a></p>
        <p>Phone: +91 87548 99901</p>
    </header>

    <nav>
        <div class="nav-container">
<!--             <a href="#objective">Greetings</a> -->
            <a href="#education">Education</a>
            <a href="#skills">Technical Skills</a>
            <a href="#projects">Projects</a>
        </div>
    </nav>

    <div class="container" id="objective">
        <div class="card">
            <h2>Greetings..!!</h2>
            <p>Hi, Anjutha here. I am here to apply my skills in Java and web development in a challenging role as a Java Spring Developer, contributing to innovative projects and achieving organizational goals.</p>
        </div>
    </div>

    <div class="container" id="education">
        <div class="card">
            <h2>Education</h2>
            <p><strong>M.E. in Computer Science and Engineering</strong> (Pursuing, Expected 2025)</p>
            <p><strong>B.E. in Electronics and Communication Engineering</strong>, 2018 (Percentage: 7.73)</p>
            <p><strong>Higher Secondary</strong>, 2014 (Percentage: 91.25)</p>
            <p><strong>Secondary Schooling</strong>, 2012 (Percentage: 95%)</p>
        </div>
    </div>

    <div class="container" id="skills">
        <div class="card">
            <h2>Technical Skills</h2>
            <p><strong>Programming Languages:</strong> Java, OOP Concepts, Multithreading</p>
            <p><strong>Web Development:</strong> HTML, CSS, JavaScript, AngularJS</p>
            <p><strong>Database Management:</strong> Microsoft SQL (DDL, DQL, DML), JDBC, JSON</p>
            <p><strong>Tools:</strong> Eclipse, Visual Studio Code</p>
        </div>
    </div>

    <div class="container" id="projects">
        <div class="card">
            <h2>Stock Management System</h2>
            <p><strong>Description:</strong> Developed a system for managing stock with CRUD operations using JDBC.</p>
            <p><strong>Tools:</strong> Eclipse, MySQL</p>
        </div>

        <div class="card">
            <h2>Weather Forecasting App</h2>
            <p><strong>Description:</strong> Developed an app for Weather Forecasting using AngularJS Framework.</p>
            <p><strong>Tools:</strong> VS Code, JSON</p>
        </div>

        <div class="card">
            <h2>Certifications</h2>
            <p><strong>Core Java</strong>, <br> <strong>Core Web Design</strong>, <br> <strong>Angular JS Framework</strong></p>
        </div>
    </div>

    <footer class="footer">
        <p>Connect with me on >> 
            <a href="https://www.linkedin.com/in/anjutha-anandhan-9430a4308" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" alt="LinkedIn Logo" class="linkedin-logo">
            </a>
        </p>
    </footer>

</body>

</html>

`

// Initialize Hono app with basePath '/service'
const service = new Hono().basePath('/service');

// Define your routes
service.get('/home', (c) => c.text('Web Service Worker is Alive..2'));

service.get('/home2', async (c) => {
    try {
        const response = await fetch('https://raw.githubusercontent.com/Amudhavamshi/anjutha-mistress/refs/heads/main/index.html', { mode: 'cors' });
        const htmlContent = await response.text();
        return c.render(htmlContent);
    } catch (err) {
        console.error(err);
        return c.html('<h1>Error loading page</h1>'); // Fallback error response
    }
});

service.get('/home3', (c) => c.html(staticHtml2, 200));

// Custom fetch event listener with conditional handling
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    if (url.pathname.startsWith('/service/')) {
        console.log('Handling request with Hono:', event.request.url);
        event.respondWith(handle(service)(event));
    } else {
        console.log('Bypassing service worker for:', event.request.url);
        event.respondWith(
            fetch(event.request).catch((error) => {
                console.error('Fetch failed:', error);
                return new Response('Network error occurred', { status: 408 });
            })
        );
    }
});
