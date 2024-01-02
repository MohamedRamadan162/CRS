import { Inter } from "next/font/google";
import { useState } from "react";
import bcrypt from "bcryptjs";
import Swal from 'sweetalert2';

const inter = Inter({ subsets: ["latin"] });

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    if (email === "" || password === "") {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please fill in all fields',
        });
        return;
      }
      if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        Swal.fire({
          icon: 'error',
          title: 'Invalid Email',
          text: 'Please enter a valid email address',
        });
        return;
      }
    try {
      const result = await fetch(`/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userEmail: email, userPassword: password }),
      });

      if (!result.ok) {
        throw new Error('Response not OK');
      }

      const data = await result.json();
      console.log(data, 1); // Log data for debugging

      if (data) {
        window.location.href = "/";
      }
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid email or password',
            
          });
      console.error("Username or password is incorrect", error);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = async (e) => {
    
    setPassword(e.target.value);
  };

  return (
    <>
      <title>Sign in</title>
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
              <h2 className="heading-section">Welcome</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-7 col-lg-5">
              <div className="login-wrap p-4 p-md-5">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-user-o" />
                </div>
                <h3 className="text-center mb-4">Sign In</h3>
                <form method="POST" className="login-form">
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
                      type="button"
                      value="Login"
                      onClick={login}
                      className="btn btn-primary btn-block py-3"
                    />
                  </div>
                  <div className="form-group text-center">
                    <a href="/signup" className="signup-link">Don't have an account?</a>
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
