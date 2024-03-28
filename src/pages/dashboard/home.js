import { Helmet } from 'react-helmet-async';
// sections
import HomeView from 'src/sections/home/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Home</title>
      </Helmet>

      <HomeView />
    </>
  );
}
