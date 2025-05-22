import React from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Lock,
} from "lucide-react";

const Regpage = () => {
  return (
    <div
      id="regpage"
      className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-600 via-indigo-700 to-purple-700 px-4"
    >
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-10 sm:p-12">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-3">
          Create Your Account
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Already have an account?{" "}
          <a
            href="#"
            className="font-semibold text-indigo-600 hover:text-indigo-800 transition"
          >
            Sign in
          </a>
        </p>

        {/* Social Login */}
        <div className="flex flex-col gap-4 mb-8">
          <button
            aria-label="Continue with Google"
            className="w-full flex items-center justify-center gap-3 rounded-xl border border-gray-300 py-3 font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google logo"
              className="w-6 h-6"
            />
            Continue with Google
          </button>
          <button
            aria-label="Continue with Facebook"
            className="w-full flex items-center justify-center gap-3 rounded-xl border border-gray-300 py-3 font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            <img
              src="https://www.svgrepo.com/show/475647/facebook-color.svg"
              alt="Facebook logo"
              className="w-6 h-6"
            />
            Continue with Facebook
          </button>
        </div>

        <div className="text-center text-gray-400 mb-8 font-semibold">
          Or register with email
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Input function */}
          {[
            {
              Icon: User,
              type: "text",
              placeholder: "First Name",
              name: "firstName",
            },
            {
              Icon: User,
              type: "text",
              placeholder: "Last Name",
              name: "lastName",
            },
            {
              Icon: Mail,
              type: "email",
              placeholder: "Email address",
              name: "email",
            },
            {
              Icon: Phone,
              type: "tel",
              placeholder: "Phone Number",
              name: "phone",
            },
            {
              Icon: MapPin,
              type: "text",
              placeholder: "Address",
              name: "address",
            },
            {
              Icon: Lock,
              type: "password",
              placeholder: "Password",
              name: "password",
            },
            {
              Icon: Lock,
              type: "password",
              placeholder: "Confirm Password",
              name: "confirmPassword",
            },
          ].map(({ Icon, type, placeholder, name }) => (
            <div
              key={name}
              className="flex items-center border border-gray-300 rounded-xl px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 transition"
            >
              <Icon className="w-6 h-6 text-gray-400 mr-3 flex-shrink-0" />
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                className="w-full border-none outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
          ))}

          <p className="text-sm text-gray-500 text-center">
            Minimum 8 characters with at least one number and one special
            character
          </p>

          {/* Terms */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="terms"
              className="w-5 h-5 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
            />
            <label
              htmlFor="terms"
              className="text-sm text-gray-600 select-none"
            >
              I agree to the{" "}
              <a
                href="#"
                className="text-indigo-600 hover:underline font-medium"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-indigo-600 hover:underline font-medium"
              >
                Privacy Policy
              </a>
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Regpage;
