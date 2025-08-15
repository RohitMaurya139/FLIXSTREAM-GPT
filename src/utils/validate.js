
export const checkValidData = (email, password) => {
  // Email must match the common email pattern (something@something.domain)
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );


  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  // Validate email first
  if (!emailRegex)
    return "❗❗ Email Address is not Valid. It must contain @ and proper format";

  // Validate password next
  if (!passwordRegex)
    return "❗❗ Password is not Valid. It must contain A-Z, a-z, 0-9 and a special character (@, $, etc.)";

  // If both are valid
  return null;
};


export const newUserData = (email, password, name, dob) => {
  // Email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );

  // Strong password validation (same as checkValidData)
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  // Name validation: only letters, spaces, and optional punctuation
  // Allows names like: John Doe, O'Connor, Jean-Luc
  const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(name);

  // DOB validation: must be in YYYY-MM-DD format
  const dobRegex = /^\d{4}-\d{2}-\d{2}$/.test(dob);

  // Validate each field in order and return first error found
  if (!emailRegex)
    return "❗❗ Email Address is not Valid. It must contain @ and proper format";
  if (!nameRegex)
    return "❗❗ Name is not Valid. Only letters and certain punctuation are allowed.";
  if (!dobRegex) return "❗❗ DOB is not Valid. Must be in YYYY-MM-DD format.";
  if (!passwordRegex)
    return "❗❗ Password is not Valid. It must contain A-Z, a-z, 0-9 and a special character (@, $, etc.)";

  // If all pass validation:
  return null;
};
