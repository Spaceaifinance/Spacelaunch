import express from "express";

import * as usercontroller  from "../Controller/usercontroller";

const router = express.Router();

router.route("/kyc").post(usercontroller.kycdetails);
router.route("/kyc").get(usercontroller.singleuserkyc);
router.route("/wishlist").post(usercontroller.wishlist);
router.route("/viewlist").post(usercontroller.viewlist);
router.route("/createuser").post(usercontroller.addnewuser);

router.route("/getuserdata").post(usercontroller.getuserdata);
router.route("/userinvested").post(usercontroller.userinvested);
router.route("/userlaunchpad").post(usercontroller.userlaunchpad);

router.route("/gettrending").get(usercontroller.gettrending);

router.route("/gethomecalculation").get(usercontroller.homecalculation);

router.route("/getsale").get(usercontroller.Getsale);

router.route("/addkycaudit").post(usercontroller.addkycaudit);

router.route("/getallsale").get(usercontroller.Getallsale);

router.route("/getusecreatedlaunch").get(usercontroller.getusecreatedlaunch);

router.route("/updatelaunchpad").post(usercontroller.updatelaunchpad);

// router.route



module.exports = router;