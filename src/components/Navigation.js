import Navbar from 'react-bootstrap/Navbar';

import logo from '../logo.png';
import walletLogo from '../wallet.png';

const Navigation = ({ account }) => {
  return (
    <Navbar className='my-3'>
      <img
        alt="logo"
        src={logo}
        width="64"
        height="64"
        className="d-inline-block align-top mx-3"
      />
      <Navbar.Brand href="#">Axis DAO</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>

        {account ? (
            <Navbar.Text className='d-flex align-items-center'>
              {account.slice(0, 5) + '...' + account.slice(38, 42)}
              <img src={walletLogo} width={24} alt="Icon" style={{ marginLeft: '10px' }} />
            </Navbar.Text>                      
          ) : (
            <div>Please connect wallet</div>
          )}

        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
