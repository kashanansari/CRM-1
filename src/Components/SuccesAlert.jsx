import React from 'react'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export default function SuccesAlert({ succesMessage }) {
    return (
            <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                { succesMessage }
            </Alert>

    )
}
