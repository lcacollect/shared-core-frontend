import { Stack, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CardTitle, LcaButton, PaperPage, PaperPageStack } from '@lcacollect/components'

export const NotFoundPage: React.FC<unknown> = () => {
  const navigate = useNavigate()
  return (
    <PaperPageStack>
      <PaperPage data-testid='404-page' sx={{ paddingTop: 5 }}>
        <CardTitle title='Page Not Found' size='large' />
        <Typography id='404-description'>Sorry, but the page you were trying to view does not exist.</Typography>
        <Stack direction='row' spacing={2} justifyContent='flex-end' sx={{ paddingTop: 5 }}>
          <LcaButton onClick={() => navigate('/')}>Go to front page</LcaButton>
          <LcaButton onClick={() => navigate(-1)}>Go back</LcaButton>
        </Stack>
      </PaperPage>
    </PaperPageStack>
  )
}
