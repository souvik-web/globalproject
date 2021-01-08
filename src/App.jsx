import logo from './logo.svg';
import './Fonts.css';
import './App.css';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Homebanner from './Homebanner';
import Card from './Card';
import Sdata from './Sdata';
import Mcard from './Mcard';
import Mdata from './Mdata';
import Aboutcontent from './Aboutcontent';
import Tcontent from './Tcontent';
import Fcards from './Fcards';
import Fcontent from './Fcontent';
import Logo from '../src/images/logo.png';
import HomebannerImg from '../src/images/banner-img.png';
import web from '../src/images/home_about_img.png';
import home_testimonials_img from '../src/images/home_testimonials_img.png';

const App = () => {
    return (
    <>
        <Navbar bg="light" expand="lg">
            <div className="container lcontainer">
                <Navbar.Brand href="#"><img src={Logo} alt="Logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#">About Us</Nav.Link>
                        <Nav.Link href="#">Services</Nav.Link>
                        <Nav.Link href="#">Testimonials</Nav.Link>
                        <Nav.Link href="#">What Makes Us Different</Nav.Link>
                        <Nav.Link href="#">Contact us</Nav.Link>
                    </Nav>
                    <p className="topNav">Toll free: <strong>888.775.1500</strong></p>
                </Navbar.Collapse>
            </div>
        </Navbar>
        <div className="homebanner">
            <div className="container lcontainer">
                <Homebanner imgsrc={HomebannerImg} />
            </div>
        </div>
        <div className="bottomBanner">
            <div className="container lcontainer">
                <h2>What makes us different from</h2>
                <h3>other payment providers?</h3>
            </div>
        </div>
        <div className="homefeatures">
            <div className="container lcontainer mt-30">
                <div className="row">
                    {
                        Sdata.map((val, ind) => {
                            return (
                                <Card imgsrc={val.imgsrc} cardtitle={val.cardtitle} cardtext={val.cardtext} />
                            );
                        })
                    }
                </div>
                <a className="btn btn-primary">Speak With a Specialist</a>
            </div>
        </div>
        <div className="homeMSolutions">
            <div className="container lcontainer">
                <h2>Merchant <span>Solutions</span></h2>
                <a className="btn btn-primary">Contact Us</a>
                <div className="row">
                    {
                        Mdata.map((val, ind) => {
                            return (
                                <Mcard mcardimgsrc={val.mcardimgsrc} mcardalttext={val.mcardalttext} mcardtitle={val.mcardtitle} />
                            );
                        })
                    }
                </div>
            </div>
        </div>
        <section id="header" className="d-flex align-items-center">
            <div className="container lcontainer">
                <Aboutcontent imgsrc={web} />
            </div>
        </section>
        <div className="home_testimonials">
            <div className="container lcontainer">
                <Tcontent testimonialsimgsrc={home_testimonials_img} />
            </div>
        </div>
        <div className="footer">
            <div className="top_footer">
                <div className="container lcontainer">
                    <Fcards />
                </div>
            </div>
            <div className="bottom_footer">
                <div className="container lcontainer">
                    <Fcontent />
                </div>
            </div>
        </div>
    </>
  );
}

export default App;
