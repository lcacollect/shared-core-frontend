import { Box } from '@mui/system'
import { DoDisturb } from '@mui/icons-material'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import { PaperPage, theme } from '@lcacollect/components'

export const MobileWarning = () => {
  return (
    <>
      <Box sx={{ marginTop: '64px' }}>
        <DoDisturb
          sx={{
            position: 'absolute',
            zIndex: 1,
            display: 'block',
            left: '50%',
            transform: 'translateX(-50%)',
            color: theme.palette.grey[200],
            width: '260px',
            height: '260px',
          }}
        />
        <PhoneAndroidIcon
          sx={{
            position: 'absolute',
            zIndex: 2,
            display: 'block',
            left: '50%',
            transform: 'translateX(-50%)',
            color: theme.palette.grey[200],
            width: '810px',
            height: '130px',
            top: '190px',
          }}
        />
      </Box>
      <PaperPage sx={{ width: '420px', marginTop: '350px', borderRadius: '4px' }}>
        We are sorry but this website is currently not available on mobile devices. We recommend that you access the
        page from your desktop computer instead.
        <p>Thank you for your interest</p>
      </PaperPage>
    </>
  )
}
