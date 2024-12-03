import './App.css';
import axios from "axios";
import {useState} from "react";

function App() {

    const [countries, setCountries] = useState([]);

    async function fetchCountries() {
        try {
            const result = await axios.get(`https://restcountries.com/v3.1/all?fields=name,flag,population,region`);
            setCountries(result.data);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <button type="button" onClick={fetchCountries}
            >Haal landen op!
            </button>
            {/*{console.log(countries)}*/}

            {countries.map((country) => {
                // console.log(country.name.common);
                return <>
                <p>
                    {country.flag} {country.name.common}
                </p>
                <p>
                    Has a population of {country.population}
                </p>
                <p>
                    {country.region}
                </p>
                </>

            })}
            {/*{countries[0] && <p>{countries[0].name.common}</p>}*/}
        </>
    )
}

export default App
