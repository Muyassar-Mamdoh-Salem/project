import {
  User,
  Mail,
  Phone,
  MapPin,
  Lock,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../Redux/appSlice"; // ← غيّر المسار حسب مشروعك

const Regpage = () => {
  // const [lastName, setLastName] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [address, setAddress] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const intialValues={
name:"" ,
email:"" ,
password:"",
confirmPassword:"",
  };

  const validationSchema = Yup.object({

    name:Yup.string().required("Name is require"),
    email:Yup.string()
    .email("Email is require please try another ")
    .required("Email is required"),
    password:Yup.string()
    .min(8,"يجب الا تقل كلمة المرور عن 8 احرف")
.required("Password is required"),
confirmPassword:Yup.string()
.oneOf([yup.ref("password"),null],"كلمتا المرور غير متطابقتين ")

  });

  const navigate = useNavigate();
  const dispatch = useDispatch();


const handleSubmit = await (values,{})=>{

const auth =getAuth()
//success
try{
  const userCredential = awit createUserWithEmailAndPassword(auth , values.email , values.password) 

  await updateProfile (auth.currentUser ,{
  displayName:values.name,
})

await Myswal.fire({
icon:"success",
titel:"تم انشاء الحساب بنجاح"
confirmButtonText:"موافق",
})
resetform(),
navigate("/Sign")
}
catch(error){

if(error.code=== "auth/email-already-in-use"){
  await Myswal.fire({
    icon:"error",
    titel:"البريد الالكترونى  موجود بالفعل",
    })
  }else{
Myswal:fire({
  icon:"error",
  titel:"ا",
  })

  }

}




}


  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Update the displayName
        updateProfile(auth.currentUser, {
          displayName: firstName + " " + lastName,
        }).then(() => {
          // ✅ Store user info in Redux
          dispatch(setUser({
            userName: auth.currentUser.displayName,
            email: auth.currentUser.email,
            phone,
            address
          }));

          console.log("User created:", userCredential.user);

          // Navigate after a short delay
          setTimeout(() => {
            navigate("/");
          }, 1000);
        });
      })
      .catch((error) => {
        console.log("Error:", error.code, error.message);
      });
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-300 via-gray-100 to-white px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl bg-gradient-to-tr from-black/70 to-gray-800/70 backdrop-blur-md rounded-3xl shadow-2xl p-8 sm:p-10">
        <div className="absolute top-0 left-0 w-24 h-24 bg-indigo-700 rounded-br-full opacity-40 animate-pulse -z-10"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-purple-300 rounded-tl-full opacity-40 animate-pulse -z-10"></div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 text-center">
          Create Your Account
        </h2>

        <p className="text-center text-gray-200 mb-6">
          Already have an account?{" "}
          <Link to="/sign" className="text-indigo-300 underline">
            Sign in
          </Link>
        </p>

        {/* Social Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button className="flex items-center justify-center gap-2 w-full py-3 bg-indigo-500 text-white rounded-xl shadow-md hover:bg-indigo-400 transition">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5 filter invert"
            />
            Google
          </button>
          <button className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-500 transition">
            <img
              src="https://www.svgrepo.com/show/475647/facebook-color.svg"
              alt="Facebook"
              className="w-5 h-5 filter invert"
            />
            Facebook
          </button>
        </div>

        <div className="text-center text-gray-300 mb-4 font-semibold">
          OR REGISTER WITH EMAIL
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Fields */}
          {[
            { icon: User, placeholder: "First Name", value: firstName, onChange: setFirstName, type: "text" },
            { icon: User, placeholder: "Last Name", value: lastName, onChange: setLastName, type: "text" },
            { icon: Mail, placeholder: "Email Address", value: email, onChange: setEmail, type: "email" },
            { icon: Phone, placeholder: "Phone Number", value: phone, onChange: setPhone, type: "tel" },
            { icon: MapPin, placeholder: "Address", value: address, onChange: setAddress, type: "text" },
            { icon: Lock, placeholder: "Password", value: password, onChange: setPassword, type: "password" },
            { icon: Lock, placeholder: "Confirm Password", value: confirmPassword, onChange: setConfirmPassword, type: "password" },
          ].map(({ icon: Icon, placeholder, value, onChange, type }, i) => (
            <div key={i} className="flex items-center gap-3 bg-gray-900 bg-opacity-50 border border-indigo-500 rounded-xl px-4 py-2">
              <Icon className="w-5 h-5 text-indigo-300" />
              <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full bg-transparent text-white placeholder-indigo-300 outline-none"
                required
              />
            </div>
          ))}

          <div className="flex items-start gap-2 text-sm text-gray-200">
            <input type="checkbox" required className="mt-1 accent-indigo-500" />
            <label>
              I agree to the{" "}
              <Link to="/terms" className="text-indigo-300 underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-indigo-300 underline">
                Privacy Policy
              </Link>
            </label>
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-500 transition"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Regpage;
