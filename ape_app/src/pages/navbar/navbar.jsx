import React from 'react'
import AppMobileNav from '../components/appMobileNav';
import TopLevelNav from '../components/topLevelNav';
import NavOutDesign from '../components/navOutDesign';
import ContainerNavPrimary from '../components/containerNavPrimary';
import GridContainer from '../components/gridContainer';
import GridItemsLeft from '../components/gridItemsLeft';
import GridItemsRight from '../components/gridItemsRight';

const NavBar = () => {
    return(
        <AppMobileNav>
            <TopLevelNav>
              <NavOutDesign>
              </NavOutDesign>
              <ContainerNavPrimary>
                <GridContainer>
                  <GridItemsLeft>
                    {/* Agregar Iconos de la parte superior izquierda */}
                  </GridItemsLeft>
                  <GridItemsRight>
                    {/* Agregar Iconos de la parte superior derecha */}
                  </GridItemsRight>
                </GridContainer>
              </ContainerNavPrimary>
            </TopLevelNav>
          </AppMobileNav>
    )

}

export default NavBar;