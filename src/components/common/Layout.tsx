import { Container } from '@mui/material';
import Header from './Header';

interface Props {
  children?: JSX.Element;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
