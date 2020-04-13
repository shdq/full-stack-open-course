import React from "react";

const ContactsForm = ({
  nameValue,
  phoneValue,
  onNameUpdate,
  onPhoneUpdate,
  onSubmit,
}) => {
  return (
    <form>
      <div>
        name: <input onChange={onNameUpdate} value={nameValue} />
      </div>
      <div>
        number: <input onChange={onPhoneUpdate} value={phoneValue} />
      </div>
      <div>
        <button onClick={onSubmit} type="submit">
          add
        </button>
      </div>
    </form>
  );
};

export default ContactsForm;
