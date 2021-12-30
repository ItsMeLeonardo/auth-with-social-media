function FormField({ type, placeholder, label = "" } = {}) {
  if (type === "submit") {
    return (
      <div className="Form-field">
        <button className="Form-button" type="submit">
          {label || "Submit"}
        </button>
      </div>
    );
  }

  if (type === "textarea") {
    return (
      <div className="Form-field">
        <textarea
          name={label}
          id={label}
          cols="30"
          rows="10"
          className="Form-input Form-textarea"
        />
        <label className="Form-label" htmlFor={label}>
          {label}
        </label>
      </div>
    );
  }

  return (
    <div className="Form-field">
      <input
        className="Form-input"
        type={type}
        name={label.toLowerCase()}
        id={label.toLowerCase()}
        placeholder={placeholder}
      />
      <label htmlFor={label.toLowerCase()} className="Form-label">
        {label}
      </label>
    </div>
  );
}

export default FormField;
