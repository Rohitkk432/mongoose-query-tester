"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Issues = exports.IssueSchema = exports.IssuePRsSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.IssuePRsSchema = new mongoose_1.default.Schema({
    issue_pr_account: {
        type: mongoose_1.default.Schema.Types.String,
    },
    issue_pr_author: {
        type: mongoose_1.default.Schema.Types.String,
    },
    issue_pr_link: {
        type: mongoose_1.default.Schema.Types.String,
    },
    issue_originality_score: {
        type: mongoose_1.default.Schema.Types.Number,
    },
    issue_author_github: {
        type: mongoose_1.default.Schema.Types.String,
    },
    issue_title: {
        type: mongoose_1.default.Schema.Types.String,
    },
    issue_vote_amount: {
        type: mongoose_1.default.Schema.Types.Number,
    },
}, { versionKey: false, _id: false });
exports.IssueSchema = new mongoose_1.default.Schema({
    issue_account: {
        type: mongoose_1.default.Schema.Types.String,
    },
    issue_creator_gh: {
        type: mongoose_1.default.Schema.Types.String,
    },
    issue_project_id: {
        type: mongoose_1.default.Schema.Types.String,
    },
    issue_project_name: {
        type: mongoose_1.default.Schema.Types.String,
    },
    issue_title: {
        type: mongoose_1.default.Schema.Types.String,
    },
    issue_state: {
        type: mongoose_1.default.Schema.Types.String,
    },
    issue_summary: {
        type: mongoose_1.default.Schema.Types.String,
    },
    issue_gh_url: {
        type: mongoose_1.default.Schema.Types.String,
    },
    issue_stake_amount: {
        type: mongoose_1.default.Schema.Types.Number,
    },
    issue_stake_token_symbol: {
        type: mongoose_1.default.Schema.Types.String,
    },
    issue_stake_token_url: {
        type: mongoose_1.default.Schema.Types.String,
    },
    issue_prs: {
        type: [exports.IssuePRsSchema],
    },
    issue_tags: {
        type: [mongoose_1.default.Schema.Types.String],
    },
}, { versionKey: false });
exports.Issues = mongoose_1.default.model("Issues", exports.IssueSchema);
//# sourceMappingURL=issues.js.map