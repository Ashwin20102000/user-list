/* eslint-disable react/react-in-jsx-scope */
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export const LinearProgressLoader = () => {
  return (
    <Box sx={{ width: '100%',position:'relative' }}>
      <LinearProgress color='secondary' />
    </Box>
  );
}
