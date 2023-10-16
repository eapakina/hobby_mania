
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const userRouter = require("./routes/userRouter");
const schoolRouter = require("./routes/schoolRouter");
const postsRouter = require("./routes/postsRouter");
const commentsRouter = require("./routes/commentsRouter");

require("dotenv").config();


const app = express();

const PORT = process.env.PORT || 3002;

app.use(cors({ credentials: true, origin: true }));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    name: "sid",
    secret: process.env.SESSION_SECRET ?? "test",
    resave: true,
    store: new FileStore(),
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 12,
      httpOnly: true,
    },
  })
);



app.use("/api/school", schoolRouter);

app.use("/api/blog", postsRouter);
app.use("/api/comments", commentsRouter);

app.listen(PORT, () => console.log(`Started on port ${PORT}`));
