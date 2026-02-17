import React from 'react'
import { useAuth } from '../../context/Auth'
import { Card, Typography } from '@mui/material'
///checking redux tookit features 
import { useSelector  , useDispatch} from 'react-redux'
import { displayName } from '../../features/counter/NameSlice'
///checking redux tookit features 

const AdminHome = () => {
///checking redux tookit features 

  const displayNameValue = useSelector((state) => state.displayName.value)
  const dispatch = useDispatch()
  ///checking redux tookit features 

    const [auth] = useAuth()
  return (

     <>
      <Typography variant="h4">Welcome to Admin Dashboard</Typography>


      <Card sx={{ p: 2, mt: 2 }}>
        <Typography><strong>Name:</strong> {auth?.user?.name}</Typography>
        <Typography><strong>Email:</strong> {auth?.user?.email}</Typography>
        <Typography><strong>Role:</strong> {auth?.user?.role}</Typography>
      </Card>
      {/* ///checking redux tookit features  */}
      <button onClick={() => dispatch(displayName())}>Display Name</button>
      <Typography variant="h6">{displayNameValue}</Typography>
      {/* ///checking redux tookit features  */}

    </>
  )
}

export default AdminHome