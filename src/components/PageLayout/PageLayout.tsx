import { Box } from '@mui/material';
import { Footer, Header } from 'components';



import { styles } from './styles';
import type { IPageLayout } from './types';


const PageLayout: React.FC<IPageLayout> = ({ sx, children }: IPageLayout) => {
  return (
    <Box
      sx={styles.layoutContainer}
    >
      <Header />
      <main>
        <Box
          sx={{
            ...sx,
            display: 'flex',
            minHeight: '55vh',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {children}
        </Box>
      </main>
      <Footer />
    </Box>
  );
};

export default PageLayout;