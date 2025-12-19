import { Link } from 'react-router-dom'
import { DiscScene } from '../components/DiscScene'

function Home() {
  const scrollToFeatures = (e) => {
    e.preventDefault()
    const element = document.getElementById('features')
    if (element) {
      const headerOffset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <div>
      {/* Hero Section - Full Screen */}
      <header className="relative h-[110vh] flex items-center justify-center overflow-hidden -mt-16">
        {/* 3D Flying Discs Background */}
        <DiscScene />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(249,248,244,0.7)_0%,rgba(249,248,244,0.3)_50%,rgba(249,248,244,0.1)_100%)]" />

        <div className="relative z-20 container mx-auto px-6 flex flex-col justify-between h-full pt-32 pb-8">
          <div className="text-center flex-grow flex flex-col justify-center">
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 text-stone-900 drop-shadow-sm animate-fade-in-up" style={{ animationDelay: '0s' }}>
              Disc Golf Disc Cleaner
            </h1>
            
            <p className="font-serif italic text-3xl md:text-4xl lg:text-5xl text-stone-600 font-light mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Automated Cleaning Station
            </p>
            
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-stone-700 font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              A fully automated, Raspberry Pi-powered station that combines smart load sensing with precision mechanics to detect, clamp, and clean discs.
            </p>
          </div>
          
          <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a href="#features" onClick={scrollToFeatures} className="group flex flex-col items-center gap-3 text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors cursor-pointer">
              <span className="tracking-[0.2em] uppercase">Discover</span>
              <span className="p-3 border-2 border-stone-300 rounded-full group-hover:border-stone-900 transition-all bg-white/60 backdrop-blur-sm group-hover:bg-white">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {/* Product Overview Section */}
      <div id="features" className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: Product Image */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="aspect-square bg-stone-100 rounded-2xl overflow-hidden shadow-lg border border-stone-200">
              <img 
                src="./dist/assets/images/1.JPG" 
                alt="Automated Disc Cleaner" 
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 60%' }}
              />
            </div>
          </div>

          {/* Right: Objectives & Details */}
          <div className="lg:col-span-7">
            <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">PROJECT OBJECTIVES</div>
            <h2 className="font-serif text-4xl mb-6 text-stone-900">Automated Disc Cleaning Station</h2>
            
            <p className="text-lg text-stone-600 leading-relaxed mb-6">
              Our project objective was to create an <strong>automated disc cleaning station</strong> that combines intelligent sensing, precision mechanics, and computer vision to deliver a complete cleaning solution for disc golf discs.
            </p>

            <p className="text-base text-stone-600 leading-relaxed mb-6">
              The following were our goals and their implementation status:
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-nobel-gold mr-4 mt-2.5 flex-shrink-0"></div>
                <div>
                   <h4 className="text-stone-900 font-semibold text-lg">Disc Detection</h4>
                   <p className="text-stone-600">Rotary encoder load sensing detects disc presence by monitoring motor RPM changes before starting a cleaning cycle.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-nobel-gold mr-4 mt-2.5 flex-shrink-0"></div>
                <div>
                   <h4 className="text-stone-900 font-semibold text-lg">Secure Rotation</h4>
                   <p className="text-stone-600">Custom 3-jaw chuck mechanism securely holds the disc in place as it rotates during cleaning.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-nobel-gold mr-4 mt-2.5 flex-shrink-0"></div>
                <div>
                   <h4 className="text-stone-900 font-semibold text-lg">Complete Clean</h4>
                   <p className="text-stone-600">Servo-actuated brushes scrub the disc surface, ensuring thorough cleaning.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-stone-300 mr-4 mt-2.5 flex-shrink-0"></div>
                <div>
                   <h4 className="text-stone-600 font-semibold text-lg">Pneumatics <span className="text-stone-400 font-normal text-sm">(Not Fully Implemented)</span></h4>
                   <p className="text-stone-500 italic">We did not fully implement the compressed air system for complete removal of dirt and grime.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-nobel-gold mr-4 mt-2.5 flex-shrink-0"></div>
                <div>
                   <h4 className="text-stone-900 font-semibold text-lg">AI Vision Detection</h4>
                   <p className="text-stone-600">Machine learning model uses camera input to confirm all mud and debris has been removed.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-nobel-gold mr-4 mt-2.5 flex-shrink-0"></div>
                <div>
                   <h4 className="text-stone-900 font-semibold text-lg">User Interface</h4>
                   <p className="text-stone-600">LCD display provides real-time status updates and clear instructions, such as "Please Flip Disc."</p>
                </div>
              </div>
            </div>

            <div className="bg-stone-50 rounded-lg p-6 border border-stone-200">
              <h3 className="text-stone-900 font-semibold text-lg mb-2">System Overview</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                The complete electromechanical system autonomously detects, secures, and cleans disc golf discs. Our solution integrates advanced load sensing, precision motor control, and computer vision to ensure reliable cleaning performance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery & Demo Section */}
      <div className="mb-20 bg-white border-t border-stone-200 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-3 text-xs font-bold tracking-widest text-stone-500 uppercase">Media</div>
            <h2 className="font-serif text-4xl md:text-5xl mb-4 text-stone-900">Gallery & Demo</h2>
          </div>

          {/* Demo Video */}
          <div className="mb-16 max-w-4xl mx-auto">
            <h3 className="font-serif text-2xl font-semibold text-stone-900 mb-6 text-center">Final Demo Video</h3>
            <div className="aspect-video bg-stone-50 rounded-2xl overflow-hidden shadow-lg border border-stone-200">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/UypY4SlSCaY"
                title="Disc Golf Disc Cleaner Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Fusion Animation Video */}
          <div className="mb-16 max-w-4xl mx-auto">
            <h3 className="font-serif text-2xl font-semibold text-stone-900 mb-6 text-center">CAD Animation</h3>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-stone-200">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-auto"
                style={{ borderRadius: '8px' }}
              >
                <source src="./dist/assets/images/fusion.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Photo Gallery */}
          <div>
            <h3 className="font-serif text-2xl font-semibold text-stone-900 mb-6 text-center">Project Photos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { src: './dist/assets/images/3.JPG', alt: 'Project photo 1' },
                { src: './dist/assets/images/4.jpg', alt: 'Project photo 2' },
                { src: './dist/assets/images/disc_golf.JPG', alt: 'Project photo 3' },
                { src: './dist/assets/images/6.JPG', alt: 'Project photo 4' },
                { src: './dist/assets/images/5.JPG', alt: 'Project photo 5' },
                { src: './dist/assets/images/2.JPG', alt: 'Project photo 6' }
              ].map((photo, index) => (
                <div key={index} className="rounded-xl overflow-hidden shadow-sm border border-stone-200 hover:border-nobel-gold transition-all transform hover:scale-105 hover:shadow-md">
                  <img 
                    src={photo.src}
                    alt={photo.alt} 
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home
