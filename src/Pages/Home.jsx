import { useState, useEffect } from 'react';
import { ScrollContainer, Animator, ScrollPage, batch, Fade, Move, Sticky } from 'react-scroll-motion';
import LandingPage from './LandingPage';
import ExplorePage from './ExplorePage';

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    return (
      <div>
        <LandingPage />
        <ExplorePage />
      </div>
    );
  }

  return (
    <ScrollContainer className='m-0 '>
      <ScrollPage page={0} className=''>
        <Animator className='w-screen' animation={batch(Fade(), Move(), Sticky())}>
          <LandingPage />
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <Animator className='w-screen' animation={batch(Fade(), Move(), Sticky())}>
          <ExplorePage />
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
};

export default Home;
