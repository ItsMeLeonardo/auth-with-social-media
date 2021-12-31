import { Link } from "react-router-dom";

import "./styles.css";
import FormLayout from "../../components/Form/FormLayout";
import FormField from "../../components/Form/FormField";
import Back from "../../components/Link/Back";
import { useForm } from "react-hook-form";

function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log({ data });
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
              <label
                className="Form-label flex-center gap-1"
                htmlFor="remenber"
              >
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

            <FormField type="submit" label="Submit" />

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
