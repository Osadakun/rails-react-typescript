import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

const Sample: React.FC = () => {
  return (
    <>
      <AppBar
        color='default'
        position='static'
        style={{ alignItems: 'center'}}
      >
        <Toolbar>
          <Button color='inherit'>
            INFORMATIONS
          </Button>
          <Button color='inherit'>
            CONTACT
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Sample;