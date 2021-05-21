import React from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import Amphibians from '../../components/Amphibians'
import Birds from '../../components/Birds/birds'
import styles from './nav.module.css'
const Nav = () => {
   
        return (
            <div className={styles.container}>   
                    <Router>
                      <div>
                    <nav className={styles.menu}>
                        <ul>
                            <li>
                                <Link to='/'>Birds</Link>
                            </li>
                            <li>|</li>
    
                           <li>
                                <Link to='/amphibians'>Amphibians</Link>
                            </li>
                            <li>|</li>
                            
                            </ul>
                    </nav>
                    </div>
                    <hr></hr>
                    <Switch>
                        <Route exact path="/">
                            <Birds />
                         </Route>
                        <Route exact path="/amphibians">
                          <Amphibians />
                        </Route>
                    </Switch>
                    </Router>
                    
            </div>
        )
  
}

export default Nav
