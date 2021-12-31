import FormField from "../../components/Form/FormField";
import { useState } from "react";
import RequireAuth from "../../components/RequireAuth";

const AVATAR_DEFAULT =
  "https://images.unsplash.com/photo-1558473840-767aaeeeae45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGFuaW1lJTIwZ2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";

function EditAccount() {
  const [avatar, setAvatar] = useState(AVATAR_DEFAULT);
  const handleChangeAvatar = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setAvatar(url);

    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  return (
    <RequireAuth>
      <main className="EditAccount">
        <section className="EditAccount-avatar">
          <picture className="Avatar">
            <img src={avatar} alt="avatar" />
            <label className="Avatar-edit btn btn-icon" htmlFor="avatar">
              📷
            </label>
          </picture>
        </section>

        <section className="EditAccount-form">
          <form className="Form">
            <input
              type="file"
              name="avatar"
              id="avatar"
              hidden
              onChange={handleChangeAvatar}
            />
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
    </RequireAuth>
  );
}

export default EditAccount;
