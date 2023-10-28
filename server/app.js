import express from "express";
import session from "express-session";
// import path, { dirname } from "path";
// import { fileURLToPath } from "url";

// const store = new session.MemoryStore();
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

// app,
//   use(
//     session({
//       secret: "",
//       cookie: { maxAge: 30000 },
//       saveUninitialized: true,
//       resave: false,
//       store,
//     })
//   );

// parsing the incoming data
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// assets
// app.use('/assets')

// app.use("/server");

//serving public files
// app.use(express.static(__dirname));

// port
app.listen(PORT, function (error) {
  if (error) throw error;
  console.log(`Express is listening at http://localhost:${PORT}`);
});
