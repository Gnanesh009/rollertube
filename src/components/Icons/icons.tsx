import { Icon } from '@mui/material'
import React, { Component } from 'react'

interface IconProps
{
    name:string,
    size:number
}

const Icons:React.FC<IconProps>=()=>{

    return(
        <Icon baseClassName='Home' />
    )

    

}

export default Icons