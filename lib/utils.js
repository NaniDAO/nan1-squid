"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertTimestampMilliToSeconds = void 0;
const convertTimestampMilliToSeconds = (timestamp) => {
    return BigInt(Math.floor(timestamp / 1000));
};
exports.convertTimestampMilliToSeconds = convertTimestampMilliToSeconds;
