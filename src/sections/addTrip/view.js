// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
// components
import { useSettingsContext } from 'src/components/settings';
import AddTripTextfieldPage from 'src/pages/components/mui/addTriptextfield'

// ----------------------------------------------------------------------

export default function AddTripView() {
  const settings = useSettingsContext();
  const navigate = useNavigate();

  const handleSave = () => {
    alert("Your Data has been successfully saved !!!")
    navigate('/', { replace: true });
  }

  const handleCancel = () => {
    navigate('/', { replace: true });
  }

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4"> Add Your Trip Here </Typography>

      <Box
        sx={{
          mt: 2,
          width: 1,
          borderRadius: 2,
          bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
          border: (theme) => `dashed 1px ${theme.palette.divider}`,
        }}
      >
        <AddTripTextfieldPage />

        <Stack
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb={3}
        >
          <Button variant="contained" onClick={handleSave}>Save</Button>
          <Button variant="contained" onClick={handleCancel}>Cancel</Button>
        </Stack>
      </Box>
    </Container >
  );
}
