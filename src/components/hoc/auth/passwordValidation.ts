type ValidationResponse = { msg: string; color: string };

const strength: any = {
  1: "very weak",
  2: "weak",
  3: "medium",
  4: "strong",
};

export const passwordValidation = (password: any): ValidationResponse => {
  if (password.length > 15) {
    return { msg: "too lengthy", color: "red" };
  } else if (password.length < 8) {
    return { msg: "too short", color: "red" };
  }

  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!^%*?&]{8,15}$/;
  if (regex.test(password)) {
    return { msg: "strong", color: "green" };
  }

  let count = 0;
  const regex1 = /[a-z]/;
  if (regex1.test(password)) count++;
  const regex2 = /[A-Z]/;
  if (regex2.test(password)) count++;
  const regex3 = /[\d]/;
  if (regex3.test(password)) count++;
  const regex4 = /[!@#$%^&*.?]/;
  if (regex4.test(password)) count++;

  return { msg: strength[count], color: "yellow" };
};
