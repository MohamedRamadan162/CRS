import { Inter } from "next/font/google";
import { useState } from "react";
import bcrypt from "bcryptjs";
import Swal from "sweetalert2";

const inter = Inter({ subsets: ["latin"] });

export default function signUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signup = async () => {
    try {
      if (
        name === "" ||
        email === "" ||
        phone === "" ||
        password === "" ||
        confirmPassword === ""
      ) {
        Swal.fire("Oops...", "Please fill in all fields", "error");
        return;
      }
      if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        Swal.fire(
          "Invalid Email",
          "Please enter a valid email address",
          "error"
        );
        return;
      }
      if (!phone.match(/^\d+$/)) {
        Swal.fire(
          "Invalid Phone",
          "Phone number must contain only digits",
          "error"
        );
        return;
      }
      if (phone.length < 10) {
        Swal.fire(
          "Invalid Phone",
          "Phone number must be at least 10 digits long",
          "error"
        );
        return;
      }

    //   if (password.length < 8) {
    //     Swal.fire(
    //       "Weak Password",
    //       "Password must be at least 8 characters long",
    //       "error"
    //     );
    //     return;
    //   }
      if (password !== confirmPassword) {
        Swal.fire(
          "Password Mismatch",
          "Password and confirm password do not match",
          "error"
        );
        return;
      }
      const result = await fetch(`/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail: email,
          userName: name,
          userPassword: password,
          userConfirmPassword: confirmPassword,
          userPhone: phone,
          isAdmin: false,
        }),
      });


      if(!result.ok){
        throw new Error('Response not OK');
      }
      const data = await result.json();
      if (data) {
        window.location.href = "/customers";
      }
      
    
    } catch (error) {
        Swal.fire(
            "Error creating account",
            "error"
          );
      console.error("Error creating account", error);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handlePasswordChange = async (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = async (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <>
      <title>Sign up</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              {/* <h2 className="heading-section">Welcome</h2> */}
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-7 col-lg-5">
              <div className="login-wrap p-4 p-md-5">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-user-o" />
                </div>
                <h3 className="text-center mb-4">Register</h3>
                <form method="POST" className="signup-form">
                  <div className="form-group">
                    <input
                      onChange={handleNameChange}
                      type="name"
                      name="name"
                      className="form-control rounded-left"
                      placeholder="Name"
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      onChange={handleEmailChange}
                      type="email"
                      name="email"
                      className="form-control rounded-left"
                      placeholder="Email"
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      onChange={handlePhoneChange}
                      type="phone"
                      name="phone"
                      className="form-control rounded-left"
                      placeholder="Phone"
                      required=""
                    />
                  </div>
                  <div className="form-group d-flex">
                    <input
                      onChange={handlePasswordChange}
                      type="password"
                      name="password"
                      className="form-control rounded-left"
                      placeholder="Password"
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      onChange={handleConfirmPasswordChange}
                      type="password"
                      name="confirmPassword"
                      className="form-control rounded-left"
                      placeholder="Confirm Password"
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="button"
                      value="Sign up"
                      onClick={signup}
                      className="btn btn-primary btn-block py-3"
                    />
                  </div>
                  <div className="form-group text-center">
                    <a href="/login" className="login-link">
                      Already have an account?
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
