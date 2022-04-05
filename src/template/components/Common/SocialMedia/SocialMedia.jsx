import React from 'react';
import { SOCIAL_MEDIA_CONFIGS } from './configs/socialMedia.configs';

const SocialMedia = () => (
  <ul className="resetList menu__socialLinks socialList">
    {SOCIAL_MEDIA_CONFIGS.map(({ name, link }) => (
      <li key={name} className="socialList__item">
        <a
          href={link}
          target='_blank'
          rel='noreferrer'
          className="socialList__itemLink socialList__itemLink_facebook"
          aria-label={name}>
          <svg className="socialList__itemLinkSvg" viewBox="0 0 26 25">
            <use xlinkHref={`#${name}`} />
          </svg>
        </a>
      </li>
    ))}
  </ul>
);

export default SocialMedia;
