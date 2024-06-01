import { useState, useEffect } from "react";
import { useData } from "../hooks/useData";
import EmojiToggler from "./EmojiToggler";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {

    const [currency, setCurrency] = useState(currencies[0]);

    // string only changes with dynamic state curerncy
    const data = useData(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);


    // fetch URL: https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}
    const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);
    return (
        <>
            <div className="BitcoinRates componentBox">
                <h3>Bitcoin Exchange Rate</h3>
                <label>Choose currency:
                    <select value={currency} onChange={e => setCurrency(e.target.value)}>
                        {options}
                    </select>
                </label>
                <p>Rate: {data}</p>
            </div>
            <EmojiToggler></EmojiToggler>
        </>
    )
}

export default BitcoinRates