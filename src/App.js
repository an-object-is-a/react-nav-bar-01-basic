import './styles/normalise.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import Products from './components/Products.js';
import About from './components/About.js';


function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/products" component={Products} />
				<Route path="/about" component={About} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
