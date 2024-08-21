import { Box } from '@mui/material';
import { Footer, Header } from 'components';

import type { IPageLayout } from './types';

const PageLayout: React.FC<IPageLayout> = ({ sx, children }: IPageLayout) => {
  console.log(sx);
  console.log(children);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh',
      }}
    >
      <Header />
      <main>
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {children}
        </Box>
      </main>
      <Footer />
    </Box>
  );
};

export default PageLayout;
