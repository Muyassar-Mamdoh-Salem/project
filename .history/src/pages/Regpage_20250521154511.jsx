import {
  User,
  Mail,
  Lock,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import * as Yup from "yup";
import Swal from "sweetalert2"; // تأكد من أنك مثبت sweetalert2

const Regpage = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Email is invalid")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Please confirm your password"),
  });

  const navigate = useNavigate();

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

      await Swal.fire({
        icon: "success",
        title: "تم انشاء الحساب بنجاح",
        confirmButtonText: "موافق",
      });

      resetForm();
      navigate("/sign"); // تأكد أن "/sign" هو المسار الصحيح لصفحة تسجيل الدخول
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        await Swal.fire({
          icon: "error",
          title: "البريد الالكترونى موجود بالفعل",
        });
      } else {
        await Swal.fire({
          icon: "error",
          title: "حدث خطأ أثناء انشاء الحساب",
          text: error.message,
        });
      }
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-300 via-gray-100 to-white px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl bg-gradient-to-tr from-black/70 to-gray-800/70 backdrop-blur-md rounded-3xl shadow-2xl p-8 sm:p-10">
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

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              {/* Name */}
              <div className="flex items-center bg-white/10 rounded-xl px-3 py-2">
                <User className="text-white mr-2" size={20} />
                <Field
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-transparent text-white placeholder-gray-300 outline-none"
                />
              </div>
              <ErrorMessage name="name" component="div" className="text-red-400 text-sm" />

              {/* Email */}
              <div className="flex items-center bg-white/10 rounded-xl px-3 py-2">
                <Mail className="text-white mr-2" size={20} />
                <Field
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-transparent text-white placeholder-gray-300 outline-none"
                />
              </div>
              <ErrorMessage name="email" component="div" className="text-red-400 text-sm" />

              {/* Password */}
              <div className="flex items-center bg-white/10 rounded-xl px-3 py-2">
                <Lock className="text-white mr-2" size={20} />
                <Field
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="w-full bg-transparent text-white placeholder-gray-300 outline-none"
                />
              </div>
              <ErrorMessage name="password" component="div" className="text-red-400 text-sm" />

              {/* Confirm Password */}
              <div className="flex items-center bg-white/10 rounded-xl px-3 py-2">
                <Lock className="text-white mr-2" size={20} />
                <Field
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full bg-transparent text-white placeholder-gray-300 outline-none"
                />
              </div>
              <ErrorMessage name="confirmPassword" component="div" className="text-red-400 text-sm" />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-yellow-500 text-white font-semibold rounded-xl hover:bg-yellow-600 transition flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                    جارى انشاء الحساب
                  </>
                ) : (
                  "انشاء حساب"
                )}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Regpage;
