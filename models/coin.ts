// Interface pour monnaie

enum Currency {
    CAD = 'cad',
    USD = 'usd'
}

type CurrentPrices = Record<Currency, number>

interface MarketData {
    market_cap: CurrentPrices;
    market_cap_rank: string;
    price_change_percentage_24h: number;
    price_change_percentage_1y: number;
    price_change_percentage_7d: number;
    price_change_percentage_30d: number;
    current_price: CurrentPrices;
    low_24h: CurrentPrices;
    high_24h: CurrentPrices;
}

interface ImageData {
    small: string;
    large: string;
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
    market_data?: MarketData;
    market_cap: CurrentPrices;
    market_cap_rank: string;
    price_change_percentage_24h: number;
    price_change_percentage_1y: number;
    price_change_percentage_7d: number;
    price_change_percentage_30d: number;
    current_price: CurrentPrices;
    low_24h: CurrentPrices;
    high_24h: CurrentPrices;
    image: string | ImageData;
    item?: Item;
}

