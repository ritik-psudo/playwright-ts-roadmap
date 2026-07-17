//when number of exports but the imports are selective.

export function isStatusCodeSuccessful (code: number) : boolean {
    return code >= 200 && code < 300;
}

export function getPassPercentage (passed: number, total: number): number {
    return Number(((passed / total)* 100).toFixed(2));
}

export const default_timeout: number = 5000;