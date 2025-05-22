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
import * as Yup from "yup"; // تأكد من استيراده إذا كنت تستخدم Yup

const Regpage = () => {
  const intialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is require"),
    email: Yup.string()
      .email("Email is require please try another ")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "يجب الا تقل كلمة المرور عن 8 احرف")
      .required("Password is required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "كلمتا المرور غير متطابقتين "
    ),
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      await updateProfile(auth.currentUser, {
        displayName: values.name,
      });

      await Myswal.fire({
        icon: "success",
        title: "تم انشاء الحساب بنجاح",
        confirmButtonText: "موافق",
      });

      resetForm();
      navigate("/Sign");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        await Myswal.fire({
          icon: "error",
          title: "البريد الالكترونى  موجود بالفعل",
        });
      } else {
        await Myswal.fire({
          icon: "error",
          title: "حدث خطا اثناء انشاء الحساب",
          text: error.message,
        });
      }
      setSubmitting(false);
    }
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

        {/* نموذج فورميك لم يُدرج هنا، تأكد من ربط `handleSubmit` و `initialValues` و `validationSchema` بـ Formik لاحقًا */}
      </div>
    </div>
  );
};

export default Regpage;
