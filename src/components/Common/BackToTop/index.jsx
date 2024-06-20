import React, { useEffect } from "react";
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import './styles.css';

function BackToTop() {
    useEffect(() => {
        const mybutton = document.getElementById("myBtn");

        const scrollFunction = () => {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                mybutton.style.display = "flex";
            } else {
                mybutton.style.display = "none";
            }
        };

        window.onscroll = scrollFunction;

        return () => {
            window.onscroll = null; // Clean up the event listener
        };
    }, []);

    const topFunction = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    };

    return (
        <div className="back-to-top-btn" id="myBtn" onClick={topFunction}>
            <ArrowUpwardRoundedIcon style={{ color: "var(--blue)" }} />
        </div>
    );
}

export default BackToTop;
