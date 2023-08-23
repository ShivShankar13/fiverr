import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import {
  createReview,
  getReviews,
  deleteReview,
} from "../controllers/review.controller.js";

const router = express.Router();

router.post("/", verifyToken, createReview )
router.get("/:gigId", getReviews )
router.delete("/:id", deleteReview)

export default router;
// import express from "express";
// import {
//   createGig,
//   deleteGig,
//   getGig,
//   getGigs
// } from "../controllers/gig.controller.js";
// import { verifyToken } from "../middleware/jwt.js";

// const router = express.Router();

// router.post("/", verifyToken, createGig);
// router.delete("/:id", verifyToken, deleteGig);
// router.get("/single/:id", getGig);
// router.get("/", getGigs);

// export default router;
// import express from "express";
// const router = express.Router();
// router.get("/test",)

// export default router;