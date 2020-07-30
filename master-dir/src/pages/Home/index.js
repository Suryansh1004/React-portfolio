import React, { useState, useEffect, useRef, Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Intro from './Intro';
import ProjectSummary from './ProjectSummary';
import Profile from './Profile';
import Footer from 'components/Footer';
import { usePrefersReducedMotion, useRouteTransition } from 'hooks';
import modernTexture from 'assets/modern.jpg';  
import dttTexture from 'assets/dtt.jpg';

import vlab from 'assets/vlhome.jpg'
// import dttTextureLarge from 'assets/dtt-large.jpg';
// import dttTexturePlaceholder from 'assets/dtt-placeholder.jpg';
// import mystgangTexture from 'assets/mystgang.jpg';
// import mystgangTextureLarge from 'assets/mystgang-large.jpg';
// import mystgangTexturePlaceholder from 'assets/mystgang-placeholder.jpg';
import iphone11 from 'assets/iphone-11.glb';
import macbookPro from 'assets/macbook-pro.glb';

// background
import {
  ProjectBackground ,
} from 'components/ProjectLayout';
import prerender from 'utils/prerender';
import backg from 'assets/backg1.jpg';
// import modernBackgroundLarge from 'assets/modern-background-large.jpg';
// import modernBackgroundPlaceholder from 'assets/modern-background-placeholder.jpg'; 
// end back
const disciplines = ['Flutter Dev', 'Full-Stack Dev', 'MERN', 'UI/UX'];

export default function Home(props) {
  const { status } = useRouteTransition();
  const { hash, state } = useLocation();
  const initHash = useRef(true);
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const about = useRef();
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const revealSections = [intro, projectOne, projectTwo, projectThree, about];

    const sectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const section = entry.target;
          observer.unobserve(section);
          if (visibleSections.includes(section)) return;
          setVisibleSections(prevSections => [...prevSections, section]);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px' });

    const indicatorObserver = new IntersectionObserver(([entry]) => {
      setScrollIndicatorHidden(!entry.isIntersecting);
    }, { rootMargin: '-100% 0px 0px 0px' });

    revealSections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  useEffect(() => {
    const hasEntered = status === 'entered';
    const supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style;
    let scrollObserver;
    let scrollTimeout;

    const handleHashchange = (hash, scroll) => {
      clearTimeout(scrollTimeout);
      const hashSections = [intro, projectOne, projectTwo, projectThree, about];
      const hashString = hash.replace('#', '');
      const element = hashSections.filter(item => item.current.id === hashString)[0];
      if (!element) return;
      const behavior = scroll && !prefersReducedMotion ? 'smooth' : 'instant';
      const top = element.current.offsetTop;

      scrollObserver = new IntersectionObserver((entries, observer) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          scrollTimeout = setTimeout(() => {
            element.current.focus();
          }, prefersReducedMotion ? 0 : 400);
          observer.unobserve(entry.target);
        }
      }, { rootMargin: '-20% 0px -20% 0px' });

      scrollObserver.observe(element.current);

      if (supportsNativeSmoothScroll) {
        window.scroll({
          top,
          left: 0,
          behavior,
        });
      } else {
        window.scrollTo(0, top);
      }
    };

    if (hash && initHash.current && hasEntered) {
      handleHashchange(hash, false);
      initHash.current = false;
    } else if (!hash && initHash.current && hasEntered) {
      window.scrollTo(0, 0);
      initHash.current = false;
    } else if (hasEntered) {
      handleHashchange(hash, true);
    }

    return () => {
      clearTimeout(scrollTimeout);
      if (scrollObserver) {
        scrollObserver.disconnect();
      }
    };
  }, [hash, state, prefersReducedMotion, status]);

  return (
    <Fragment>
      <Helmet>
        <title>Suryansh Tripathi | Developer and Programmer</title>
        <meta
          name="description"
          content="Portfolio of suryansh tripathi , a full-stack developer and competitive Programmer"
        />
        <link rel="prefetch" href={iphone11} as="fetch" crossorigin="" />
        <link rel="prefetch" href={macbookPro} as="fetch" crossorigin="" />
      </Helmet> 
      <ProjectBackground
          srcSet={`${backg} 1000w, ${backg} 1920w`}
          placeholder={backg}
          entered={!prerender}
        />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Portfolio Webapp"
        description="Single page Portfolio webapp made using Flutter web-support"
        buttonText="View Project"
        buttonTo="/projects/modern"
        model={{
          type: 'laptop',
          alt: 'The Flutter Project landing page',
          textures: [
            {
              src: modernTexture,
              srcSet: `${modernTexture} 800w, ${modernTexture} 1440w`,
              placeholder: modernTexture,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Flutter Social Media App"
        description="Social media platform where we can share, like and post images."
        buttonText="View Project"
        buttonTo="/projects/dtt"
        model={{
          type: 'phone',
          alt: ' Social Media App',
          textures: [
            {
              src: dttTexture,
              srcSet: `${dttTexture} 800w, ${dttTexture} 1440w`,
              placeholder: dttTexture,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Virtual Labs"
        description="Developed some virtual labs for IIT, Bombay"
        buttonText="View Project"
        buttonTo="/projects/mystgang"
        model={{
          type: 'laptop',
          alt: 'MystGang Website',
          textures: [
            {
              src: vlab,
              srcSet: `${vlab} 800w, ${vlab} 1440w`,
              placeholder: vlab,
            },
          ],
        }}
      />
      <Profile
        sectionRef={about}
        visible={visibleSections.includes(about.current)}
        id="about"
      />
      <Footer />
    </Fragment>
  );
}
