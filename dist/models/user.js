"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contribution = exports.User = exports.UserSchema = exports.ProgressItemSchema = exports.ContributionSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.ContributionSchema = new mongoose_1.default.Schema({
    contribution_type: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
    },
    contributor_github: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
    },
    contribution_link: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
    },
    contribution_timestamp: {
        type: mongoose_1.default.Schema.Types.Date,
        required: true,
    },
    contributor_project_id: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
    },
    contributor_project_name: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
    },
    contribution_amt: {
        type: mongoose_1.default.Schema.Types.Number,
    },
    contribution_token_symbol: {
        type: mongoose_1.default.Schema.Types.String,
    },
    contribution_token_icon: {
        type: mongoose_1.default.Schema.Types.String,
    },
}, { versionKey: false });
exports.ProgressItemSchema = new mongoose_1.default.Schema({
    progress_type: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
    },
    progress_text: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
    },
    progress_true: {
        type: mongoose_1.default.Schema.Types.Boolean,
        required: true,
        default: false,
    },
}, { versionKey: false });
exports.UserSchema = new mongoose_1.default.Schema({
    user_github: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
        unique: true,
    },
    user_phantom_address: {
        type: mongoose_1.default.Schema.Types.String,
    },
    user_fb_uid: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
    },
    user_gh_name: {
        type: mongoose_1.default.Schema.Types.String,
    },
    user_profile_pic: {
        type: mongoose_1.default.Schema.Types.String,
    },
    user_contributions: {
        type: [exports.ContributionSchema],
    },
    user_progress: {
        type: [exports.ProgressItemSchema],
    },
}, { versionKey: false });
exports.User = mongoose_1.default.model("Users", exports.UserSchema);
exports.Contribution = mongoose_1.default.model("Contributions", exports.ContributionSchema);
//# sourceMappingURL=user.js.map