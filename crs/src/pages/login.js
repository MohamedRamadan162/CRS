import { Inter } from "next/font/google";
import { useState } from "react";
import bcrypt from 'bcryptjs';

const inter = Inter({ subsets: ["latin"] });

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const result = await fetch(`/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userEmail: email, userPassword: "123" }),
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
      console.error("Username or password is incorrect", error);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = async (e) => {
    const salt = await bcrypt.genSalt(10); // You can increase the salt rounds for more security
    const hashedPassword = await bcrypt.hash(e.target.value, salt);
    setPassword(hashedPassword);
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
      <link rel="stylesheet" href="le.css" />
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">Rent a car</h2>
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
                    <button
                      onClick={login}
                      type="submit"
                      className="form-control btn btn-primary rounded submit px-3"
                    >
                      Login
                    </button>
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
