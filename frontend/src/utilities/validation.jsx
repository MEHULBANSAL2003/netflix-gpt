export const checkSignInValidData = (email, password) => {
  if (email === "") return "Email is required";
  if (password === "") return "Password is required";
  const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(
    email
  );

  const isPasswordVlaid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );

  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordVlaid) return "Password is not valid";

  return null;
};

export const checkSignUpValidData = (name, email, password) => {
  if (name === "") return "Name is required";
  if (email === "") return "Email is required";
  if (password === "") return "Password is required";

  const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(
    email
  );

  const isPasswordVlaid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );

  const isNameValid = /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/ .test(name);

  if (!isNameValid) return "Name is not valid";
  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordVlaid) return "Password is not valid";

  return null;
};
