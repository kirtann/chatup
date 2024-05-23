const corsOptions = {
  origin: [
    "http://localhost:4173",
    "http://localhost:5173",
    process.env.CLIENT_URL,
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const AUTH_TOKEN = "auth-token";

export { corsOptions, AUTH_TOKEN };
