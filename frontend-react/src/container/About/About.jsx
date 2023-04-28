import React, { useEffect, useState } from 'react';
import './About.scss';

import { AppWrap,MotionWrap } from '../../wrapper';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';
import { images } from '../../constants';

const  pdfResume= 'resume.pdf'

const About = () => {
    const [abouts, setAbouts] = useState([])
    
    useEffect(() => {
        const query = '*[_type == "abouts"]';
    
        client.fetch(query).then((data) => {
          setAbouts(data);
        });
    }, []);
    
    const Download = (url) => {
        const a = document.createElement("a");
        a.href = url;
        a.download = 'resume.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    return (
        <>
            <h2 className='head-text' onClick={()=>{console.log('about',abouts)}}>I know that<span> Good Development </span><br />requires <span>Creative Innovations!!</span>
            </h2>
            <div className="app__aboutDetails">
                <div>
            <p> <span>I</span> am a Junior Web Developer Who Is Pursuing His Career Through Learning More And More Everyday. I Am a Student. And I have Skills on React.js, Javascript And Many More.</p>
            <div className="button" onClick={()=>Download(pdfResume)}>Download Resume</div> 
                </div>
            <img src={images.profile1} alt="profile_bg" /> 
            </div>
            <div className='app__profiles'>
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opcaity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className="app__profile-item"
                        key={about.title + index}
                    >
                        <img src={urlFor(about.imgUrl)} alt={about.title} />
                        <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
                        <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
                    </motion.div>
                )
                )}

            </div>
        </>
    );
};

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
    'app__whitebg',
  );
  