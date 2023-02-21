import { useCallback, useState } from "react";
import * as EmailValidator from "email-validator";

import { FORM_CONTACT } from "../../constants/typeMessage";
import { Button } from "../core/Button";

import AvatarImage from "./AvatarImage";
import TextFieldForm from "./TextFieldForm";
import { useUploadImage } from "../../hooks/useUploadImage";

function UserForm({ onAddContact }) {
  const [form, setForm] = useState({ ...FORM_CONTACT });
  const [error, setError] = useState({ ...FORM_CONTACT });
  const { selectedFile, preview, onSelectFile } = useUploadImage()
  const handleChange = useCallback(({ payload }) => {
    setForm((prev) => ({ ...prev, [payload.name]: payload.value }));
  }, []);

  const validate = () => {
    const errorFields = FORM_CONTACT;
    let isValidated = true;

    if (form.fullName == "") {
      errorFields.fullName = "Ingrena el nombre";
      isValidated = false;
    } else {
      errorFields.fullName = "";
    }

    if (!(EmailValidator.validate(form.email))) {
      errorFields.email = "This email is incorrect";
      isValidated = false;
    } else {
      errorFields.email = "";
    }
    setError(errorFields);
    return isValidated;
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      onAddContact({ ...form, photoURL: selectedFile });
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} >
      <AvatarImage
        img={preview}
        onChange={onSelectFile}
      />
      <div>
        <TextFieldForm
          errorMessage={error.fullName}
          label="Name"
          name="fullName"
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <TextFieldForm
          errorMessage={error.email}
          hideEmoji
          label="Email"
          name="email"
          onChange={handleChange}
          required
        />
      </div>
      {(form.email != "" && form.fullName != "") && (
        <Button>Save your contact</Button>
      )}
    </form>
  );
}
export default UserForm;
