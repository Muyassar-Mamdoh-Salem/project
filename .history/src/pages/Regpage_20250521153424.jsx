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
