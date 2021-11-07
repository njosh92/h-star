import React, { useState, useEffect } from 'react';
import { VFXImg, VFXSpan } from 'react-vfx';
import Container from 'bootstrap'
import{Button} from 'react-bootstrap';

import tree from '../images/tree.jpeg';
import game from '../images/game.jpeg';
import abyss from '../images/blackhole.jpeg';
import smoke from '../images/somke2.gif'
import Leaves from '../leaves'






const Main = (props) => {

    return (
        <>
            <div id="container">


                <div className="banner">
                    <VFXImg src={tree} shader="rgbGlitch" className='Image' /><Leaves />
                </div>
                <div className="bottom position-static Image ">
                    <div class="img_icons">

                        <img src={game}></img>
                        <h3>Games</h3>
                    </div>
                    <div className="img_icons">
                        <img src={abyss}></img>
                        <h3>Music</h3>

                    </div>
                    <div className="img_icons moon" id="moon">
                        <img src={smoke} shader="blink" alt=""></img>
                        <h3>Crypto</h3>
                    </div>

                </div>
                <form action="https://www.paypal.com/donate" method="post" target="_top">
                    <input type="hidden" name="business" value="UDH9FPZCBKTMA" />
                    <input type="hidden" name="no_recurring" value="0" />
                    <input type="hidden" name="item_name" value="Future Development/site additions" />
                    <input type="hidden" name="currency_code" value="USD" />
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                    <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>
                <a class="mailto" href="mailto:lxrdhoshi@gmail.com"><Button>Inquiry </Button></a>
            </div>
        </>
    )
}
export default Main;