import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import AuthUserPage from './AuthUserPage'
import AuthSchoolPage from './AuthSchoolPage'

export default function AuthPage():JSX.Element {
    const [choose,setChoose]=useState('')


  return (
<Box>
    <>
    <Button onClick={()=>setChoose('user')}>Регистрация для физ. лиц</Button>
    <Button onClick ={()=>setChoose('school')}>Регистрация для юр. лиц</Button>
    </>
    {choose === 'user' && <AuthUserPage/>}
    {choose === 'school' && <AuthSchoolPage/>}
</Box>
  )
}
