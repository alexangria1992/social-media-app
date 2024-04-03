import { useState } from "react";
import "./register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    passwword: "",
    name: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(inputs);
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Lama Social.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            excepturi voluptate laborum cupiditate, dolore libero! Fugiat
            ratione hic cumque ex?
          </p>
          <span>Don't have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>

        <div className="right">
          <h1>Register</h1>
          <form action="">
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
