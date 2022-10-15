/* eslint-disable react/react-in-jsx-scope */
import {  TableCell } from "@mui/material";
import { flexAlignJust } from "./style";

export const FormatTableHeader = (header,width) => {
  const headerName = header!==""?header.slice(0,1).toUpperCase()+header.slice(1):"";
  let res = {
    field:header,
    headerName,
    width,
    headerAlign:"start"
  }
  if(header==="id"){
     res.renderCell = param => <TableCell sx={flexAlignJust} component='h6' scope='row'  >{param.value}</TableCell>
  }
  if(header==="avatar"){
    res.headerName = "";
    res.width=125
    res.renderCell = param =>{
      return (<TableCell align='center' component='image' scope='row' >
        <img width={40} style={{borderRadius:"60%",marginTop:"8px"}} alt="user image" className="table-image" src={param.value} />
      </TableCell>)};
  }
  else if(header==="email"){
     res.renderCell = param =>{
      return (<TableCell align='center' component='a' scope='row' >
        <a href={`mailto:${param.value}`} > {param.value}</a>
      </TableCell>)};
  }
  else{
    res.renderCell = param => <TableCell sx={flexAlignJust} component='h6' scope='row'  >{param.value}</TableCell>
  }
  return res;
}

export const formatUsersData = (users) => {

  const res = users.map((user)=>({avatar:(user.avatar),id:user.id,name:user.first_name,email:user.email}));
  return res;
}