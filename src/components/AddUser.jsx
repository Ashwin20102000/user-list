import { AddCircleRounded } from '@mui/icons-material'
import { Backdrop, Box, Button, Dialog,  FormGroup, Input, Modal, Typography } from '@mui/material'
import React from 'react'
import { AddUserBox, errorText, formStyle, modalStyle } from '../utils/style';
import {  useForm } from 'react-hook-form';
import { keys } from '../utils/keys';
import Toast from './Toast/Toast';
import { addUserValidator, fields } from '../helpers/validator';
import { addUser } from '../redux/usersSlice';
import { useDispatch } from 'react-redux';

const AddUser = () => {
  const { register, handleSubmit,reset,  formState: { errors } } = useForm();
  const [open,setOpen] = React.useState(false);
  const [toast,setToast] = React.useState(false);
  const handleClose = ()=> setOpen(false);
  const [message,setMessage] = React.useState({message:"Added User Successfully",variant:"success"});
  const dispatch = useDispatch();
const onSubmit = async(data) =>{
  setToast(true); 
    try {
      const validatorRes = addUserValidator(data);
      if(validatorRes.error){
        setMessage({message:`${validatorRes.message} on field ${validatorRes.field}`,variant:"error"});
        return;
      }
      // const res = await usersService.AddUser(data);
      const res = await fetch(keys.usersApi,{
         method: 'POST', 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
      })
      if(res.status>=200 && res.status < 300){
        dispatch(addUser(data));
        setMessage({message:"Added User Successfully",variant:"success"})
        setOpen(false);
        reset();
      }
    } catch (error) {
      console.log( {error})
      setMessage({message:error.message,variant:"error"})
    }
    finally{
      setTimeout(()=>{
        setToast(false)
        setOpen(false)
      },1e3)
    }
  }

  // console.log({toast,message})
  return (
    <Box sx={AddUserBox}>
      <Button onClick={()=>{setOpen(true)}} variant='contained' startIcon={<AddCircleRounded />}> Add User</Button>
       
       
        <Modal
          aria-labelledby="transition-modal-title"
          onClose={handleClose}
          open={open}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}        
        >

        <Box component={"form"} sx={formStyle}  onSubmit={handleSubmit(onSubmit)}>
          <Typography sx={{color:'text.primary'}} id="transition-modal-title" variant="h6" component="h2">Add User</Typography>
           <Input
           placeholder={fields.first_name}
           inputComponent="input"
           sx={{margin:'1rem'}}
           {...register("first_name",{required:true})} 
           />
             {errors.first_name && <Typography component="small" sx={errorText}>This field is required *</Typography>}
            <Input 
            sx={{margin:'1rem'}}
            inputComponent="input"
           placeholder={fields.last_name}
            {...register("last_name", { required: true })} />
            { errors.last_name && <Typography component="small" sx={errorText}>This field is required*</Typography>}
            
             <Input 
            sx={{margin:'1rem'}}
            inputComponent="input"
           placeholder={fields.email}
            {...register("email", { required: true,validate:"/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" })} />
            { errors.email && <Typography component="small" sx={errorText}>This field is required*</Typography>}

            <Button variant='contained' type="submit">Submit</Button>
            </Box>
            </Modal>
      {toast && <Toast message={message.message} variant={message.variant} open={toast} handleClose={()=>setToast(false)} />}
    </Box>
  )
}

export default AddUser