export const landingPageStyle = {
  display: 'flex',
  flexDirection:'column',
  width: '100%',
  position:'relative',
  bgcolor: 'background.default',
  color: 'text.primary',
  borderRadius: 1,
  minHeight:"100vh",
  paddingBottom:"2rem"
}

export const flexAlignJust = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}
export const tableStyle = {
  ...flexAlignJust,
  width: '100%',
  marginTop:'2rem',
}


export const AddUserBox = {
  ...flexAlignJust,
  justifyContent:'flex-end',
  marginTop:"2rem",
  marginRight:"3rem"
}

export const formStyle = {
  display: 'flex',
  flexDirection:'column',
  // width: 400,
  // bgcolor: 'background.primary',
  // border: '2px solid #000',
  // boxShadow: 24,
  // p: 4,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '.5px solid #000',
  borderRadius:"1rem",
  boxShadow: 12,
  transition:'.7s',
  p: 4,
}

export const modalStyle = {
  ...flexAlignJust,
  width:"100vw",
  height:"100vh",
}

export const errorText = {color:"#E75F42",marginLeft:"1rem"}