import React, { useState } from 'react'
import './dashboard.css';
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, userRegister } from '../redux/UserSlice';
import { AiFillDelete } from "react-icons/ai";
import { deletedoctor} from '../redux/DoctorSlice';
// import { Button } from 'bootstrap';
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
// import Swal from 'sweetalert2';
// import AddDoctor from './AddDoctor';
import EditDoctor from './EditDoctor';


function Dashboard({ ping, setping, el }) {
    const [text, settext] = useState("")
    const [statePayment, setStatePayment] = useState("payeé")
    const doctors = useSelector((state) => state.doctor?.doctors);
    console.log("doctors");
    const users = useSelector((state) => state.user?.users);




























    console.log(users)
    const dispatch = useDispatch();
    return (
        <div >

            <div className="Appa4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6" >
                            <ul className="topbar-list" style={{ listStyle: "none", textDecoration: "none", color: "white", justifyContent: "space-around" }}>
                                <li>
                                    <AiFillFacebook style={{ width: "20px", margin: "2px", color: "white", fontSize: "30px" }} />

                                    <AiFillTwitterSquare style={{ width: "20px", margin: "2px", color: "white", fontSize: "30px" }} />
                                    <AiFillInstagram style={{ width: "20px", margin: "2px", color: "white", fontSize: "30px" }} />
                                    < AiFillLinkedin style={{ width: "20px", margin: "2px", color: "white", fontSize: "30px" }} />
                                </li>
                                <li >
                                    <a href="#!" style={{ textDecoration: "none" }}>
                                        <span style={{ color: "white" }}>+011 234 567 89</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" style={{ textDecoration: "none" }}>
                                        <span style={{ textDecoration: "none", color: "white" }}> contact@domain.com</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <hr style={{
                            color: "white",
                            backgroundColor: "white",
                            height: "1px"
                        }} />
                    </div>
                </div>

</div>

<div id="banner-leaderboard"><a href="/repertoire-sante.php" title="Le répertoire santé du Québec">
                    <img src="	https://www.indexsante.ca/images/index-sante-04.jpg" alt="Le répertoire santé du Québec" /></a></div>

                <div class="clear">

                </div>
                {/* navbar */}

                {/* <ul className="nav flex-column text-white w-100">

                    <img src="" style={{ width: "210px" }} />

                    <li href="#" className="nav-link">
                        <i className="bx bxs-dashboard" />
                        <span className="mx-2"><Link style={{ textDecoration: "none", color: "white", fontFamily: "Poppins, sans-serif" }} to="/">Home</Link></span>
                    </li>
                    <li href="#" className="nav-link">
                        <i className="bx bx-user-check" />
                        <span className="mx-2"><Link style={{ textDecoration: "none", color: "white", fontFamily: "Poppins, sans-serif" }} to="/hotels">Hotels</Link></span>
                    </li>

                    <li href="#" className="nav-link">
                        <i className="bx bx-conversation" />
                        <span className="mx-2"><Link style={{ textDecoration: "none", color: "white", fontFamily: "Poppins, sans-serif" }} to="/about">About</Link></span>
                    </li>
                    <li href="#" className="nav-link">
                        <i className="bx bx-conversation" />
                        <span className="mx-2"><Link style={{ textDecoration: "none", color: "white", fontFamily: "Poppins, sans-serif" }} to="/contact">Contact</Link></span>
                    </li>
                    <li href="#" className="nav-link">
                        <i className="bx bx-conversation" />
                        <span className="mx-2"><Link style={{ textDecoration: "none", color: "white", fontFamily: "Poppins, sans-serif" }} to="/connexion">Connexion</Link></span>
                    </li>
                    <li href="#" className="nav-link">
                        <i className="bx bx-conversation" />
                        <span className="mx-2"><Link style={{ textDecoration: "none", color: "white", fontFamily: "Poppins, sans-serif" }} to="/dashboard">Dashboard</Link></span>
                    </li> */}

                    {/* <div className="Na">


                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="common_bannner_text">
                                        <h2 style={{ width: "400px", fontSize:"30px" }}>Customer dashboard</h2>
                                        <ul style={{ listStyle: "none", fontSize:"30px" }}>
                                            <li><a href="index.html" style={{ textDecoration: "none", color: "white" }}>Home</a></li>
                                            <li style={{ marginLeft: "20px" }}><span ><i class="fas fa-circle"></i></span> dashboard</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                {/* </ul>

            </div> */}
            {/* <div className="Bot">
                <AddDoctor ping={ping} setping={setping}/>

            </div> */}

            {/* dashboard */}
            <div class="Class">
                <div class="col-lg-10">
                    <div class="dashboard_sidebar" >
                        <div class="dashboard_sidebar_user">
                            <img src="https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=600"  alt="img" />
                            <h3>Arem Atoui</h3>
                            <p><a href="tel:+00-123-456-789">+216 27793044</a></p>
                            <p><a href="mailto:sherlyn@domain.com">arem.atoui@gmail.com</a></p>
                        </div>

                        <div class="dashboard_menu_area">
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <Row>
                                    <Col sm={3}>
                                        <Nav variant="pills" className="flex-columne">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Dotors</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Users</Nav.Link>
                                            </Nav.Item>
                                            {/* <Nav.Item>
                                                <Nav.Link eventKey="third">Reservation</Nav.Link>
                                            </Nav.Item> */}
                                            <Nav.Item>
                                                <Nav.Link eventKey="four" style={{width: "87px"}}>My-Profile</Nav.Link>
                                            </Nav.Item>

                                        </Nav>
                                    </Col>
                                    <Col sm={9} style={{
                                        marginLeft: "334px",
                                        marginTop: "-270px"

                                    }}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="first">
                                                <div class="table-responsive-lg table_common_area">
                                                    <table class="table" style={{    marginLeft: "-125px", width: "1050px"}}>
                                                        <thead>
                                                            <tr style={{ color: "green", fontFamily: "serif" }}>
                                                                <th>Image</th>
                                                                <th>Name</th>
                                                                <th>Specialité</th>
                                                                <th>Adresse</th>
                                                                <th>Email</th>
                                                                <th>Téléphone</th>
                                                                {/* <th>Images</th> */}
                                                                <th>Grade</th>
                                                                <th>Prix</th>
                                                                <th>Region</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody style={{ paddingLeft: "px", color:"black" }}>

                                                            {doctors?.map((el) => <tr style={{ fontSize: "15px" }}>
                                                                    <td><img src={el.image} width="80" height="80" /></td>
                                                                    <td style={{color:"black" }}>{el.name}</td>
                                                                    <td>{el.specialité}</td>
                                                                    <td>{el.adresse}</td>
                                                                    <td >{el.email}</td>
                                                                    <td>{el.téléphone}</td>
                                                                    <td>{el.grade}</td>
                                                                    <td>{el.prix}</td>
                                                                    <td>{el.region}</td>
                                                                    <td>
                                                                    <AiFillDelete style={{ fontSize: "40px" }}   className="Btn"onClick={() => { dispatch(deletedoctor(el._id)); setping(!ping) }}
                                                                        /> </td>
                                                                    <td>
                                                                        <EditDoctor el={el} ping={ping} setping={setping} /></td>

                                                                </tr>)
                                                                .sort()}
                                                        </tbody>
                                                    </table>
                                                </div>


                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <div class="table-responsive-lg table_common_area">
                                                    <table class="table">
                                                        <thead>
                                                            <tr style={{ color: "green", fontFamily: "serif" }}>
                                                                <th>Image</th>
                                                                <th>Name</th>
                                                                <th>LastName</th>
                                                                <th>Email</th>

                                                                {/* <th>Images</th> */}
                                                                <th></th>
                                                                <th></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            {users
                                                                ?.map((el) =>
                                                                    <tr>
                                                                        <td><img src={el?.image} width="80" height="80" /></td>
                                                                        <td style={{ paddingLeft: "23px" }}>{el?.name}</td>
                                                                        <td>{el?.lastName}</td>
                                                                        <td>{el?.email}</td>
                                                                        <AiFillDelete style={{ fontSize: "40px" }} onClick={() => { dispatch(deleteUser(el._id)); setping(!ping) }}
                                                                        />
                                                                    </tr>)
                                                            }



                                                        </tbody>
                                                    </table>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="third">
                                                <div class="table-responsive-lg table_common_area">
                                                    <table class="table">
                                                        <thead>
                                                            <tr style={{ color: "green", fontFamily: "serif" }}>
                                                                <th>User</th>
                                                                <th>NameHotel</th>
                                                                <th>DateArrive</th>
                                                                <th>DateSortie</th>
                                                                <th>Price</th>

                                                                <th></th>
                                                                <th></th>
                                                            </tr>
                                                        </thead>
                                                        {/* <tbody>

                                                            {reservation?.filter(el => el.state == statePayment)?.map((el) => <tr style={{ fontSize: "15px" }}>
                                                                <td>{el.User} </td>
                                                                <td style={{ paddingLeft: "23px" }}>{el.nameHotel}</td>
                                                                <td>{el.dateArrive}</td>
                                                                <td>{el.dateSortie}</td>
                                                                <td class="complete">{el.price}</td>
                                                                <AiFillDelete style={{ fontSize: "40px" }} onClick={() => { dispatch(deletereservation(el._id)); deleteREservation(); setping(!ping) }} />


                                                            </tr>)}
                                                              
                                                        </tbody> */}
                                                    </table>
                                                </div>
                                                <div style={{ display: "flex", width: "300px" }}>
                                                    <button style={{ margin: "20px", color: "red", width: "300px", height: "60px", borderRadius: "12px" }} onClick={() => setStatePayment(" non payeé")}> non payeé</button>

                                                    <button style={{ margin: "20px", color: "green", width: "240px", height: "60px", borderRadius: "12px" }} onClick={() => setStatePayment("payeé")}> payeé</button></div>

                                                {/* {reservation?.map((el)=><EditReservation/>)} */}

                                            </Tab.Pane>
                                            <Tab.Pane eventKey="four">
                                                <div class="table-responsive-lg table_common_area">
                                                    <table class="table">
                                                        <thead>

                                                        </thead>
                                                        <tbody>
                                                            <div class="dashboard_common_table">
                                                                <h3>My Profile</h3>

                                                                <div class="profile_update_form">
                                                                    <form action="!#" id="profile_form_area">
                                                                        <div class="row">
                                                                            <div class="col-lg-6">
                                                                                <div class="form-group">
                                                                                    <label for="f-name">First name</label>
                                                                                    <input type="text" class="form-control" id="f-name" placeholder="Your Name" value="Arem" />
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-6">
                                                                                <div class="form-group">
                                                                                    <label for="l-name">Last name</label>
                                                                                    <input type="text" class="form-control" id="l-name" value="atoui" />
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-6">
                                                                                <div class="form-group">
                                                                                    <label for="mail-address">Email address</label>
                                                                                    <input type="text" class="form-control" id="mail-address" value="arem.atoui@isimg.tn" />
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-6">
                                                                                <div class="form-group">
                                                                                    <label for="mobil-number">Mobile number</label>
                                                                                    <input type="text" class="form-control" id="mobil-number" value="+216 27793044" />
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-6">
                                                                                <div class="form-group">
                                                                                    <label for="u-name">User name</label>
                                                                                    <input type="text" class="form-control" id="u-name" value="Arem" />
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-6">
                                                                                <div class="form-group change_password_field">
                                                                                    <label for="password">Password</label>
                                                                                    <input type="password" class="form-control" id="password" value="cdkdkdd" />
                                                                                    {/* <p>Change password</p> */}
                                                                                </div>
                                                                            </div>
                                                                            <div class="change_password_input_boxed">
                                                                                <h3>Change password</h3>
                                                                                <div class="row">
                                                                                    <div class="col-lg-6">
                                                                                        <div class="form-group">
                                                                                            <input type="password" class="form-control" placeholder="Old Password" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-lg-6">
                                                                                        <div class="form-group">
                                                                                            <input type="password" class="form-control" placeholder="New Password" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>



                                                        </tbody>
                                                    </table>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>

                                    </Col>
                                </Row>
                            </Tab.Container>
                        </div>


                    </div>
                </div>

            </div>




{/* <Footer/> */}






        </div>
    )
}

export default Dashboard