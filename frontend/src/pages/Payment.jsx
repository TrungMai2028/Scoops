import depauwCardImage from '../images/Card.png';
import visaLogo from '../images/visa-logo.webp';                        

function Payment() {
  return (
    // Main container with light pink background
    <div className="bg-pink-100 min-h-screen flex items-center justify-center p-4 sm:p-8 relative overflow-hidden">

      {/* Content Container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">

            {/* Left Column: ID Card Image (Circle Removed) */}
            {/* Removed 'relative' and 'py-8' from classes */}
            <div className="w-full md:w-1/3 flex justify-center">

            {/* Pink Circle Background Element - REMOVED */}
            {/* The two divs for the circle have been deleted */}

            {/* ID Card Image - Removed 'relative z-10' */}
            <img
                src={depauwCardImage} // Ensure this variable holds the imported image
                alt="Scoops Cream themed DePauw Student ID"
                className="max-w-xs w-full h-auto object-contain rounded-lg shadow-lg" // Reverted classes
            />
            </div>

            {/* Right Column: Text and Payment Logos */}
            <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                USE YOUR TIGER EXPRESS OR COMMUNITY PLUS
            </h2>

            <p className="text-lg font-medium text-gray-600 mb-6">
                OR ANY OTHER PAYMENT METHOD
            </p>

            {/* Payment Logos */}
            <div className="max-w-[100px] mx-auto md:mx-0">
                <img src={visaLogo} alt="Visa" className="w-full h-auto object-contain" />
                {/* Removed Discover, Amex, and Mastercard images */}
            </div>
            </div>

        </div>
    </div>
  );
}

export default Payment;