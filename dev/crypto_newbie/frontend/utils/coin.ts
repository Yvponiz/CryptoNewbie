enum Currency {
    CAD = 'cad'
}

type CurrentPrices = Record<Currency, number>

interface MarketData {
    market_cap: CurrentPrices;
    market_cap_rank: string;
    price_change_percentage_24h: number;
    current_price: CurrentPrices;
}

interface Image {
    small: string;
}

interface Item {
    name: string;
    price_btc: number;
    small: string;
}

export interface Coin {
    id: string;
    name: string;
    symbol: string;
    market_data: MarketData;
    image: Image;
    item: Item;
}

