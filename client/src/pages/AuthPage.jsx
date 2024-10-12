import { useState } from "react";
import Lottie from "lottie-react";
import animationData from "../../public/Animation - 1728735537526.json"; // Adjust the path to your JSON file
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 p-4 gap-8 lg:gap-20">
      <div className="hidden lg:block w-1/3">
        <Lottie animationData={animationData} loop={true} />
      </div>
      <div className="w-full max-w-md">
        <h2 className="text-center text-4xl font-extrabold text-white mb-8 transition-transform duration-500 ease-in-out transform hover:scale-105 animate-fade-in">
          {isLogin ? "Sign in to HeartSync" : "Create a HeartSync account"}
        </h2>

        <div className="bg-white shadow-xl rounded-lg p-8 transition-all duration-300 ease-in-out">
          {isLogin ? <LoginForm /> : <SignUpForm />}

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 transition-all duration-300 hover:text-gray-800">
              {isLogin ? "New to HeartSync?" : "Already have an account?"}
            </p>

            <button
              onClick={() => setIsLogin((prevIsLogin) => !prevIsLogin)}
              className="mt-2 text-pink-600 hover:text-purple-800 font-medium transition-colors duration-300 transform hover:scale-105"
            >
              {isLogin ? "Create a new account" : "Sign in to your account"}
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-in-out forwards;
        }

        input {
          border: 1px solid #d1d5db; /* Gray-300 */
          border-radius: 0.375rem; /* Rounded-md */
          padding: 0.5rem 0.75rem; /* px-3 py-2 */
          width: 100%;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        input:focus {
          border-color: #a78bfa; /* Purple-500 */
          box-shadow: 0 0 0 3px rgba(167, 107, 246, 0.5); /* Purple-500 with transparency */
          outline: none;
        }

        input:valid {
          border-color: #34d399; /* Green-500 */
        }
      `}</style>
    </div>
  );
};

export default AuthPage;
