import { Link } from "react-router-dom";
import FormLayout from "../../components/Form/FormLayout";
import FormField from "../../components/Form/FormField";

function Register() {
  return (
    <FormLayout title="Sign in">
      <section className="Login-row">
        <form className="Form">
          <FormField type="text" placeholder="full name" label="Name" />
          <FormField type="text" placeholder="username" label="Username" />
          <FormField
            type="email"
            placeholder="example@gmail.com"
            label="Email"
          />
          <FormField type="password" placeholder="********" label="Password" />

          <FormField type="submit" label="Create account" />

          <div className="Form-aside">
            <a href="#" className="Form-label Link">
              Privacity Policy
            </a>
            <a href="#" className="Form-label Link">
              Terms and coditions
            </a>
          </div>
        </form>
      </section>
      <aside className="small-text">
        Already a member?{" "}
        <Link to="/login" className="Link">
          Login
        </Link>
      </aside>
    </FormLayout>
  );
}

export default Register;
