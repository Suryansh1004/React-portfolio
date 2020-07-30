import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import Image from 'components/Image';
import Footer from 'components/Footer';
import {
  ProjectContainer, ProjectBackground, ProjectHeader, ProjectSection,
  ProjectSectionContent, ProjectImage, ProjectSectionHeading, ProjectSectionText,
  ProjectSectionColumns, ProjectTextRow
} from 'components/ProjectLayout';
import { useScrollRestore } from 'hooks';
import { media } from 'utils/style';
import prerender from 'utils/prerender';   

import flutter from 'assets/flutter.jpg';
import backg from 'assets/backg1.jpg';
import port from 'assets/modern.jpg';

const title = 'Portfolio Webapp';
const description = 'Single page Portfolio webapp made using Flutter web-support.';
const roles = [
  'Flutter Development',
  'UX and UI Design',
  'Front-end Development',
];

function ProjectModern() {
  useScrollRestore();

  return (
    <Fragment>
      <Helmet>
        <title>{`Projects | ${title}`}</title>
        <meta name="description" content={description} />
      </Helmet>
      <ProjectContainer>
        <ProjectBackground
          srcSet={`${backg} 1000w, ${backg} 1920w`}
          placeholder={backg}
          entered={!prerender}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://portfolio-flutter-webapp.netlify.app/"
          roles={roles}
        />
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage
              reveal
              srcSet={`${port} 800w, ${port} 1440w`}
              placeholder={port}
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Landing screen of the DevTech Tools website."
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectTextRow>
              <ProjectSectionHeading>Google's Flutter</ProjectSectionHeading> 
              <ProjectSectionText>
              Flutter is Google’s UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${flutter} 400w, ${flutter} 898w`}
              placeholder={flutter}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The DevTech Tools color palette and logo, featuring pipelines as electronic traces."
            />
          </ProjectSectionColumns>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}

export default ProjectModern;
