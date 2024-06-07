export class Stock {
    title: string;
    symbol: string;
    limit: number;

    constructor(title: string, symbol: string, limit: number) {
        this.title = title;
        this.symbol = symbol;
        this.limit = limit;
    }
}