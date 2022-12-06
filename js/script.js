import Header from './header.js';
import Footer from './footer.js';
import Nav from './nav.js';
import RightNav from './rightNav.js';
import Main from './main.js';
import Search from '../components/searchBar/index.js';

customElements.define('my-header', Header);
customElements.define('my-footer', Footer);
customElements.define('my-nav', Nav);
customElements.define('my-right-nav', RightNav);
customElements.define('main-element', Main);
customElements.define('search-bar', Search);