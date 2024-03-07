
export const convertTimestampMilliToSeconds = (timestamp: number) => {
    return BigInt(Math.floor(timestamp / 1000));
}