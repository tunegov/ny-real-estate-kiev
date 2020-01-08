import React from 'react';
import { withTranslation } from '@server/i18n';

import '@styles/components/Footer.scss';
import { TFunction } from 'next-i18next';

type Link = {
  url: string;
  key: string;
};

const LINKS_1: Link[] = [
  {
    url: '',
    key: 'footer.links.flat'
  },
  {
    url: '',
    key: 'footer.links.selling'
  },
  {
    url: '',
    key: 'footer.links.rent'
  },
  {
    url: '',
    key: 'footer.links.property'
  },
  {
    url: '',
    key: 'footer.links.new_building'
  },
  {
    url: '',
    key: 'footer.links.buy'
  }
];

const LINKS_2: Link[] = [
  {
    url: '',
    key: 'footer.links.flat'
  },
  {
    url: '',
    key: 'footer.links.selling'
  },
  {
    url: '',
    key: 'footer.links.rent'
  },
  {
    url: '',
    key: 'footer.links.property'
  },
  {
    url: '',
    key: 'footer.links.new_building'
  },
  {
    url: '',
    key: 'footer.links.buy'
  }
];

const LINKS_3: Link[] = [
  {
    url: '',
    key: 'footer.links.flat'
  },
  {
    url: '',
    key: 'footer.links.selling'
  },
  {
    url: '',
    key: 'footer.links.rent'
  },
  {
    url: '',
    key: 'footer.links.property'
  },
  {
    url: '',
    key: 'footer.links.new_building'
  },
  {
    url: '',
    key: 'footer.links.buy'
  }
];

const SOCIAL_LINKS = [
  {
    className: 'social-link telegram',
    href: ''
  },
  {
    className: 'social-link facebook',
    href: ''
  },
  {
    className: 'social-link instagram',
    href: ''
  }
];

interface Props {
  t: TFunction;
}

const Footer = ({ t }: Props) => {
  const renderLinks = () => {
    return (
      <div className="footer-links">
        <div className="footer-links-inner">
          <div className="footer-links-col">
            {LINKS_1.map(link => (
              <p key={link.key} className="footer-link">
                {t(link.key)}
              </p>
            ))}
          </div>
          <div className="footer-links-col">
            {LINKS_2.map(link => (
              <p key={link.key} className="footer-link">
                {t(link.key)}
              </p>
            ))}
          </div>
          <div className="footer-links-col">
            {LINKS_3.map(link => (
              <p key={link.key} className="footer-link">
                {t(link.key)}
              </p>
            ))}
          </div>
        </div>
        <div className="footer-social">
          {SOCIAL_LINKS.map(link => (
            <a href={link.href} className={link.className}></a>
          ))}
        </div>
      </div>
    );
  };
  const renderSubscripe = () => {
    return <div className="footer-subscribe">Подписаться</div>;
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {renderLinks()}
        {renderSubscripe()}
      </div>
      <div className="footer-image" />
    </footer>
  );
};

export default withTranslation('footer')(Footer);
