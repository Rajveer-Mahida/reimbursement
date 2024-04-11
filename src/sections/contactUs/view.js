// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { useSettingsContext } from 'src/components/settings';
import ContactusTextfieldPage from 'src/pages/components/mui/contactustextfield';
import { Grid } from '@mui/material';

// ----------------------------------------------------------------------

export default function ContactUsView() {
  const settings = useSettingsContext();


  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4"> Contact Us </Typography>
      <Box
        sx={{
          mt: 2,
          width: 1,
          height: 1,
          borderRadius: 2,
          bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
          border: (theme) => `dashed 1px ${theme.palette.divider}`,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6} md={8}>
            <ContactusTextfieldPage />
          </Grid>
          <Grid item  xs={6} md={4}>
          Map
          </Grid>
        </Grid>
      </Box>


    </Container>
  );
}
