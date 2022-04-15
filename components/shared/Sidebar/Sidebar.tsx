import { useState } from 'react';
import { Logo } from '../../core/Logo/Logo';
import { LogoContainer } from '../../core/LogoContainer/LogoContainer';
import { NavItemsContainer } from '../../core/NavItemsContainer/NavItemsContainer';
import { SidebarWrapper } from '../SidebarWrapper/SidebarWrapper';
import { navItems } from '../../../static/navItems';
import { NavItem } from '../../core/NavItem/NavItem';
import { NavIcon } from '../../core/NavIcon/NavIcon';
import { NavTitle } from '../../core/NavTitle/NavTitle';
import { Box } from '@chakra-ui/react';

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
            key={navItem.id}
            onClick={() => setActiveIcon(navItem.title)}
            transform={
              navItem.title === activeIcon ? 'scale(1.05)' : 'scale(1)'
            }
            bg={navItem.title === activeIcon ? '#141519' : ''}
          >
            <NavIcon
              icon={navItem.icon}
              color={navItem.title === activeIcon ? '#3773f5' : 'white'}
            />
            <NavTitle title={navItem.title} />
          </NavItem>
        ))}
      </NavItemsContainer>
    </SidebarWrapper>
  );
};
