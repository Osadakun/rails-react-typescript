import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

const Navbar: React.FC = () => {
  return (
    <div>
      <AppBar
        color='default'
        position='static'
        style={{ alignItems: 'center'}}
      >
        <Toolbar>
          <AnchorLink href='#informations' style={{
            textDecoration: 'none',
            color: 'inherit'
          }}>
            <Button color='inherit'>
              INFORMATIONS
            </Button>
          </AnchorLink>
          <AnchorLink href='#contact' style={{
            textDecoration: 'none',
            color: 'inherit'
          }}>
            <Button color='inherit'>
              CONTACT
            </Button>
          </AnchorLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;