import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../Hooks/useAuth";
import { editUserData } from "../../Services/user";
import RequireAuth from "../../components/RequireAuth";
import FormField from "../../components/Form/FormField";
import Image from "../../icons/Image";

function EditAccount() {
  const { register, handleSubmit } = useForm();
  const { user, updateUserData } = useAuth();
  const [avatar, setAvatar] = useState(user?.avatar);
  const navigate = useNavigate();

  const handleChangeAvatar = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setAvatar(url);

    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  const onSubmit = (data, event) => {
    const file = event.target.childNodes[0].files[0];
    const formData = new FormData();
    formData.append("avatar", file);

    Object.entries(data).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });

    editUserData({ user: formData })
      .then((data) => {
        updateUserData(data);
        navigate(`/profile/${user.id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <RequireAuth>
      <main className="EditAccount">
        <section className="EditAccount-avatar">
          <picture className="Avatar">
            <img src={avatar} alt="avatar" />
            <label className="Avatar-edit btn btn-icon" htmlFor="avatar">
              <Image className="stroke-white" />
            </label>
          </picture>
        </section>

        <section className="EditAccount-form">
          <form
            className="Form"
            onSubmit={handleSubmit(onSubmit)}
            encType="multipart/form-data"
          >
            <input
              type="file"
              name="avatar"
              id="avatar"
              hidden
              onChange={handleChangeAvatar}
            />
            <FormField
              type="text"
              label="Name"
              defaultValue={user.name}
              register={register("name")}
            />
            <FormField
              type="text"
              label="Username"
              defaultValue={user?.username}
              register={register("username")}
            />
            <FormField
              type="email"
              label="Email"
              defaultValue={user.email}
              register={register("email")}
            />
            <FormField
              type="password"
              label="Password"
              placeholder="Password"
              register={register("password")}
            />
            <FormField
              type="tel"
              label="phone"
              placeholder="phone number"
              defaultValue={user.phone}
              register={register("phone")}
            />
            <FormField
              type="textarea"
              label="Bio"
              placeholder="Bio"
              defaultValue={user?.bio}
              register={register("bio")}
            />

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
