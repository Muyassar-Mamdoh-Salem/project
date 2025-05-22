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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 px-6 py-12">
      <div className="relative max-w-md w-full bg-gradient-to-tr from-black/70 to-gray-800/70 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden">
        {/* زوايا زخرفية خفيفة */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-700 rounded-br-full opacity-40 animate-pulse -z-10"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-700 rounded-tl-full opacity-40 animate-pulse -z-10"></div>

        <div className="px-10 py-12">
          <h2 className="text-4xl font-extrabold text-white mb-4 text-center drop-shadow-lg">
            Create Your Account
          </h2>

          <p className="text-center text-gray-300 mb-8 font-semibold tracking-wide">
            Already have an account?{" "}
            <a
              href="#"
              className="text-indigo-400 hover:text-indigo-200 transition font-bold underline"
            >
              Sign in
            </a>
          </p>

          {/* Social Buttons */}
          <div className="flex flex-col gap-5 mb-10">
            <button className="flex items-center justify-center gap-3 py-3 rounded-xl bg-indigo-700 text-white font-semibold shadow-lg hover:bg-indigo-600 transition">
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                className="w-6 h-6 filter invert"
              />
              Continue with Google
            </button>
            <button className="flex items-center justify-center gap-3 py-3 rounded-xl bg-purple-700 text-white font-semibold shadow-lg hover:bg-purple-600 transition">
              <img
                src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                alt="Facebook"
                className="w-6 h-6 filter invert"
              />
              Continue with Facebook
            </button>
          </div>

          <div className="text-center font-bold text-gray-400 mb-8 tracking-widest">
            OR REGISTER WITH EMAIL
          </div>

          {/* Form */}
          <form className="space-y-6">
            {[
              { Icon: User, placeholder: "First Name", type: "text", name: "firstName" },
              { Icon: User, placeholder: "Last Name", type: "text", name: "lastName" },
              { Icon: Mail, placeholder: "Email address", type: "email", name: "email" },
              { Icon: Phone, placeholder: "Phone Number", type: "tel", name: "phone" },
              { Icon: MapPin, placeholder: "Address", type: "text", name: "address" },
              { Icon: Lock, placeholder: "Password", type: "password", name: "password" },
              { Icon: Lock, placeholder: "Confirm Password", type: "password", name: "confirmPassword" },
            ].map(({ Icon, placeholder, type, name }) => (
              <div
                key={name}
                className="flex items-center gap-4 bg-gray-900 bg-opacity-60 rounded-xl shadow-inner px-4 py-3 backdrop-blur-md border border-indigo-600 hover:border-indigo-400 transition"
              >
                <Icon className="w-6 h-6 text-indigo-400" />
                <input
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  className="w-full bg-transparent focus:outline-none placeholder-indigo-400 text-white font-semibold"
                />
              </div>
            ))}

            <p className="text-center text-indigo-300 font-semibold text-sm mt-2">
              Minimum 8 characters with at least one number and one special
              character
            </p>

            <div className="flex items-start gap-3 mt-4">
              <input
                type="checkbox"
                id="terms"
                className="w-5 h-5 mt-1 accent-indigo-500"
              />
              <label
                htmlFor="terms"
                className="text-gray-300 font-medium text-sm select-none"
              >
                I agree to the{" "}
                </Link
                  href="#"
                  className="text-indigo-400 underline hover:text-indigo-200 transition"
                >
                  Terms of Service
                </>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-indigo-400 underline hover:text-indigo-200 transition"
                >
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full mt-8 bg-indigo-600 text-white font-extrabold py-3 rounded-xl shadow-lg hover:bg-indigo-500 active:scale-[0.98] transition-transform"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Regpage;
