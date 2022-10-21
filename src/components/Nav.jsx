/* eslint-disable react/prop-types */
import React from 'react'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import AppBar from '@mui/material/AppBar';
import { Box,  IconButton, Typography } from '@mui/material';
import { toCaps } from '../utils/formatter';
const Nav = ({theme,colorMode}) => {
  return <AppBar sx={{
    display:'flex',flexDirection:'row',
    height:"5rem",
    // position:'absolute',top:'0',
    justifyContent:'space-around',p:2}} position='static'>
     <Typography  sx={{mt:1}} variant="h5" component="div">
            User List
      </Typography>
      <Box sx={{dislay:'flex'}}>
        <Typography variant='h6'>
          { toCaps(theme.palette.mode)} Mode
      <IconButton
      className='id-test-toggle'
      size="large"
      edge="start"
      aria-label="open drawer"
      sx={{ mx: 1 ,background:'transparent'}}
      onClick={colorMode.toggleColorMode}
       color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
        </Typography>
      </Box>
  </AppBar>
}

export default React.memo(Nav);