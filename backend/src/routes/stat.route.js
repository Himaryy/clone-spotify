import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello from Stats route");
});

export default router;
