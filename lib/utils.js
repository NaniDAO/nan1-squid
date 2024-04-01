"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccountId = exports.convertTimestampMilliToSeconds = void 0;
const convertTimestampMilliToSeconds = (timestamp) => {
    return BigInt(Math.floor(timestamp / 1000));
};
exports.convertTimestampMilliToSeconds = convertTimestampMilliToSeconds;
const getAccountId = (account, chain) => {
    return account.toLowerCase() + '-' + chain.toLowerCase();
};
exports.getAccountId = getAccountId;
