export function add(a: number, b: number): number {
    return a + b;
}

export function multiply(a: number, b: number): number {
    let result = 0;
    for (let i = 0; i < Math.abs(b); i++) {
        result = result + Math.abs(a);
    }
    return result * Math.sign(a) * Math.sign(b);
}
