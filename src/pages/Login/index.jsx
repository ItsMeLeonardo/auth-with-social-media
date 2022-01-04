import { Link, useNavigate } from "react-router-dom";

import "./styles.css";
import FormLayout from "../../components/Form/FormLayout";
import FormField from "../../components/Form/FormField";
import Back from "../../components/Link/Back";
import { useForm } from "react-hook-form";
import { useAuth } from "../../Hooks/useAuth";

function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const { signUp, error } = useAuth();

  const onSubmit = (data) => {
    signUp({ ...data }, () => navigate("/"));
  };

  return (
    <>
      <Back to="/" />
      <FormLayout title="Sign up">
        <section className="Login-row">
          <form className="Form" onSubmit={handleSubmit(onSubmit)}>
            <FormField
              type="email"
              placeholder="example@gmail.com"
              label="Email"
              register={register("email", { required: true })}
              errorType={errors?.email?.type}
            />
            <FormField
              type="password"
              placeholder="********"
              label="Password"
              register={register("password", { required: true })}
              errorType={errors?.password?.type}
            />

            <div className="Form-aside">
              <label className="Form-label gap-1" htmlFor="remenber">
                <input
                  className="Form-checkbox"
                  type="checkbox"
                  name="remenber"
                  id="remenber"
                />
                <span className="Form-label Link">Remenber me</span>
              </label>
              <a href="#" className="Form-label Link">
                Forgot Password?
              </a>
            </div>

            <FormField type="submit" label="Submit" errorType={error} />
          </form>
        </section>

        <aside className="small-text">
          No yet a member?{" "}
          <Link to="/register" className="Link">
            Register
          </Link>
        </aside>
      </FormLayout>
    </>
  );
}

export default Login;
