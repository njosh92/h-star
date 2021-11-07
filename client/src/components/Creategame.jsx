import React, { useState } from 'react'
import axios from 'axios';
import FileBase64 from 'react-file-base64';
import { useHistory } from 'react-router-dom';
import { VFXDiv} from 'react-vfx';
export default () => {
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [url, setUrl] = useState("");
    const [image, setImage] = useState("")


    const genres = ['', 'Action', 'RPG', 'Strategy', ' Fighting', 'New Age', 'video']


    let history = useHistory();
    const [dbErrors, setDBErrors] = useState([])

    const [selectedGenre, setSelectedGenre] = useState(genres[0])


    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:7000/api/games', { title, genre, url, image })
            .then(res => {
                console.log(res.data);
                console.log(title, genre, url, image);
                history.push('/')
            })
            .catch(err => {
                // console.log(err),
                console.log(err.response.data.errors);

                const { errors } = err.response.data;
                const messages = Object.keys(errors).map(error => errors[error].message)
                setDBErrors(messages);
                console.log(messages)

            }

            )
    }
    // setPosition(positions);

    return (

        < form onSubmit={onSubmitHandler} >

            <VFXDiv shader='blink'  className='genre' >{genre} </VFXDiv>

            <p>

                <label>Title</label><br />
                <input type=" text" onChange={(e) => setTitle(e.target.value)} value={title} />
            </p>


            <p>
                <label>Link To Game</label><br />
                <input type=" text" onChange={(e) => setUrl(e.target.value)} value={url} />
            </p>
            <p>
                <label>Image Url </label><br />
                <input type=" text" onChange={(e) => setImage(e.target.value)} value={image} />
                {/* <FileBase64
        multiple={ false }
        onDone={ ({base64}) =>setImage({
            image: base64
        })} /> */}
            </p>
            <p>
                <label>Genre</label><br />
                <select value={genres} onChange={e => setGenre(e.target.value)}>
                    {genres.map((pos, idx) =>
                        <option key={idx} value={pos}>{pos}</option>
                    )}
                </select>

            </p>


            <button type="submit">Add Game</button>

            { dbErrors.map((err, index) => <p key={index} style={{ color: "red" }}>{err}</p>)}
        </form >

    )


}
