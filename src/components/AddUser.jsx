import styled from '@emotion/styled'
import { AddCircleRounded } from '@mui/icons-material'
import { Box, Button, Dialog, DialogContent, DialogTitle, FormGroup, Input, Typography } from '@mui/material'
import React from 'react'
import { AddUserBox, errorText, formStyle } from '../utils/style';
import {  useForm } from 'react-hook-form';
import { keys } from '../utils/keys';
import Toast from './Toast/Toast';

const AddUser = () => {
  const { register, handleSubmit,reset,  formState: { errors } } = useForm();
  const [open,setOpen] = React.useState(false);
  const [toast,setToast] = React.useState(false);
  const handleClose = ()=> setOpen(false);
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    width:"20rem"
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
const onSubmit = async(data) =>{
  console.log('data', data)
    try {
      setToast(true)
      const res = await fetch(keys.usersApi,{
         method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
      })
      // dispatch(addUser(data));
      if(res.status>=200 && res.status < 300){
        setOpen(false)
        reset();
      }
      setToast(false)
    } catch (error) {
      console.log('Error =>', error)
    }
  }

  return (
    <Box sx={AddUserBox}>
      <Button onClick={()=>{setOpen(true)}} variant='contained' startIcon={<AddCircleRounded />}> Add User</Button>
      <BootstrapDialog
        // closeAfterTransition
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        
        >
        <DialogTitle 
        sx={{width:"700"}}
        id="customized-dialog-title" onClose={handleClose}>
          Add User
        </DialogTitle>
        <DialogContent dividers>
          <Box style={formStyle} component="form" onSubmit={handleSubmit(onSubmit)}>
           <Input
           placeholder='First Name'
           inputComponent="input"
            sx={{margin:'1rem'}}
            {...register("first_name",{required:true})} 
            />
             {errors.first_name && <Typography component="small" sx={errorText}>This field is required *</Typography>}
            <Input 
            sx={{margin:'1rem'}}
            inputComponent="input"
            placeholder='Last Name'
            {...register("last_name", { required: true })} />
            { errors.last_name && <Typography component="small" sx={errorText}>This field is required*</Typography>}
            
             <Input 
            sx={{margin:'1rem'}}
            inputComponent="input"
            placeholder='Email'
            {...register("email", { required: true })} />
            { errors.email && <Typography component="small" sx={errorText}>This field is required*</Typography>}

            <Button variant='contained' type="submit">Submit</Button>

            </Box>
        </DialogContent>
      </BootstrapDialog>
      {toast && <Toast message="Added User Successfully" open={toast} handleClose={()=>setToast(false)} />}
    </Box>
  )
}

export default AddUser