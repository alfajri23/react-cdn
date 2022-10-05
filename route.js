const Link = ReactRouterDOM.Link;
const Route = ReactRouterDOM.Route;

const Home = () => <h1>Home</h1>
const Login = () => <h1>Login</h1>
const Register = () => <h1>Register</h1>

function Apps(){
    return(
        <div>
            <ReactRouterDOM.HashRouter>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <div class="nav-link"><Link to="/">Home</Link></div>
                        <div class="nav-link"><Link to="/login">Login</Link></div>
                        <div class="nav-link"><Link to="/register">Register</Link></div>
                    </div>
                    </div>
                </div>
            </nav>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </ReactRouterDOM.HashRouter>
        </div>
        
    )
}



const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<Apps/>);