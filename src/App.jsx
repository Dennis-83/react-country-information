import './App.css';
import axios from "axios";
import {useState} from "react";

function App() {

    const [countries, setCountries] = useState([]);

    async function fetchCountries() {
        try {
            // cca3 (landcode) ook meegenomen om als key te gebruiken
            const result = await axios.get(`https://restcountries.com/v3.1/all?fields=name,flag,population,region,cca3`);
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
            {/* Als countries[0] niet gevuld is, laat dan button zien */}
            {!countries[0] && <button type="button" onClick={fetchCountries}
            >Haal landen op!
            </button>}

            {countries.map((country) => {
                return <div key={country.cca3}>
                    {/*{console.log(country.cca3)}*/}
                    <p className={changeCountryTextColor(country)}>
                        {country.flag} {country.name.common}
                    </p>
                    <p>
                        Has a population of {country.population}
                    </p>
                    <p>
                        {country.region}
                    </p>
                </div>
            })}
        </>
    )
}

export default App
