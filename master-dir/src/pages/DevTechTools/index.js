import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import Image from 'components/Image';
import Footer from 'components/Footer';
import {
  ProjectContainer, ProjectBackground, ProjectHeader, ProjectSection,
  ProjectSectionContent,  ProjectSectionHeading, ProjectSectionText,
  ProjectSectionColumns, ProjectTextRow
} from 'components/ProjectLayout';
import { useScrollRestore } from 'hooks';
import { media } from 'utils/style';
import prerender from 'utils/prerender';
import background from 'assets/backg1.jpg';
 


import dttTexture from 'assets/dtt.jpg';
import profile from 'assets/prof.jpg'
import upload from 'assets/upload.jpg'
const title = 'Flutter Social Media App';
const description = 'Social media platform where we can share, like and post images.';
const roles = [
  'Firebase',
  'UX and UI Design',
  'Full-stack Development',
];

function DevTechTools() {
  useScrollRestore();

  return (
    <Fragment>
      <Helmet>
        <title>{`Projects | ${title}`}</title>
        <meta name="description" content={description} />
      </Helmet>
      <ProjectContainer>
        <ProjectBackground
          srcSet={`${background} 1000w, ${background} 1920w`}
          placeholder={background}
          entered={!prerender}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://github.com/Suryansh1004/Fshare-Flutter"
          roles={roles}
        /> 
        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectTextRow>
              <ProjectSectionHeading>Login Using Google</ProjectSectionHeading>
              <ProjectSectionText>
                Backend is done using Firebase.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${dttTexture} 400w, ${dttTexture} 898w`}
              placeholder={dttTexture}
              height={50}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The DevTech Tools color palette and logo, featuring pipelines as electronic traces."
            />
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow noMargin>
              <ProjectSectionHeading>Features</ProjectSectionHeading>
              <ProjectSectionText>
                 Setup your profile and post pictures of yours.
              </ProjectSectionText>
              <ProjectSectionText>
                 Follow and Chat with your friends in realtime.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns alterate>
            <Image
              srcSet={`${profile} 400w, ${profile} 898w`}
              placeholder={profile}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The tool wrapper of the JSON to CSV data converter."
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Find other users on fshare</ProjectSectionHeading>
              <ProjectSectionText>
                Find and follow other users to see their profile and new posts on your timeline.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionColumns>
            <ProjectTextRow>
              <ProjectSectionHeading>Upload/Post beautiful images</ProjectSectionHeading>
              <ProjectSectionText>
                 You can post image/video instantly with a caption and the location where the shot was taken. 
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${upload} 400w, ${upload} 898w`}
              placeholder={upload}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="A snippet from the DevTech Tools API, converting data from JSON to CSV."
            />
          </ProjectSectionColumns>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}

export default DevTechTools;
