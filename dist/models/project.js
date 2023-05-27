"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = exports.ProjectSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.ProjectSchema = new mongoose_1.default.Schema({
    project_account: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
    },
    project_owner_github: {
        type: mongoose_1.default.Schema.Types.String,
    },
    project_token: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Token",
    },
    project_name: {
        type: mongoose_1.default.Schema.Types.String,
    },
    project_status: {
        type: mongoose_1.default.Schema.Types.String,
    },
    project_repo_link: {
        type: mongoose_1.default.Schema.Types.String,
    },
    top_supporter_name: {
        type: mongoose_1.default.Schema.Types.String,
    },
    top_supporter_address: {
        type: mongoose_1.default.Schema.Types.String,
    },
    top_builder_name: {
        type: mongoose_1.default.Schema.Types.String,
    },
    top_builder_address: {
        type: mongoose_1.default.Schema.Types.String,
    },
    num_open_issues: {
        type: mongoose_1.default.Schema.Types.Number,
    },
    community_health: {
        type: mongoose_1.default.Schema.Types.Number,
    },
    community_health_graph: {
        type: mongoose_1.default.Schema.Types.String,
    },
    num_contributions: {
        type: mongoose_1.default.Schema.Types.Number,
    },
    num_contributions_chg_perc: {
        type: mongoose_1.default.Schema.Types.Number,
    },
    num_contributions_graph: {
        type: mongoose_1.default.Schema.Types.String,
    },
    is_token_native: {
        type: mongoose_1.default.Schema.Types.Boolean,
    },
    internal_tags: {
        type: mongoose_1.default.Schema.Types.Mixed,
    },
    coins_staked: {
        type: mongoose_1.default.Schema.Types.Number,
    },
    coins_rewarded: {
        type: mongoose_1.default.Schema.Types.Number,
    },
    claimers_pending: {
        type: [mongoose_1.default.Schema.Types.String],
    },
}, { versionKey: false });
exports.Project = mongoose_1.default.model("Projects", exports.ProjectSchema);
//# sourceMappingURL=project.js.map