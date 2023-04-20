import { FunctionComponent, useEffect, useState } from "react";
import Image from "next/image";
import { Coin } from "../models/coin";
import quickSort from "../utils/quickSort";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

export const CryptoList: FunctionComponent<{ coins: Coin[] }> = ({ coins }) => {
    const [coinState, setCoinState] = useState<Coin[]>(coins);
    const [page, setPage] = useState<number>(1);
    const { t } = useTranslation();
  
    const itemsPerPage = 10;
  
    const sort = async (e) => {
      let newList = await quickSort(coinState, e.target.id);
      setCoinState(newList);
    };
  
    const router = useRouter();

    const setSelection = (id) => {
      router.push({
        pathname: "/coinInfo",
        query: { coinId: id}
      });
    };
  
    const handleNextPage = () => {
      setPage((prev) => prev + 1);
    };
  
    const handlePrevPage = () => {
      setPage((prev) => prev - 1);
    };
  
    if (!Array.isArray(coins)) {
      return <div>Loading...</div>;
    }
  
    // Slice the coins based on the current page
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;
    const currentCoins = coins.slice(startIndex, endIndex);
  
    return (
      <div>
        <ul className="titles-list">
          <li onClick={sort} id="name" className="title-elem">
            {t("crypto.coin")}
          </li>
          <li onClick={sort} id="current_price" className="title-elem">
            {t("crypto.price")}
          </li>
          <li onClick={sort} id="market_cap" className="title-elem">
            {t("crypto.market")}
          </li>
          <li onClick={sort} id="24h_growth" className="title-elem">
            {t("crypto.twentyfour")}
          </li>
        </ul>
  
        <div>
          {currentCoins.map(
            ({ id, name, current_price, market_cap, price_change_percentage_24h, image }) => (
              <div
                onClick={() => setSelection(id)}
                className="index-coin"
                key={id}
              >
                <span>
                  <Image
                    src={typeof image !== "string" ? image.small : image}
                    width={50}
                    height={50}
                    alt="coin image"
                  />
                  {name}
                </span>
                <p>{`${current_price.toLocaleString()} $`}</p>
                <p>{`${market_cap.toLocaleString()} $`}</p>
                <p
                  style={{
                    color:
                      Math.sign(price_change_percentage_24h) === -1
                        ? "red"
                        : "green",
                  }}
                >{`${price_change_percentage_24h.toFixed(2)} %`}</p>
              </div>
            )
          )}
        </div>
  
        <div className="pagination">
          <button onClick={handlePrevPage} disabled={page === 1}>
            <Image
                src={'/arrow-left.svg'}
                width={50}
                height={50}
                alt="arrow left"
            />
          </button>
          <button onClick={handleNextPage} disabled={endIndex >= coins.length}>
            <Image
                src={'/arrow-right.svg'}
                width={50}
                height={50}
                alt="arrow right"
            />
          </button>
        </div>
      </div>
    );
  };
  