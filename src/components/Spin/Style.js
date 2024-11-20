import { Backdrop, Box, styled } from "@mui/material";

export const Container = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  }));
  
 export const ShadowScreen = styled(Backdrop)(({ theme }) => ({
    color: '#fff',
    zIndex: theme.zIndex.drawer + 1,
  }));