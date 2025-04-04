import { Link } from 'react-router-dom';
import logoImage from '../images/scoops-logo.png';
import cookiesImage from '../images/cookiesImage.png';
import shake from '../images/shake.png';


function MainPage() {
    return (
        

        <main className="max-w-7xl mx-auto px-4 py-8 space-y-12"> {/* Added spacing */}
    
          {/* === Hero Section === */}
          <section className="text-center relative flex flex-col items-center">
             {/* You might need to adjust positioning based on the actual logo image */}
             <img src={logoImage} alt="Scoops Ice Cream Logo" className="w-48 md:w-64 mb-4" /> {/* Logo */}
          </section>
    
          {/* === Content Grid Section === */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
    
            {/* Left Card: Cookies N Cream */}
            <div className="card bg-orange-100 shadow-xl"> {/* Example background */}
              <figure className="px-10 pt-10">
                 {/* Consider adding text overlay 'Scoop Your Dreams' if needed */}
                <img src={cookiesImage} alt="Cookies N Cream Ice Cream" className="rounded-xl h-48 w-auto mx-auto" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-orange-800">FIND YOUR COOKIES N CREAM PARADISE</h2>
                <p className="text-sm text-orange-700">
                Treat your tastebuds to a cookie-fueled celebration with our All-Time-Fav, 
                Midnight Munchies! Dive into rich vanilla ice cream packed with chunks 
                of chocolate cookies and swirls of fudge crème. 
                It’s a late-night snack in a scoop—no milk glass required.
                </p>
                <div className="card-actions mt-4 space-x-4">
                  <Link to="/" className="btn btn-secondary">View Menu</Link> {/* Example button */}
                  <button className="btn btn-outline btn-secondary">Learn More</button> {/* Example button */}
                </div>
              </div>
            </div>
    
            {/* Right Card: Shakes or Malts */}
            <div className="card bg-base-100 shadow-xl">
              {/* You might need flex/grid here for layout */}
              <div className="card-body">
                 <img src={shake} alt="Shake" className="rounded-xl h-48 w-auto mx-auto" />
                <h2 className="card-title justify-center">DRINK HAPPY, PAY LESS</h2>
                <p className="text-sm text-center">
                Scoops shakes are classis, and creamy, 
                while malts are iconic with malty twist with your favorite ice cream flavors. 
                Pure joy in every sip!
                </p>
                <div className="card-actions justify-center mt-4">
                  <Link to="/" className="btn btn-primary">View Menu</Link> {/* Example button */}
                </div>
              </div>
            </div>
    
          </section>
    
        </main>
    );
}

export default MainPage