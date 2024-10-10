// To support types
// https://github.com/microsoft/TypeScript/issues/14877
//declare const self: ServiceWorkerGlobalScope

import { Hono } from 'https://cdn.jsdelivr.net/npm/hono@latest/dist/hono.js'
import { handle } from 'https://cdn.jsdelivr.net/npm/hono@4.6.3/dist/adapter/service-worker/handler.js'
//import { cors } from 'https://cdn.jsdelivr.net/npm/hono@4.6.3/dist/middleware/cors/index.js'

// templates //
let staticHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
</html>
`

const service = new Hono().basePath('/service')

service.get('/home', (c) => c.text('WeB-Service worker is Alive..2'))
// offline page
service.get('/home2', async (c) => {
    try {
        const response = await fetch('https://raw.githubusercontent.com/Shyam20001/react-dist/refs/heads/master/dist/index.html', { mode: 'cors' });
        const htmlContent = await response.text();
        return c.render(htmlContent);
    } catch (err) {
        console.error(err);
        return c.html('<h1>Error loading page</h1>'); // Fallback error response
    }
});

service.get('/home3', async (c) => {

    return c.html(staticHtml, 200);
});


self.addEventListener('fetch', handle(service))

export default service