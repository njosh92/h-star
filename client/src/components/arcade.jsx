import background from '../images/dragon.jpeg'
import jammin from '../images/yu.png';
import streetd from '../images/flashdynasty.jpeg'
import hoshiscape from '../images/1.png'
import {Container , Card} from 'react-bootstrap'
import { VFXDiv} from 'react-vfx';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { card } from '@material-ui/core'

import { Link } from 'react-router-dom';




const Arcade = (props) => {
    const [games, setGames] = useState([])

    useEffect(() => {
        getGamesFromDB()
    }, [])


    const deleteItem = (deleteId) => {
        if (window.confirm("Confirm?")) {
            axios.delete("http://localhost:7000/api/games/" + deleteId)
                .then(res => {
                    setGames(games.filter(games => games._id !== deleteId))
                })
                .catch(err => console.log(err))
        }
    }




    const getGamesFromDB = () => {
        axios.get("http://localhost:7000/api/games")
            .then(res => {
                console.log(res.data);
                setGames(res.data)
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <Container className='body-2'>
                
                    <VFXDiv shader='spring' className='title'>Games</VFXDiv>



                    <div className="pod-body">

                        {/* {JSON.stringify(games)} */}


                        <div className="game-box ">
                            <a className="games" id="" href="https://www.newgrounds.com/portal/view/804975"><img src={jammin}></img></a>
                            <h3> Yu Jammin</h3>
                            
                        </div>
                        <div className="game-box">
                            <a className="games" href="https://www.newgrounds.com/portal/view/237269"><img src={streetd}></img></a>
                            <h3>Dynasty Street</h3>
                        </div>
                        <div className="game-box">
                            <a className="games" href=""><img src={hoshiscape}></img></a>
                            <h3>In-House Games</h3>
                            <h3>Coming Soon!</h3>
                        </div>


                    </div>
                    {
                        games.map((g, i) => {
                            return (
                                <Card className="game-box " >
                                    <a className="games" href={g.url}><img src={g.image}></img></a>
                                    <h3>{g.title}</h3>
                                    <div className='card-btns'>
                            <Link  className="btn button"to ={"/game/"+ g._id}>Edit</Link>
                            <button className="btn2" onClick={() => deleteItem(g._id)}>Trash</button>
                            </div>
                                </Card>
                            )
                        })

                    }
                    <Link to="/add/game" className='' ><button>Add Game</button></Link>

            
            </Container>
        </>
    )
}
export default Arcade;