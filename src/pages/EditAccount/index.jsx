function EditAccount() {
  return (
    <>
      <button className="btn btn-back glass-lg">Back</button>
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
            <div className="Form-field">
              <input className="Form-input" type="text" id="name" />
              <label className="Form-label" htmlFor="name">
                Name
              </label>
            </div>
            <div className="Form-field">
              <input className="Form-input" type="text" id="username" />
              <label className="Form-label" htmlFor="username">
                Username
              </label>
            </div>
            <div className="Form-field">
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="10"
                className="Form-input Form-textarea"
              />
              <label className="Form-label" htmlFor="description">
                Short description
              </label>
            </div>
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
