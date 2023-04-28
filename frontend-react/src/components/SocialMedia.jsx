import React from 'react';
import {BsGithub, BsLinkedin, BsFacebook } from 'react-icons/bs';
// import { FaFacebook } from 'react-icons/fa';


const SocialMedia = () => {
    return (
        <div className="app__social">
            <div>
                <a href="https://github.com/Sayem-Mahmud" target='_blank' rel="noreferrer">
                    <BsGithub />
                </a>
            </div> 
            <div>
                <a href="https://www.linkedin.com/in/sayem-mahmud-13349220a/" target='_blank' rel="noreferrer">
                    <BsLinkedin />
                </a>
            </div> 
            <div>
            <a href="https://www.facebook.com/sayem.mahmud.77128" target='_blank' rel="noreferrer">
                    <BsFacebook />
            </a>
            </div> 
        </div>
    );
};

export default SocialMedia;