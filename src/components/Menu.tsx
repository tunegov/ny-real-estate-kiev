import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { TFunction } from 'next-i18next';

import { withTranslation } from '@server/i18n';

import '@styles/components/Menu.scss';

type LinkType = {
  href: string;
  label: string;
  innerLinks?: LinkType[];
};

const links: LinkType[] = [
  { href: '/team', label: 'menu.team' },
  {
    href: '/services',
    label: 'menu.services',
    innerLinks: [
      {
        href: '/services/buying_a_property',
        label: 'menu.services_list.buying_a_property'
      },
      {
        href: '/services/property_for_sale',
        label: 'menu.services_list.property_for_sale'
      },
      {
        href: '/services/legal_support',
        label: 'menu.services_list.legal_support'
      },
      {
        href: '/services/expert_review',
        label: 'menu.services_list.expert_review'
      },
      {
        href: '/services/free_consulting',
        label: 'menu.services_list.free_consulting'
      },
      {
        href: '/services/manufacturing_of_passports',
        label: 'menu.services_list.manufacturing_of_passports'
      }
    ]
  },
  { href: '/jobs', label: 'menu.jobs' },
  { href: '/partners', label: 'menu.partners' },
  { href: '/contacts', label: 'menu.contacts' }
];

interface MenuProps {
  t: TFunction;
}

interface LinkProps {
  router: any;
  t: TFunction;
}

const MenuLink = ({
  href,
  label,
  innerLinks,
  t,
  router
}: LinkProps & LinkType) => {
  const [collapsed, setCollapsed] = useState(true);

  const selected = router.asPath === href;

  const hasInnerLinks = !!innerLinks?.length;

  const toggleCollapsed = () => setCollapsed(!collapsed);

  return (
    <>
      <li
        className={`menu-item ${selected ? 'selected' : ''} ${
          hasInnerLinks ? 'with-inner-links' : ''
        }`}>
        {hasInnerLinks ? (
          <div className="menu-item-inner-links" onClick={toggleCollapsed}>
            <a>{t(label)}</a>
            <div
              className={`menu-item-arrow ${collapsed ? 'open' : 'close'}`}
              onClick={toggleCollapsed}
            />
          </div>
        ) : (
          <Link href={href}>
            <a>{t(label)}</a>
          </Link>
        )}
      </li>
      {!collapsed && hasInnerLinks && (
        <ul className="inner-links">
          {innerLinks?.map(link => (
            <MenuLink router={router} t={t} key={link.label} {...link} />
          ))}
        </ul>
      )}
    </>
  );
};

const Menu = ({ t }: MenuProps) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);

  const renderLinks = () => {
    return links.map(link => {
      return <MenuLink router={router} t={t} key={link.label} {...link} />;
    });
  };

  const renderMenu = () => (
    <>
      <nav className="menu">
        <div className="menu-inner">
          <div className="menu-close" onClick={closeMenu} />
          <ul>{renderLinks()}</ul>
        </div>
      </nav>
      <div className="menu-outer" onClick={closeMenu} />
    </>
  );

  return (
    <>
      <div className="menu-button" onClick={openMenu} />
      {open && renderMenu()}
    </>
  );
};

export default withTranslation('menu')(Menu);
