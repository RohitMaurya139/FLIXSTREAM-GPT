 
export const checkValidData = (email, password,name,dob) => {
     
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)
    const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(name)
    const dobRegex =
        /^(0[1-9]|[11][0-9]|3[10])([-/.])(0[1-9]|1[0-2])\2(19|20)\d{2}$/.test(dob)
    
    if (!emailRegex) return "❗❗ Email Address is not Valid. it must contain @";
    if (!nameRegex) return "❗❗ Name  is not Valid.";
    if (!dobRegex) return "❗❗  DOB is not Valid.";
    if (!passwordRegex) return "❗❗ Password is not Valid. it must contain A-Z,a-z,0-9 and (@,_)";

    return null
 }