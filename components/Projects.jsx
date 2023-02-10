import React from 'react';
import ProjectItem from './ProjectItem';
// Image
import propertyImg from '../public/assets/projects/nike-store.jpg';
import cryptoImg from '../public/assets/projects/portfolio.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Nike Store'
            backgroundImg={propertyImg}
            projectUrl='/property'
            tech='React JS - Shopify'
          />
          <ProjectItem
            title='Portfolio'
            backgroundImg={cryptoImg}
            projectUrl='/crypto'
            tech='Next JS'

          />
          <ProjectItem
            title='TikTok UI'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS'

          />
          <ProjectItem
            title='Pokemon Library'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='TypeScript'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
