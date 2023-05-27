"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = exports.TokenSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.TokenSchema = new mongoose_1.default.Schema({
    token_name: {
        type: mongoose_1.default.Schema.Types.String,
    },
    token_symbol: {
        type: mongoose_1.default.Schema.Types.String,
    },
    token_spl_addr: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
        unique: true,
    },
    token_image_url: {
        type: mongoose_1.default.Schema.Types.String,
    },
    token_price_feed: {
        type: mongoose_1.default.Schema.Types.String,
    },
    token_ltp: {
        type: mongoose_1.default.Schema.Types.Number,
    },
    token_ltp_24h_change: {
        type: mongoose_1.default.Schema.Types.Number,
    },
    token_total_supply: {
        type: mongoose_1.default.Schema.Types.Number,
    },
    token_circulating_supply: {
        type: mongoose_1.default.Schema.Types.Number,
    },
    token_creator_name: {
        type: mongoose_1.default.Schema.Types.String,
    },
    token_creation_date: {
        type: mongoose_1.default.Schema.Types.Date,
    },
    token_repository_url: {
        type: mongoose_1.default.Schema.Types.String,
    },
}, { versionKey: false });
exports.Token = mongoose_1.default.model("Token", exports.TokenSchema);
//# sourceMappingURL=token.js.map