"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const issues_1 = require("./models/issues");
const router = express_1.default.Router();
// router.get("/", async (req: Request, res: Response) => {
//     res.send("Typescript + Express + MongoDB");
// });
router.get("/ok", async (req, res) => {
    try {
        const issue = new issues_1.Issues({
            issue_account: "rrr",
            issue_creator_gh: "rrr",
            issue_project_id: "rrr",
            issue_project_name: "rrr",
            issue_title: "rrr",
            issue_state: "open",
            issue_summary: "rrr",
            issue_gh_url: "rrr",
            issue_stake_amount: 0,
            issue_stake_token_symbol: "rrr",
            issue_stake_token_url: "rrr",
            issue_prs: [],
            issue_tags: ["rrr", "ok"],
        });
        await issue.save();
        res.send(issue);
    }
    catch (err) {
        console.log(err);
    }
});
router.get("/in1", async (req, res) => {
    try {
        const issue = await issues_1.Issues.findOne({
            issue_account: "rrr",
        });
        if (issue) {
            issue.issue_prs.push({
                issue_pr_account: "brr3",
                issue_pr_author: "brr3",
                issue_pr_link: "brr3",
                issue_originality_score: 0,
                issue_author_github: "brr3",
                issue_title: "brr3",
                issue_vote_amount: 0,
            });
            issue.save();
            res.send(issue);
        }
    }
    catch (err) {
        console.log(err);
    }
});
router.get("/in2", async (req, res) => {
    try {
        const issue = await issues_1.Issues.findOne({
            issue_account: "rrr",
        });
        if (issue) {
            issue.issue_prs.push({
                issue_pr_account: "brr4",
                issue_pr_author: "brr4",
                issue_pr_link: "brr4",
                issue_originality_score: 0,
                issue_author_github: "brr4",
                issue_title: "brr4",
                issue_vote_amount: 0,
            });
            issue.save();
            res.send(issue);
        }
    }
    catch (err) {
        console.log(err);
    }
});
router.get("/search", async (req, res) => {
    try {
        const issue = await issues_1.Issues.findOne({
            "issue_prs.issue_pr_account": "brr3",
        });
        res.send(issue);
    }
    catch (err) {
        console.log(err);
    }
});
router.get("/search1", async (req, res) => {
    try {
        const issue = await issues_1.Issues.findOne({
            "issue_prs.issue_pr_account": "brr1",
        });
        res.send(issue);
    }
    catch (err) {
        console.log(err);
    }
});
router.get("/search2", async (req, res) => {
    try {
        const issue = await issues_1.Issues.findOne({
            "issue_prs.issue_pr_account": "brrr",
        });
        res.send(issue);
    }
    catch (err) {
        console.log(err);
    }
});
exports.default = router;
//# sourceMappingURL=routes.js.map