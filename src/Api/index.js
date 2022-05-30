import axios from 'axios'
import { useState, useEffect} from 'react'



function GetAllCharacters () {
    const BASE_URL = 'https://naruto-api.herokuapp.com/api/v1/characters';
    const [characters, setCharacters] = useState(null)


    useEffect(() => {
            axios.get(BASE_URL)
            .then(response => {
                setCharacters(response)
                console.log(response);
            })
        }, [BASE_URL])

        if(characters){
            return(
                <div>
                    <h3>{characters.name}</h3>
                    <button onClick={GetAllCharacters}>get char</button>
                </div>
            )
        }
        return(
            <div>
            </div>
        )


}
export default GetAllCharacters