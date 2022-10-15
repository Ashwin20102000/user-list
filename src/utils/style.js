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
}

export const errorText = {color:"#E75F42",marginLeft:"1rem"}