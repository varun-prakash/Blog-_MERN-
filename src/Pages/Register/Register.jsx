import "./Register.css";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>User Name</label>
        <input type="text" placeholder="Enter your Name...." />
        <label>Email</label>
        <input type="email" placeholder="Enter your email...." />
        <label>Password</label>
        <input type="password" placeholder="Type your password...." />
        <button className="registerbtn">Register</button>
      </form>
      <button className="Registerbtn">Login</button>
    </div>
  );
}
