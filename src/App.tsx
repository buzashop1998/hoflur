import React, { useState, useEffect } from 'react';
import { ChevronDown, MapPin, Heart, Camera, Users, Leaf, ArrowRight, Menu, X, Shield, TreePine, Star, CheckCircle } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    'Home', 'Ethical Trekking', 'Eco Tours', 'Our Packages', 'Our Lodges', 'Useful Info', 'Gallery', 'Contact', 'About Us'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase().replace(/\s+/g, '-'));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-black/95 backdrop-blur-md' : 'bg-black/80'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <TreePine className="h-8 w-8 text-green-400" />
              <span className="text-xl font-bold text-white">
                Bukit Lawang
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-sm font-medium text-white hover:text-green-400 transition-colors"
                >
                  {item}
                </button>
              ))}
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300">
                Book Now
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-white"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-3 py-2 text-base font-medium text-white hover:text-green-400 hover:bg-gray-800 rounded-md w-full text-left"
                >
                  {item}
                </button>
              ))}
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 mt-4 mx-3">
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/4577538/pexels-photo-4577538.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              <CheckCircle className="h-4 w-4 mr-2" />
              Authentic Jungle Experience
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Discover
              <span className="block text-green-400">Wild Sumatra</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
              Experience the incredible world of orangutans in their natural habitat. Join our 
              expert local guides for an unforgettable jungle adventure in Bukit Lawang, 
              Sumatra.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Explore Tours
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">500+</div>
                <div className="text-sm text-gray-400">Happy Visitors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">15+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">95%</div>
                <div className="text-sm text-gray-400">Happy Visitors</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1661546/pexels-photo-1661546.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Orangutan in Sumatra jungle"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg font-medium">
              Eco Friendly
              <div className="text-xs opacity-90">100% Sustainable</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white" />
        </div>
      </section>

      {/* Eco Conscious Tour Packages Section */}
      <section id="our-packages" className="py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            ECO CONSCIOUS TOUR PACKAGES
          </h2>
          <h3 className="text-2xl text-green-400 mb-8 font-semibold">
            LOOKING FOR YOUR NEXT GREEN ADVENTURE WITH A SOCIAL IMPACT?
          </h3>
          
          <div className="max-w-4xl mx-auto text-gray-300 leading-relaxed space-y-6 text-lg">
            <p>
              <strong className="text-white">SPARE TIME & CHECK OUT OUR HASSLE FREE & WELL THOUGHT OUT PACKAGE TOURS TO EXPLORE THE 
              MAGNIFICENT JUNGLES IN AN ETHICAL & RESPONSIBLE WAY.</strong>
            </p>
            
            <p>
              Our approximate packages are all about discovering the stunning Sumatran jungle and the amazing 
              inhabitants of Bukit Lawang's rainforest, whilst being mindful about our impact on the local 
              communities. Our eco-conscious packages feature ethical wildlife trekking, sustainable accommodation and 
              practices and community-based activities. Designed to protect wildlife and support local communities, 
              our tours for those looking to maximize the positive impacts of their travels on the environment and local 
              people of northwestern Sumatra. Our tours are a thrilling journey which takes you deep into the heart of the 
              jungle to encounter the magnificent orangutans and other wildlife in their natural habitat whilst being 
              responsible.
            </p>
            
            <p>
              We designed unique responsible tour packages ranging from challenging expeditions to soft leisurely 
              adventures to ensure that each of you can experience the soul of the Sumatran jungle at an adventure level 
              that matches your fitness level and our packages selection to find the adventure that suits you the best.
            </p>
            
            <p>
              Our tour packages can be taken as they are or can be adapted according to your needs. We also offer tailor-
              made packages, where your ethical jungle trek and other activities and get a touch.
            </p>
          </div>
        </div>
      </section>

      {/* Your Trusted Jungle Guides Section */}
      <section id="about-us" className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              <Shield className="h-4 w-4 mr-2" />
              About Us
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Your Trusted
              <span className="block text-green-400">Jungle Guides</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Born and raised in Bukit Lawang, we're not just guides – we're passionate guardians of 
              the incredible ecosystem. Our mission is to share the magic of Sumatra's rainforest 
              while protecting it for future generations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  Bukit Lawang has been our home for generations. We grew up playing in these forests, learning from 
                  our elders about the secret paths, the behavior of orangutans and the delicate balance of jungle life.
                </p>
                <p>
                  What started as sharing our backyard with curious travelers has grown into a passionate mission to 
                  protect Sumatra's endangered orangutans while offering truly authentic, transformative 
                  experiences.
                </p>
                <p>
                  Every tour we lead is personal – we're not just showing you the jungle, we're sharing our heritage, our 
                  knowledge, and our deep love for this extraordinary place.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Contact Our Guides</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300">
                  Download Brochure
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/4577538/pexels-photo-4577538.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Jungle guide in Sumatra rainforest"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-4 bg-green-500/90 backdrop-blur-sm text-white p-4 rounded-lg">
                <div className="font-semibold">Daily orangutan encounters like this</div>
                <div className="text-sm opacity-90">are what make our tours special</div>
                <div className="text-xs mt-1 opacity-75">- Yusran, Head Guide</div>
              </div>
            </div>
          </div>

          {/* What Drives Us */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-white text-center mb-12">What Drives Us</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-900 border border-green-500/20 rounded-xl p-6 text-center hover:border-green-500/40 transition-colors">
                <div className="bg-green-500/20 p-3 rounded-full w-fit mx-auto mb-4">
                  <Leaf className="h-6 w-6 text-green-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Conservation</h4>
                <p className="text-gray-400 text-sm">
                  We're committed to protecting Sumatra's endangered orangutans
                </p>
              </div>

              <div className="bg-gray-900 border border-green-500/20 rounded-xl p-6 text-center hover:border-green-500/40 transition-colors">
                <div className="bg-green-500/20 p-3 rounded-full w-fit mx-auto mb-4">
                  <Heart className="h-6 w-6 text-green-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Authentic Experience</h4>
                <p className="text-gray-400 text-sm">
                  Our local knowledge creates genuine, meaningful encounters
                </p>
              </div>

              <div className="bg-gray-900 border border-green-500/20 rounded-xl p-6 text-center hover:border-green-500/40 transition-colors">
                <div className="bg-green-500/20 p-3 rounded-full w-fit mx-auto mb-4">
                  <Shield className="h-6 w-6 text-green-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Safety First</h4>
                <p className="text-gray-400 text-sm">
                  All our guides are certified with years of jungle experience
                </p>
              </div>

              <div className="bg-gray-900 border border-green-500/20 rounded-xl p-6 text-center hover:border-green-500/40 transition-colors">
                <div className="bg-green-500/20 p-3 rounded-full w-fit mx-auto mb-4">
                  <Users className="h-6 w-6 text-green-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Community Support</h4>
                <p className="text-gray-400 text-sm">
                  Every tour directly supports local communities and conservation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Packages */}
      <section id="eco-tours" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Paket Tur Ekowisata
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Pilih petualangan yang sesuai dengan minat dan tingkat pengalaman Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-green-500 hover:shadow-xl transition-all duration-300">
              <div className="bg-green-100 p-3 rounded-full w-fit mb-6">
                <Camera className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-black mb-4">Day Trek</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Perjalanan sehari penuh untuk melihat orangutan di habitat alami mereka. 
                Cocok untuk pemula dan keluarga.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">6-8 jam trekking</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">Makan siang di hutan</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">Pemandu berpengalaman</span>
                </div>
              </div>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-semibold transition-colors">
                Mulai dari $45
              </button>
            </div>

            <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Populer
              </div>
              <div className="bg-green-500 p-3 rounded-full w-fit mb-6">
                <TreePine className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-black mb-4">Jungle Adventure</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Petualangan 2 hari 1 malam dengan camping di hutan. 
                Pengalaman mendalam dengan alam liar Sumatra.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">2 hari 1 malam</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">Camping di hutan</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">Semua makanan termasuk</span>
                </div>
              </div>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-semibold transition-colors">
                Mulai dari $120
              </button>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-green-500 hover:shadow-xl transition-all duration-300">
              <div className="bg-black p-3 rounded-full w-fit mb-6">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-black mb-4">Premium Experience</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Paket eksklusif 3 hari 2 malam dengan akomodasi premium dan 
                aktivitas khusus untuk pengalaman tak terlupakan.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">3 hari 2 malam</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">Akomodasi premium</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm">Pemandu pribadi</span>
                </div>
              </div>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-semibold transition-colors">
                Mulai dari $280
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Galeri Petualangan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Lihat momen-momen menakjubkan dari perjalanan wisatawan kami
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                url: 'https://images.pexels.com/photos/1661546/pexels-photo-1661546.jpeg?auto=compress&cs=tinysrgb&w=600',
                title: 'Orangutan Encounter',
                description: 'Pertemuan langsung dengan orangutan'
              },
              {
                url: 'https://images.pexels.com/photos/4577538/pexels-photo-4577538.jpeg?auto=compress&cs=tinysrgb&w=600',
                title: 'Jungle Canopy',
                description: 'Kanopi hutan hujan yang menakjubkan'
              },
              {
                url: 'https://images.pexels.com/photos/17894350/pexels-photo-17894350.jpeg?auto=compress&cs=tinysrgb&w=600',
                title: 'Wildlife Photography',
                description: 'Kesempatan foto satwa liar'
              },
              {
                url: 'https://images.pexels.com/photos/17894346/pexels-photo-17894346.jpeg?auto=compress&cs=tinysrgb&w=600',
                title: 'River Crossing',
                description: 'Menyeberangi sungai hutan'
              },
              {
                url: 'https://images.pexels.com/photos/33786/ape-berber-monkeys-mammal-affchen.jpg?auto=compress&cs=tinysrgb&w=600',
                title: 'Jungle Camping',
                description: 'Berkemah di tengah hutan'
              },
              {
                url: 'https://images.pexels.com/photos/4577527/pexels-photo-4577527.jpeg?auto=compress&cs=tinysrgb&w=600',
                title: 'Sunrise Trek',
                description: 'Trekking menyaksikan matahari terbit'
              }
            ].map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg mb-1">{image.title}</h3>
                    <p className="text-gray-200 text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Siap Memulai Petualangan?
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Bergabunglah dengan ribuan wisatawan yang telah merasakan keajaiban hutan Sumatra
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-700 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Pesan Sekarang
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
              Hubungi Kami
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <TreePine className="h-8 w-8 text-green-400" />
                <span className="text-2xl font-bold">Bukit Lawang Tours</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Pemandu lokal terpercaya untuk petualangan hutan Sumatra yang autentik dan bertanggung jawab. 
                Bersama kami, jelajahi keindahan alam sambil mendukung konservasi orangutan.
              </p>
              <div className="flex space-x-4">
                <div className="bg-green-600 p-3 rounded-full hover:bg-green-500 transition-colors cursor-pointer">
                  <Camera className="h-5 w-5 text-white" />
                </div>
                <div className="bg-green-600 p-3 rounded-full hover:bg-green-500 transition-colors cursor-pointer">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <div className="bg-green-600 p-3 rounded-full hover:bg-green-500 transition-colors cursor-pointer">
                  <Leaf className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Layanan</h3>
              <ul className="space-y-2">
                {['Trekking Harian', 'Jungle Camping', 'Photography Tours', 'Conservation Programs'].map((link) => (
                  <li key={link}>
                    <button className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Kontak</h3>
              <div className="space-y-2 text-gray-400">
                <p>Bukit Lawang, North Sumatra</p>
                <p>Indonesia</p>
                <p className="hover:text-white transition-colors cursor-pointer">
                  info@bukitlawang-tours.com
                </p>
                <p className="hover:text-white transition-colors cursor-pointer">
                  +62 812 3456 7890
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Bukit Lawang Tours. All rights reserved. 
              <span className="text-green-400"> Made with ❤️ for conservation.</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;