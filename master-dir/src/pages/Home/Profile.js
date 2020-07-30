import React, { Fragment } from 'react';
import classNames from 'classnames';
import { Transition } from 'react-transition-group';
import { Link } from 'components/Link';
// import Anchor from 'components/Anchor';
import { Button } from 'components/Button';
import DecoderText from 'components/DecoderText';
import Divider from 'components/Divider';
import Image from 'components/Image';
import Section from 'components/Section';
import { reflow } from 'utils/transition';
import { media } from 'utils/style';
import profileImg from 'assets/profile.png';
  
import './Profile.css';

const ProfileText = ({ status, titleId }) => (
  <Fragment>
    <h2
      className={classNames('profile__title', `profile__title--${status}`)}
      id={titleId}
    >
      <DecoderText text="Hi" start={status !== 'exited'} delay={500} />
    </h2>
    <p className={classNames('profile__description', `profile__description--${status}`)}>
    I'm a third-year student at PSIT, Kanpur pursuing B.Tech in Computer Science and Engineering.
    Being a technology enthusiast, I like to explore new technologies and leverage them to solve 
    real-life problems.
    I am a designer, full-stack developer, and creator of web & mobile solutions with awesome user experience.
    </p>
    <p className={classNames('profile__description', `profile__description--${status}`)}>
      I’m always interested in new projects, so feel free to contact me.
    </p>
  </Fragment>
);

const Profile = ({ id, visible, sectionRef }) => {
  const titleId = `${id}-title`;

  return (
    <Section
      className="profile"
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible} timeout={0} onEnter={reflow}>
        {status => (
          <div className="profile__content">
            <div className="profile__column">
              <ProfileText status={status} titleId={titleId} />
              <Button
                secondary
                className={classNames('profile__button', `profile__button--${status}`)}
                as={Link}
                status={status}
                to="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className="profile__column">
              <div className="profile__tag" aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={status !== 'entered'}
                  collapseDelay={1000}
                />
                <div
                  className={classNames(
                    'profile__tag-text',
                    `profile__tag-text--${status}`
                  )}
                >
                  About Me
                </div>
              </div>
              <div className="profile__image-wrapper">
                <Image
                  reveal
                  className={classNames(
                    'profile__image',
                    `profile__image--${status}`
                  )}
                  delay={100}
                  placeholder={profileImg}
                  srcSet={`${profileImg} 480w, ${profileImg} 960w`}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt=""
                />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};

export default Profile;
