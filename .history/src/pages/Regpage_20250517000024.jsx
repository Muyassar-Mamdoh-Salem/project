import React from 'react';
import {
  User, Mail, Phone, MapPin, Lock
} from 'lucide-react';

const Regpage = () => {
  return (
    <div id='regpage' className="min-h-screen flex items-center justify-center bg-gray-100 px-4  ">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 mt-95 ">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-1">Create your account</h2>
        <p className="text-sm text-center text-gray-600 mb-6">
          Already have an account? <a href="#" className="text-blue-500 hover:underline">Sign in</a>
        </p>

        {/* Social Login */}
        <div className="flex flex-col gap-3 mb-6">
          <button className="w-full border border-gray-300 rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-100 transition">
            <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-5 h-5" />
            <span>Continue with Google</span>
          </button>
          <button className="w-full border border-gray-300 rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-gray-100 transition">
            <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" className="w-5 h-5" />
            <span>Continue with Facebook</span>
          </button>
        </div>

        <div className="text-center text-gray-400 mb-6">Or register with email</div>

        {/* Form */}
        <form className="space-y-4">

          {/* First Name */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <User className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="First Name"
              className="w-full focus:outline-none"
            />
          </div>

          {/* Last Name */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <User className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <Mail className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="Email address"
              className="w-full focus:outline-none"
            />
          </div>

          {/* Phone Number */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <Phone className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full focus:outline-none"
            />
          </div>

          {/* Address */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <MapPin className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Address"
              className="w-full focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <Lock className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="password"
              placeholder="Password"
              className="w-full focus:outline-none"
            />
          </div>

          {/* Confirm Password */}
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <Lock className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full focus:outline-none"
            />
          </div>

          <p className="text-sm text-gray-500">
            Minimum 8 characters with at least one number and one special character
          </p>

          {/* Terms */}
          <div className="mt-4 flex items-start gap-2">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree to the <a href="#" className="text-blue-500 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>
            </label>
          </div>

          {/* Submit */}
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4 hover:bg-blue-700 transition">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Regpage;
