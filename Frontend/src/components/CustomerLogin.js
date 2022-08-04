import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./NavBars";
const CustomerLogin = () => {

	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		console.log(formData);

		let details = {
			email :formData.email,
			password:formData.password
			
		}
	
		let data = await axios.post("http://localhost:5000/CustomerLogin/LoginCustomer/",details );
		console.log("data",data.data.data.userRole);
		localStorage.setItem("userRole",data.data.data.userRole);
        navigate("/DisplayAllProduct");
	};


	return (
		<div className="login-form">
			 <Navbar /><br></br><br></br><br></br>
			<h1 className="heading">Customer Sign In</h1>
			<p className="lead">
				<i className="fas fa-user"></i> Sign Into customer 
			</p>
			<br />
			<form className="form" onSubmit={(e) => onSubmit(e)}>
				<div className="form-group">
					<input
						type="email"
						placeholder="Email Address"
						name="email"
						value={email}
						onChange={(e) => onChange(e)}
						required
					/>
				</div><br/>
				<div className="form-group">
					<input
						type="password"
						placeholder="Password"
						name="password"
				
						value={password}
						onChange={(e) => onChange(e)}
						required
					/>
				</div><br/>
			
				<button
            className="button"
            type="submit"  name="login" value="Login"
            style={{ marginTop: "16px" , color:"white" , backgroundColor:"black" , fontSize:"20px" , marginBottom:"20px",marginLeft: "2%"}}
      
          >
            {" "}
            <i className="far fa-check-square"></i>
            &nbsp;login
          </button>
			</form><br/>
			<p className="link">
				Don't have an account? <Link to="/registercustomer" className="button">Sign Up</Link>
			</p>
		</div>
	);
};

export default CustomerLogin;