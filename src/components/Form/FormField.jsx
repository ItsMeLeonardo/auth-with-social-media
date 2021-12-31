const errorMessages = {
  required: "This field is required",
  minLength: "This field must be at least {5} characters",
  maxLength: "This field must be at most {0} characters",
};

/**
 *
 * @param {String} type  type of input [text, email, tel, ...]
 * @param {String} placeholder the placeholder text
 * @param {String} label the content of the label
 * @param {Object} register the register function from react-form-hook
 * @param {String} errorType the type error from react-form-hook
 * @returns {JSX.Element}
 */

function FormField({ type, placeholder, label, register, errorType } = {}) {
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
        <textarea cols="30" rows="10" className="Form-input Form-textarea" />
        <label className="Form-label" htmlFor={label}>
          {label}
        </label>
      </div>
    );
  }

  return (
    <div className="Form-field">
      {errorType && (
        <span className="Form-errorMessage">{errorMessages[errorType]}</span>
      )}
      <input
        className="Form-input"
        type={type}
        {...register}
        placeholder={placeholder}
        required
      />
      <label htmlFor={label.toLowerCase()} className="Form-label">
        <span className="Form-label-message">{label}</span>
      </label>
    </div>
  );
}
// memo with errorType
export default FormField;
