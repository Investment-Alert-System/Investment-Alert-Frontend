export class StockLimit {
    symbol: string;
    limit: number;

    constructor(symbol: string, limit: number) {
        this.symbol = symbol;
        this.limit = limit;
    }
}