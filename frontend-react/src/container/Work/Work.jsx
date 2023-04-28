import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';
import { useNavigate } from 'react-router-dom';

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('Best');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const navigate = useNavigate();

    useEffect(() => {
        const query = '*[_type == "works"]';
    
        client.fetch(query).then((data) => {
          setWorks(data);
          const filter=data.filter((data) => data.tags.includes(activeFilter))
          setFilterWork(filter);
        });
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    
    const handleWorkFilter = (item) => {
        setActiveFilter(item);
        setAnimateCard([{ y: 100, opacity: 0 }]);
    
        setTimeout(() => {
          setAnimateCard([{ y: 0, opacity: 1 }]);
    
          if (item === 'All') {
            setFilterWork(works);
          } else {
            setFilterWork(works.filter((work) => work.tags.includes(item)));
          }
        }, 500);
    }
    return (
      <>
      {filterWork?.length>0 && <>
        <h2 className='head-text'>My Creative<span> Portfolio </span>Section
            </h2>
            <div className="app__work-filter">
        {['UI/UX', 'JS', 'HTML/CSS', 'React/Next JS', 'Best','All'].map((item, index) => (
          <div
            key={index}
            onClick={() => {
              if (item === "All") {
                navigate('/work')
              }
              else {
                handleWorkFilter(item)
              }
            }}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
         
        >
          <div className='app__work-portfolio'>
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
              <img src={urlFor(work.imgUrl)} alt={work.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
          </div>
          <div className='a-tag'>
            <a href="/work">Show More Projects</a> 
            </div>
      </motion.div>
      </>
      }
    </>)
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);