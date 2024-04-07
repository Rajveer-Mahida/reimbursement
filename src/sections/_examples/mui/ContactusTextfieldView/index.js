// @mui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router';
//
import ContactusTextfield from './ContactusTextField';

// ----------------------------------------------------------------------

const TABS = [
  {
    value: 'outlined',
    label: 'Outlined',
    component: <ContactusTextfield variant="outlined" />,
  },
];

// ----------------------------------------------------------------------

export default function ContactusTextfieldView() {
  const currentTab = "outlined";
  const navigate = useNavigate();
  const handleSave = () => {
    alert("Your Data has been successfully saved !!!")
    navigate('/', { replace: true });
  }
  return (
    <Container>
      <form noValidate autoComplete="off">
        {TABS.map(
          (tab) =>
            tab.value === currentTab && (
              <Box key={tab.value} sx={{ my: 5 }}>
                {tab.component}
              </Box>
            )
        )}
      </form>
    </Container>
  );
}
