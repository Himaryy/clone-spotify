import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  if (!req.auth) {
    return res.status(401).json({ message: "Unauthorized access" });
  }

  console.log("User ID:", req.auth.userId); // Log the user ID to check if Clerk works

  res.json({ message: "Hello from user route", userId: req.auth.userId });
});

export default router;
