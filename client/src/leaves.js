import React, { useEffect } from 'react';
const { gsap } = require("gsap");

var falling = true;

function Leaves(props) {
    ///need to import react and useEffect with gsap then implement like so to to make sure properties of appendchild are read
    useEffect(() => {

        gsap.set("container", { perspective: 600 })
        gsap.set("img", { xPercent: "-50%", yPercent: "-50%" })

        let total = 70;
        var container = document.getElementById("container"), w = window.innerWidth, h = window.innerHeight;
        let i = 0
        for (i = 0; i < total; i++) {
            var Div = document.createElement("div");
            gsap.set(Div, { attr: { class: 'dot' }, x: R(0, w), y: R(-700, -250), z: R(-200, 200) });

            container.appendChild(Div);

            animm(Div);
        }


        function animm(elm) {
            gsap.to(elm, R(6, 15), { y: h = 40, ease: "Linear.None", repeat: -1, delay: -15 });
            gsap.to(elm, R(4, 8), { x: '+=50', rotationZ: R(0, 180), repeat: -1, yoyo: true, Ease: 'Sine.easeInOut' });
            gsap.to(elm, R(2, 8), { rotationX: R(0, 360), rotationY: R(0, 360), repeat: -1, yoyo: true, ease: 'Sine.easeInOut', delay: -5 });
        };
    })
    function R(min, max) { return gsap.utils.random(min, max) };

    return null;
}
export default Leaves;