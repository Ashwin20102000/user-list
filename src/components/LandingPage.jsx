import { useTheme } from '@mui/material/styles';
import { useColorMode } from '../contexts/ColorModeProvider' 
import { Box } from '@mui/system';
import Nav from './Nav';
import { landingPageStyle } from '../utils/style';
import {LinearProgressLoader} from './common/Progress';
import React from 'react';
// import usersService from '../API/users';
import  { useDispatch , useSelector } from 'react-redux';
import { keys } from '../utils/keys';
import Table from './Table/Table';
import AddUser from './AddUser';

const LandingPage = () => {
  const theme = useTheme();
  const colorMode = useColorMode();
  const [loader,setLoader] = React.useState(false);
  const dispatch = useDispatch();
  const selector = useSelector(store=>store.users.users.data||[]);
  const getUsers = (() => {
    try {
      setLoader(true);
      setTimeout(()=>{
        setLoader(false);
        dispatch({type:keys.FETCH_DATA_SAGA});
      },1000)
    } catch (error) {
      console.log('error', error)
    }
  });
  
  React.useEffect(()=>{
    getUsers();
  },[])
  return (
    <Box sx={landingPageStyle}>
    <Nav theme={theme} colorMode={colorMode} />
    {loader && <LinearProgressLoader />}
    <AddUser />
    <Table users={selector} />
    </Box>
  );
}

export default LandingPage;