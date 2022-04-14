import { useState } from 'react';
import { Logo } from '../../core/Logo/Logo';
import { LogoContainer } from '../../core/LogoContainer/LogoContainer';
import { NavItemsContainer } from '../../core/NavItemsContainer/NavItemsContainer';
import { SidebarWrapper } from '../SidebarWrapper/SidebarWrapper';
import { navItems } from '../../../static/navItems';
import { NavItem } from '../../core/NavItem/NavItem';
import { NavIcon } from '../../core/NavIcon/NavIcon';
import { NavTitle } from '../../core/NavTitle/NavTitle';

export const Sidebar = () => {
  const [activeIcon, setActiveIcon] = useState(navItems[0].title);

  return (
    <SidebarWrapper>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavItemsContainer>
        {navItems.map((navItem) => (
          <NavItem
            key={navItem.title}
            onClick={() => {
              console.log('Clicked');
              setActiveIcon(navItem.title);
            }}
          >
            <NavIcon
              icon={navItem.icon}
              color={navItem.title === activeIcon && '#3773f5'}
            />
            <NavTitle title={navItem.title} />
          </NavItem>
        ))}
      </NavItemsContainer>
    </SidebarWrapper>
  );
};
