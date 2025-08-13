 
export const checkValidData = (email, password) => {
     
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)
   
    
    if (!emailRegex) return "❗❗ Email Address is not Valid. it must contain @";
    if (!passwordRegex) return "❗❗ Password is not Valid. it must contain A-Z,a-z,0-9 and (@,_)";

    return null
}
 
// Corrected newUserData function
export const newUserData = (email, password, name, dob) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(name);
  const dobRegex = /^\d{4}-\d{2}-\d{2}$/.test(dob); // Match YYYY-MM-DD

  if (!emailRegex) return "❗❗ Email Address is not Valid. it must contain @";
  if (!nameRegex) return "❗❗ Name  is not Valid.";
  if (!dobRegex) return "❗❗  DOB is not Valid. Must be YYYY-MM-DD format.";
  if (!passwordRegex)
    return "❗❗ Password is not Valid. it must contain A-Z,a-z,0-9 and (@,_)";

  return null;
};
