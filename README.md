# Sumit Bandewar | Executive Portfolio (MERN)

A premium, responsive portfolio website for **Sumit Bandewar, Executive Director at Embel Technologies Pvt. Ltd.**
Built with React (Vite), normal CSS, Node.js, Express and MongoDB Atlas. The contact form saves every message in MongoDB Atlas.

## 1. Features
- Sticky responsive navbar with active-section highlight and mobile menu
- Hero, About, Expertise (7 cards), Featured Technology, Experience timeline, Education, Professional Approach, Contact, Footer
- Contact form with validation (frontend and backend), loading state, success message only after the database save
- Express API with CORS, JSON size limit and rate limiting (10 messages / 15 min / IP)
- Plain CSS only (CSS variables, Flexbox, Grid, media queries). No Tailwind, Bootstrap or UI library

## 2. Technologies
Frontend: React 18, Vite, JavaScript, CSS, Fetch API, lucide-react.
Backend: Node.js, Express, Mongoose, dotenv, cors, express-rate-limit. Database: MongoDB Atlas.

## 3. Folder structure
```
portfolio/
  frontend/
    public/images/            (your two photos)
    src/components/           Navbar, Footer, SectionHeader (+ CSS)
    src/sections/             Hero, About, Expertise, FeaturedTechnology,
                              Experience, Education, ProfessionalApproach, Contact (+ CSS)
    src/App.jsx  src/main.jsx  src/index.css
    .env.example
  backend/
    models/Contact.js         Mongoose schema
    routes/contactRoutes.js   POST /api/contact
    server.js                 Express app + Atlas connection
    .env.example
  .gitignore  README.md
```

## 4. Prerequisites
- Node.js 18 or newer (`node -v`)
- A free MongoDB Atlas account
- Git and VS Code

## 5. MongoDB Atlas setup
1. Sign in at https://www.mongodb.com/atlas and create a free **M0** cluster.
2. **Database Access** → Add New Database User → username + password (Read and write to any database). Save the password.
3. **Network Access** → Add IP Address → **Add Current IP Address** (for local development).
   Do not leave `0.0.0.0/0` (open to everyone) as a permanent production setting.
4. **Database** → Connect → Drivers → copy the connection string:
   `mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority`
   Replace `<user>` and `<password>`, and keep `/portfolio` as the database name.
   If the password has special characters (`@`, `#`, `/`), URL-encode them.

## 6. Environment variables
```bash
# backend
cd backend
cp .env.example .env          # Windows: copy .env.example .env
```
Edit `backend/.env`:
```
PORT=5000
MONGODB_URI=<your Atlas connection string>
FRONTEND_URL=http://localhost:5173
```
```bash
# frontend
cd ../frontend
cp .env.example .env
```
`frontend/.env`: `VITE_API_URL=http://localhost:5000`

`.env` files are in `.gitignore`. Never commit real credentials.

## 7. Run the project (two terminals)
Terminal 1, backend:
```bash
cd backend
npm install        # installs packages
npm run dev        # starts the API with auto-restart (use "npm start" for plain run)
```
You should see: `MongoDB Atlas connected` and `Server running on port 5000`.

Terminal 2, frontend:
```bash
cd frontend
npm install
npm run dev        # opens at http://localhost:5173
```
Production build: `npm run build` (output in `frontend/dist`).

## 8. API documentation
| Method | URL | Purpose |
|---|---|---|
| GET | `/api/health` | Check that the API is running. Returns `{ "success": true, "message": "API is running" }` |
| POST | `/api/contact` | Validate and save a message to MongoDB Atlas |

POST body (JSON): `{ "name", "email", "subject", "message" }`
- `201` saved: `{ "success": true, "message": "..." }`
- `400` invalid: `{ "success": false, "message": "...", "errors": { "email": "..." } }`
- `429` too many requests
- `500` server/database problem (no internal details are returned)

Limits: name 2–100, email valid (max 150), subject 3–150, message 10–2000 characters.

## 9. Testing the contact form
1. Open http://localhost:5000/api/health → you should see the JSON message.
2. Submit the empty form → validation messages appear and nothing is sent.
3. Fill valid details → "Sending..." then the success message.
4. Atlas → Database → Browse Collections → `portfolio` → `contacts`: the message is stored.
5. Stop the backend and submit again → the error message "Could not reach the server..." appears.

## 10. Deployment
1. Push to GitHub (`git init`, `git add .`, `git commit -m "Initial commit"`, create a repo, `git remote add origin <url>`, `git push -u origin main`). Check that `.env` is not included.
2. **Backend** (for example Render, Web Service): root `backend`, build `npm install`, start `npm start`.
   Variables: `MONGODB_URI`, `FRONTEND_URL` (your deployed frontend URL, no trailing slash). Render sets `PORT` itself.
3. **Atlas network access**: add your host's outbound IPs if it provides them. If it does not (many free hosts), `0.0.0.0/0` is the usual temporary workaround. Use a strong DB password, a user limited to this database, and tighten it later.
4. **Frontend** (for example Vercel or Netlify): root `frontend`, build `npm run build`, output `dist`.
   Variable: `VITE_API_URL` = your deployed backend URL. Redeploy after changing it.
5. CORS: `FRONTEND_URL` on the backend must exactly match the frontend origin.
6. Test: open `<backend>/api/health`, then submit the live form and check Atlas.

## 11. Common errors
| Problem | Fix |
|---|---|
| `MONGODB_URI is missing` | Create `backend/.env` from `.env.example` |
| `MongoDB connection failed` / `bad auth` | Check username, password (URL-encode special characters), and that your IP is in Network Access |
| `querySrv ECONNREFUSED` | Network/DNS issue. Try another network or check VPN |
| CORS error in browser console | `FRONTEND_URL` must match the frontend URL exactly |
| Form says "Could not reach the server" | Backend not running, or wrong `VITE_API_URL`. Restart Vite after editing `.env` |
| Port 5000 in use | Change `PORT` in `backend/.env` and `VITE_API_URL` |

## 12. Placeholders to update
- Photos: replace files in `frontend/public/images/` (keep the same names or update the `src`)
- Add the real email or phone only when confirmed (none were supplied, so none are shown)
