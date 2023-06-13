import React from 'react'
import { Route } from 'react-router-dom'
import { PoolUpdater, ProtocolUpdater, TokenUpdater } from 'state/info/updaters'
import InfoNav from './components/InfoNav'
import Overview from './Overview'
import Pools from './Pools'
import PoolPage from './Pools/PoolPage'
import Tokens from './Tokens'
import RedirectInvalidToken from './Tokens/redirects'
import Footer from '../Home/components/Footer'

const Info: React.FC = () => {
  return (
    <>
      <ProtocolUpdater />
      <PoolUpdater />
      <TokenUpdater />
      <InfoNav />
      <Route path="/info" exact>
        <Overview />
      </Route>
      <Route path="/info/pools" exact>
        <Pools />
      </Route>
      <Route path="/info/tokens" exact>
        <Tokens />
      </Route>
      <Route exact path={['/info/tokens/:address', '/info/token/:address']} component={RedirectInvalidToken} />
      <Route exact path={['/info/pools/:address', '/info/pool/:address', '/info/pair/:address']} component={PoolPage} />
      <div className="socialFooter">
        <ul>
          <li><a href="https://twitter.com/the_spaceaifinance" rel="NoReferrer" target="_blank"><i className="fab fa-twitter no"><span>hidden space</span></i></a></li>
          <li><a href="ttps://www.instagram.com/the_spaceaifinance_/?__coig_restricted=1" rel="NoReferrer" target="_blank"><i className="fab fa-instagram"><span>hidden space</span></i></a></li>
          {/* <li><a href="https://www.instagram.com/the_spaceaifinance_/?__coig_restricted=1" rel="NoReferrer" target="_blank"><i className="fab fa-facebook-f"><span>hidden space</span></i></a></li> */}
          <li><a href="https://www.youtube.com/@the_spaceaifinance " rel="NoReferrer" target="_blank"><i className="fab fa-youtube"><span>hidden space</span></i></a></li>
          <li><a href="https://t.me/thespaceaifinance_community " rel="NoReferrer" target="_blank"><i className="fab fa-telegram-plane"><span>hidden space</span></i></a></li>
        </ul>
      </div>
      <Footer />
    </>
  )
}

export default Info
