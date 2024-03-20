const express = require("express");
import { signin } from "../controllers/auth.controller";
import { signup } from "../controllers/auth.controller";

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/sign-out", signout);
