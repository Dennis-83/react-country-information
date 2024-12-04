import './App.css';
import axios from "axios";
import {useState} from "react";

function App() {

    const [countries, setCountries] = useState([]);

    async function fetchCountries() {
        try {
            const result = await axios.get(`https://restcountries.com/v3.1/all?fields=name,flag,population,region`);
            setCountries(result.data.sort((countryA, countryB) => countryA.population - countryB.population));
        } catch (e) {
            console.error(e);
        }
    }

    function changeCountryTextColor(country) {
        let color = '';
        switch (country.region) {
            case 'Africa':
                color = 'blue';
                break;
            case 'Americas':
                color = 'green';
                break;
            case 'Asia':
                color = 'red';
                break;
            case 'Europe':
                color = 'yellow';
                break;
            case 'Oceania':
                color = 'purple';
                break;
        }
        return color
    }

    return (
        <>
            {!countries[0] && <button type="button" onClick={fetchCountries}
            >Haal landen op!
            </button>}
            {/*{console.log(!countries[0])}*/}

            {countries.map((country) => {
                // console.log(country.name.common);
                return <>
                    <p className={changeCountryTextColor(country)}>
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
        </>
    )
}

export default App
