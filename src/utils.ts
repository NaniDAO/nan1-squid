
export const convertTimestampMilliToSeconds = (timestamp: number) => {
    return BigInt(Math.floor(timestamp / 1000));
}

export const getAccountId = (account: string, chain: string) => {
    return account.toLowerCase() + '-' + chain.toLowerCase();
}