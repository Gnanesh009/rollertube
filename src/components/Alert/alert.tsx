import React, { Component, ReactNode } from 'react'

// import Alert from '@mui/material/Alert';
import Alert from '@mui/material/Alert';
import  AlertTitle  from '@mui/material/AlertTitle';

// import CheckIcon from '@mui/icons-material/Check';

interface AlertProps{
    title:string;
    message:string;
    icon?:ReactNode;
    message_type: 'error' | 'warning' | 'info' | 'success';
    // fontsize:'inherit'  | 'small' | 'large' | 'default';
}

const WindowAlert:React.FC<AlertProps>=({title,message,message_type})=>{
    return(   <Alert  severity={message_type as 'error' | 'warning' | 'info' | 'success'}  >
         <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>  )
}

export default WindowAlert