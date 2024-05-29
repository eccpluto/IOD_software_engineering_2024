import { useState, useEffect } from "react";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {

    const [currency, setCurrency] = useState(currencies[0]);

    // store the dynamic variable as a state variable, since we are needing to update
    // the component display with this
    const [rate, setRate] = useState('');

    // define an effect to get botcoin rates, which will update the rate display in response
    // to a user selecting a currency
    useEffect(() => {

        let ignore = false;

        console.log('Running effect');
        fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=` +
            `${currency}`)
            .then(response => response.json())
            .then(json => {
                const currKey = Object.keys(json.bitcoin)[0];

                //
                if (!ignore) setRate(json.bitcoin[currKey]);
            }),
            // cross origin resource sharing:
            // cors generally for when we are interested
            // in the response from the server, not just
            // probing for analytics/ behaviour or server
            { mode: 'cors' };

            return () => {
                console.log('Cleaning up');
                ignore = true;

            }
    }, [currency])

    // fetch URL: https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}
    const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);
    return (
        <div className="BitcoinRates componentBox">
            <h3>Bitcoin Exchange Rate</h3>
            <label>Choose currency:
                <select value={currency} onChange={e => setCurrency(e.target.value)}>
                    {options}
                </select>
            </label>
            <p>Rate: {rate}</p>
        </div>
    )
}

export default BitcoinRates