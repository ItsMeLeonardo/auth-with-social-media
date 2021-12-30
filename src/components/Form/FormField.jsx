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
