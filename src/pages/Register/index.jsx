import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import FormLayout from "../../components/Form/FormLayout";
import FormField from "../../components/Form/FormField";
import Back from "../../components/Link/Back";
import { useAuth } from "../../Hooks/useAuth";

function Register() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

  const { signIn } = useAuth();

  const onSubmit = (data) => {
    signIn({ user: data }, () => navigate("/"));
  };

  return (
    <>
      <Back to="/" />
      <FormLayout title="Sign in">
        <section className="Login-row">
          <form className="Form" onSubmit={handleSubmit(onSubmit)}>
            <FormField
              type="text"
              placeholder="full name"
              label="Name"
              register={register("name", { required: true })}
              errorType={errors?.name?.type}
            />
            <FormField
              type="text"
              placeholder="username"
              label="Username"
              register={register("username", { required: true, minLength: 5 })}
              errorType={errors?.username?.type}
            />
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
              register={register("password", { required: true, minLength: 5 })}
              errorType={errors?.password?.type}
            />

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
    </>
  );
}

export default Register;
