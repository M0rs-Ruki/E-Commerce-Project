<h1>E-Commerce Website 🛒</h1>

<p>
  This is a full-stack E-Commerce web application built as a weekly personal project using the MERN stack principles. It supports user authentication, product creation, and an admin dashboard with secure routes and flash messaging.
</p>

<h2>🚀 Live Demo</h2>
<p>
  👉 <a href="https://youtu.be/9Gy-RGJuCXk"_blank">Watch Demo Video</a><br>
  <em>(Includes features overview and tech walkthrough)</em>
</p>

<h2>🛠️ Technologies Used</h2>
<ul>
  <li><strong>Node.js</strong> & <strong>Express.js</strong> (v5.1.0) – backend framework</li>
  <li><strong>MongoDB</strong> with <strong>Mongoose</strong> (v8.16.0) – database layer</li>
  <li><strong>EJS</strong> – server-side templating engine</li>
  <li><strong>Multer</strong> – file handling (for future image/product uploads)</li>
  <li><strong>Bcrypt</strong> – password hashing</li>
  <li><strong>JWT (jsonwebtoken)</strong> – token-based authentication</li>
  <li><strong>Express-session</strong> + <strong>connect-flash</strong> – session-based messaging</li>
  <li><strong>Dotenv</strong> – environment variable management</li>
  <li><strong>Cookie-parser</strong> – to handle user cookies</li>
</ul>

<h2>📁 Project Structure</h2>
<ul>
  <li><code>/src/routes</code> – all route files (e.g. owners, products, auth)</li>
  <li><code>/views</code> – EJS view templates</li>
  <li><code>/models</code> – Mongoose schema models</li>
  <li><code>/public</code> – static assets like CSS/JS/images</li>
</ul>

<h2>✅ Features</h2>
<ul>
  <li>🔐 Owner (admin) registration and login</li>
  <li>🛍️ Product creation from admin panel</li>
  <li>📦 Product display pages</li>
  <li>📂 Flash messages for errors and success</li>
  <li>⚙️ Middleware-protected routes</li>
  <li>🎯 Clean, modular file structure</li>
</ul>

<h2>🧪 How to Run Locally</h2>

<pre><code>
git clone https://github.com/M0rs-Ruki/E-Commerce-Project.git
cd E-Commerce-Project
npm install
npm run dev
</code></pre>

<p>
  Make sure you add your own <code>.env</code> file with the following variables:
</p>

<pre><code>
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
</code></pre>

<h2>📹 Demo Preview</h2>
<p>
  A short demo video showing core features is available in the repo. Feel free to check it out and explore the flow!
</p>

<h2>🤝 Contributions</h2>
<p>
  This is a learning project. Suggestions, improvements, and ideas are welcome!
</p>

<h2>📩 Contact</h2>
<p>
  Created by <strong>M0rs-Ruki</strong><br>
  👉 <a href="https://github.com/M0rs-Ruki" target="_blank">GitHub Profile</a>
</p>
