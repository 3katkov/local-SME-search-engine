import express from "express";

const router = express.Router();

// export const sRoute = router.get("/");

router.get("/", async (req, res) => {});
router.post("/", async (req, res) => {});
router.get("/:id", async (req, res) => {});
router.put("/:id", async (req, res) => {});
router.delete("/:id", async (req, res) => {});

export default router;