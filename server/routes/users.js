import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controllers/users.js";
import { verifiedToken } from "../middleware/auth.js";

const router = express.Router();

// Get Req
router.get("/:id", verifiedToken, getUser);
router.get("/:id/friends", verifiedToken, getUserFriends);

// Update Req

router.patch("/:id/friendsId", verifiedToken, addRemoveFriend);

export default router;
