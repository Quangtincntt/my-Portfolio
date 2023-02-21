import React from 'react';
import ProjectItem from './ProjectItem';
// Image
import nikeStoreImg from '../public/assets/projects/nike-store.jpg';
import portfolioImg from '../public/assets/projects/portfolio.jpg'
import tiktokImg from '../public/assets/projects/tiktok.jpg'
import pokemonImg from '../public/assets/projects/pokemon.jpg'

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
            backgroundImg={nikeStoreImg}
            projectUrl='/property'
            tech='React JS - Shopify'
          />
          <ProjectItem
            title='Portfolio'
            backgroundImg={portfolioImg}
            projectUrl='/crypto'
            tech='Next JS'

          />
          <ProjectItem
            title='TikTok UI'
            backgroundImg={tiktokImg}
            projectUrl='/netflix'
            tech='React JS'

          />
          <ProjectItem
            title='Pokemon Library'
            backgroundImg={pokemonImg}
            projectUrl='/twitch'
            tech='TypeScript'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
