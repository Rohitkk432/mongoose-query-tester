"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roadmap = exports.RoadmapSchema = exports.RoadmapObjectiveSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.RoadmapObjectiveSchema = new mongoose_1.default.Schema({
    objective_title: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
    },
    objective_creation_date: {
        type: mongoose_1.default.Schema.Types.Date,
    },
    objective_creator_gh_name: {
        type: mongoose_1.default.Schema.Types.String,
    },
    objective_creator_gh_profile_pic: {
        type: mongoose_1.default.Schema.Types.String,
    },
    objective_deliverable: {
        type: mongoose_1.default.Schema.Types.String,
    },
    objective_state: {
        type: mongoose_1.default.Schema.Types.String,
    },
    objective_start_date: {
        type: mongoose_1.default.Schema.Types.Date,
    },
    objective_end_date: {
        type: mongoose_1.default.Schema.Types.Date,
    },
}, { versionKey: false });
exports.RoadmapSchema = new mongoose_1.default.Schema({
    roadmap_creator_gh: {
        type: mongoose_1.default.Schema.Types.String,
    },
    roadmap_creator_gh_profile_url: {
        type: mongoose_1.default.Schema.Types.String,
    },
    roadmap_creator_gh_name: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
        default: "",
    },
    roadmap_cover_img_url: {
        type: mongoose_1.default.Schema.Types.String,
    },
    roadmap_total_stake: {
        type: mongoose_1.default.Schema.Types.Number,
    },
    roadmap_active_objectives: {
        type: mongoose_1.default.Schema.Types.Number,
    },
    roadmap_outcome_types: {
        type: [mongoose_1.default.Schema.Types.String],
    },
    roadmap_objectives_list: {
        type: [exports.RoadmapObjectiveSchema],
    },
    roadmap_objectives_graph: {
        type: Object,
    },
    roadmap_creation_date: {
        type: mongoose_1.default.Schema.Types.Date,
    },
    roadmap_title: {
        type: mongoose_1.default.Schema.Types.String,
    },
    roadmap_outlook: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
        default: "Next 2 Yrs",
    },
}, { versionKey: false });
exports.Roadmap = mongoose_1.default.model("Roadmap", exports.RoadmapSchema);
//# sourceMappingURL=roadmap.js.map