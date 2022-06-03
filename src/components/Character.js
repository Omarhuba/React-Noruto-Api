import axios from 'axios'
import { useState, useEffect} from 'react'



function GetAllCharacters () {
    const BASE_URL = 'https://naruto-api.herokuapp.com/api/v1/characters/';
    const [characters, setCharacters] = useState(null)


    useEffect(() => {
            axios.get(BASE_URL)
            .then(response => {
                setCharacters(response.data)
                console.log(response.data);
            })
        }, [BASE_URL])

        if(characters){
            return(
                <div>
                    <p>{characters.name}</p>
                    <ul>
                        {characters.map((char,index)=> {
                            return <li key={index}>{char.name}</li>
                        })}
                    </ul>
                    {/* {setCharacters.map(home => <div>{home.name}</div>)} */}
                    {/* <button onClick={GetAllCharacters}>get char</button> */}
                </div>
            )
        }
        return(
            <div>

            </div>
        )


}
export default GetAllCharacters