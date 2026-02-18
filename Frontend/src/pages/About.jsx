
import { Utensils, Award, Truck, Users, Leaf, ChevronRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
   const features = [
    {
      icon: <Utensils className="w-8 h-8 text-orange-500" />,
      title: "Fresh Ingredients",
      description: "Hum rozana khet se seedha taaza aur high-quality ingredients mangwate hain."
    },
    {
      icon: <Award className="w-8 h-8 text-orange-500" />,
      title: "Top Rated Chefs",
      description: "Hamare chefs ke paas saalon ka experience hai jo har dish ko ek masterpiece banate hain."
    },
    {
      icon: <Truck className="w-8 h-8 text-orange-500" />,
      title: "Fast Delivery",
      description: "Garma-garam khana aapke darwaze tak sirf 30 minute ke andar pahunchane ka wada."
    },
    {
      icon: <Leaf className="w-8 h-8 text-orange-500" />,
      title: "Organic Choices",
      description: "Health conscious logon ke liye hamare paas special organic aur vegan options hain."
    }
  ];
  return (
     <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
    
      <section className="relative py-20 bg-gray-800 overflow-hidden">
        
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <span className="text-orange-300 font-semibold tracking-wider uppercase text-sm">Hamari Kahani</span>
                <h1 className="text-4xl md:text-5xl font-bold mt-2 leading-tight">
                  Swad aur Sehat ka <br /> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                    Naya Daur (2026)
                  </span>
                </h1>
              </div>
              
              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                2026 mein shuru hui hamari ye journey, hamare founder <strong>Sonu Kumar Napit</strong> ke ek vision ka natija hai. Humne ye platform isliye banaya taaki har ghar tak premium quality ka swad aur hotel jaisa anubhav pahunch sake.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to={"/recipes"} >
                <button className="bg-orange-600 hover:bg-orange-700 transition-colors px-8 py-3 rounded-full font-medium flex items-center gap-2 shadow-lg shadow-orange-600/20">
                  Menu Dekhein <ChevronRight size={20} />
                </button>
                </Link>
                
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-700">
                <div>
                  <h3 className="text-2xl font-bold text-white">Future</h3>
                  <p className="text-gray-500 text-sm">Vision 2026</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Pure</h3>
                  <p className="text-gray-500 text-sm">100% Quality</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Trust</h3>
                  <p className="text-gray-500 text-sm">By Sonu Napit</p>
                </div>
              </div>
            </div>

            
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 aspect-square sm:aspect-video lg:aspect-square flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="relative inline-block">
                    <Users size={120} className="mx-auto text-gray-700 mb-4 opacity-50" />
                    <div className="absolute top-0 right-0 bg-orange-500 w-6 h-6 rounded-full border-4 border-gray-800"></div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-300">Sonu Kumar Napit</h2>
                  <p className="text-orange-500 font-medium">RasoiHub Founder</p>
                  <p className="text-gray-500 italic mt-4 px-6">"Hum sirf khana nahi, bharosa paroste hain. 2026 se hamari koshish hai ki aapka har meal special ho."</p>
                </div>
                
                
                
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 uppercase tracking-widest">Humein Kyun Chunein?</h2>
            <div className="w-20 h-1 bg-orange-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="p-8 bg-gray-800 rounded-2xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="mb-6 bg-gray-700/50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-orange-500/10 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      <section className="py-20 bg-gray-800/50 border-y border-gray-700 relative">
         <Quote className="absolute top-10 left-10 text-gray-700 w-20 h-20 -z-0 opacity-20" />
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <p className="text-2xl italic text-gray-300 font-light leading-relaxed">
            "Khana sirf pet bharne ke liye nahi hota, ye ek emotion hai jo logon ko saath laata hai. Sonu Kumar Napit ke vision ke saath, hum wahi emotion deliver karte hain."
          </p>
          <div className="mt-8">
            <div className="w-12 h-12 bg-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-xl">S</div>
            <p className="font-bold text-orange-500 text-xl">Sonu Kumar Napit</p>
            <p className="text-xs text-gray-500 uppercase tracking-widest mt-1 font-semibold">Founder & CEO | Est. 2026</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About