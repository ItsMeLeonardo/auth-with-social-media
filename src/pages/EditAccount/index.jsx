import FormField from "../../components/Form/FormField";
import Back from "../../components/Link/Back";

function EditAccount() {
  return (
    <>
      <Back to="/profile" />
      <main className="EditAccount">
        <section className="EditAccount-avatar">
          <picture className="Avatar">
            <img
              src="https://images.unsplash.com/photo-1558473840-767aaeeeae45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGFuaW1lJTIwZ2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
            />
            <button className="Avatar-edit btn-icon">📷</button>
          </picture>
        </section>

        <section className="EditAccount-form">
          <form className="Form">
            <FormField type="text" label="Name" placeholder="Full name" />
            <FormField type="text" label="Username" placeholder="username" />
            <FormField type="email" label="Email" placeholder="Email" />
            <FormField
              type="password"
              label="Password"
              placeholder="Password"
            />
            <FormField type="textarea" label="Bio" placeholder="Bio" />

            <button className="Form-button Form-button-edit">
              Save changes
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

export default EditAccount;
