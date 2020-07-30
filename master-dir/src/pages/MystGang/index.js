import React, { lazy, useMemo, Suspense, Fragment } from 'react';
import { Helmet } from 'react-helmet-async'; 
import { useScrollRestore } from 'hooks';
import Footer from 'components/Footer';
import {
  ProjectContainer, ProjectBackground, ProjectHeader, ProjectSection,
  ProjectSectionContent, ProjectImage, ProjectSectionHeading,
  ProjectSectionText, ProjectTextRow
} from 'components/ProjectLayout';
import { media } from 'utils/style';
import prerender from 'utils/prerender'; 
  
import './index.css';
import vl from 'assets/backg1.jpg';
import block from 'assets/blockchain1.jpg';
import block1 from 'assets/blockchain.jpg';
import electron from 'assets/electron.jpg'
const Carousel = lazy(() => import('components/Carousel'));

const title = 'Virtual Labs';
const description = 'A Virtual lab.';
const roles = [
  'Virtual Lab',
  'Designing',
  'Front-end Development',
];

function MystGang() {
  useScrollRestore();

  return (
    <Fragment>
      <Helmet>
        <title>{`Projects | ${title}`}</title>
        <meta name="description" content={description} />
      </Helmet>
      <ProjectContainer>
        <ProjectBackground
          srcSet={`${vl} 1000w, ${vl} 1920w`}
          placeholder={vl}
          entered={!prerender}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="http://vlabs.iitb.ac.in/vlabs-dev/labs/blockchain/"
          roles={roles}
        />
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage
              reveal
              srcSet={`${block} 800w, ${block} 1440w`}
              placeholder={block}
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Landing screne of the MystGang website."
            />
          </ProjectSectionContent>
        </ProjectSection>
         
        <ProjectSection light>
          <ProjectSectionContent> 
            <ProjectTextRow center>
              <ProjectSectionHeading>Virtual Labs</ProjectSectionHeading>
              <ProjectSectionText>
              To provide remote-access to Labs in various disciplines of Science and Engineering. These Virtual Labs would cater to students at the undergraduate level, post graduate level as well as to research scholars. </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>


        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage
              reveal
              srcSet={`${electron} 800w, ${electron} 1440w`}
              placeholder={electron}
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Landing screne of the MystGang website."
            />
          </ProjectSectionContent>
        </ProjectSection>
        {/* carousal for all website pages*/}
          <ProjectSectionContent>
            <ProjectTextRow center>
              <ProjectSectionHeading>Virtual Labs </ProjectSectionHeading>
            </ProjectTextRow>
          </ProjectSectionContent>
          <ProjectSectionContent className="mystgang__carousel">
            <Suspense fallback={null}>
              <Carousel
                placeholder={block}
                images={useMemo(() => [
                  {
                    src: block,
                    srcSet: `${block} 960w, ${block} 1920w`,
                    alt: 'blockchain',
                  },
                  {
                    src: block1,
                    srcSet: `${block1} 960w, ${block1} 1920w`,
                    alt: 'blockchain1',
                  },
                  {
                    src: electron,
                    srcSet: `${electron} 960w, ${electron} 1920w`,
                    alt: 'electron microscopy for beginners ',
                  } 
                ], [])}
                width={1920}
                height={1080}
              />
            </Suspense>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}

export default MystGang;
