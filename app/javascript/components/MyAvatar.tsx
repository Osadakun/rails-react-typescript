import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'

import icon from '/images/icon.jpg'

const useStyles = makeStyles((theme) => ({
  // 表示サイズを指定
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
}));

const MyAvatar: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box p={2}>
        <Box display='flex' justifyContent='center' p={1} >
          <Avatar
            alt='Toshiki Ono'
            src={icon}
            className={classes.large}
          />
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Typography variant='h5' >
            Toshiki Ono
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default MyAvatar;