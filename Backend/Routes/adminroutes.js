import express from "express";

import * as admincontroller  from "../Controller/admincontroller";
import * as settingctrl from "../Controller/settingcontroller";

const router = express.Router();

router.route("/login").post(admincontroller.ValidateAdminLogin);
router.route("/getallkyc").get(admincontroller.getallkyc);
router.route("/approvekyc").post(admincontroller.approvekyc);
router.route("/rejectkyc").post(admincontroller.rejectkyc);

//setting
router.route("/getsetting").get(settingctrl.getAllSettingInfo);
router.route("/addsetting").post(settingctrl.NewSetting);
router.route("/updatesetting").post(settingctrl.UpdateSettingValue);

router.route("/createToken").post(settingctrl.NewTokenCreation);
router.route("/user/tokenlist/:useraddress").get(settingctrl.TokensPerUser);

//coin details
router.route("/getcoin").get(admincontroller.getcoindata);
router.route("/addcoin").post(admincontroller.addcoin);

//trending
router.route("/gettrending").get(admincontroller.gettrendinginfo);
router.route("/addtrending").post(admincontroller.addtrending);
router.route("/updatetrending").post(admincontroller.edittrending);

//dummy launchpad
router.route("/create-dummy-launchpad").post(admincontroller.createdummylaunch);
router.route("/edit-dummy-launchpad").post(admincontroller.Editdummylaunch);
router.route("/getdummylaunch").get(admincontroller.Getdummylaunchpad);

module.exports = router;
// export default router;