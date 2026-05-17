const login = async (state: unknown, formData: FormData) => {
  const username = formData.get("username");
  const password = formData.get("password");
  console.log(password);
};

export { login };
