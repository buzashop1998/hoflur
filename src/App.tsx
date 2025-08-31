import React, { useState, useEffect } from 'react';
import { ChevronDown, MapPin, Heart, Camera, Users, Leaf, ArrowRight, Menu, X, Shield, TreePine } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Conservation', 'Gallery', 'Visit'];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <TreePine className={`h-8 w-8 ${scrollY > 50 ? 'text-green-600' : 'text-white'}`} />
              <span className={`text-xl font-bold ${scrollY > 50 ? 'text-gray-800' : 'text-white'}`}>
                Orangutan Sanctuary
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-green-500 ${
                    scrollY > 50 ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 ${scrollY > 50 ? 'text-gray-700' : 'text-white'}`}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-500 hover:bg-gray-50 rounded-md w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1661546/pexels-photo-1661546.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Lindungi
            <span className="block text-green-400">Orangutan</span>
            Sumatra
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Bergabunglah dalam misi konservasi untuk melindungi orangutan Sumatra yang terancam punah di hutan hujan kuno
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('about')}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Jelajahi Sekarang
            </button>
            <button 
              onClick={() => scrollToSection('conservation')}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              Dukung Konservasi
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Orangutan Sumatra
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hutan hujan Sumatra adalah rumah bagi salah satu kerabat terdekat manusia - orangutan Sumatra yang terancam punah. 
              Dengan kurang dari 14.000 individu tersisa di alam liar, setiap momen bersama makhluk luar biasa ini sangat berharga.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                  <Heart className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">Makhluk Cerdas</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Orangutan berbagi 97% DNA dengan manusia dan menunjukkan kecerdasan luar biasa, 
                    menggunakan alat dan menampilkan emosi serta perilaku sosial yang kompleks.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-black p-3 rounded-full flex-shrink-0">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">Arsitek Hutan</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Sebagai penyebar benih, orangutan berperan penting dalam menjaga keanekaragaman hayati 
                    hutan hujan Sumatra, mendapat julukan "tukang kebun hutan".
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">Spesies Endemik</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Hanya ditemukan di Sumatra dan Kalimantan utara, orangutan ini telah berevolusi dengan 
                    adaptasi unik terhadap lingkungan hutan hujan selama jutaan tahun.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1661546/pexels-photo-1661546.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Sumatran Orangutan in natural habitat"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">13,846</div>
                  <div className="text-sm text-gray-600">Populasi Tersisa</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conservation Section */}
      <section id="conservation" className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Aksi Konservasi
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Setiap tindakan berarti dalam melindungi makhluk luar biasa ini dan habitat mereka yang menghilang. 
              Bergabunglah dengan kami untuk membuat perbedaan bagi generasi mendatang.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-2xl p-8 hover:bg-gray-800 transition-colors duration-300 border border-green-500/20">
              <div className="bg-green-100 p-3 rounded-full w-fit mb-6">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Program Komunitas</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Bekerja sama dengan komunitas lokal untuk menciptakan mata pencaharian berkelanjutan 
                yang melindungi habitat orangutan sambil mendukung pembangunan ekonomi.
              </p>
              <button className="text-green-400 hover:text-green-300 font-semibold flex items-center space-x-2 transition-colors">
                <span>Pelajari Lebih</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 hover:bg-gray-800 transition-colors duration-300 border border-green-500/20">
              <div className="bg-white p-3 rounded-full w-fit mb-6">
                <Leaf className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Perlindungan Habitat</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Membangun kawasan lindung dan koridor untuk menghubungkan hutan yang terfragmentasi, 
                memastikan orangutan memiliki ruang untuk berkeliaran dan berkembang.
              </p>
              <button className="text-green-400 hover:text-green-300 font-semibold flex items-center space-x-2 transition-colors">
                <span>Ikut Terlibat</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 hover:bg-gray-800 transition-colors duration-300 border border-green-500/20">
              <div className="bg-green-100 p-3 rounded-full w-fit mb-6">
                <Camera className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Penelitian & Monitoring</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Menggunakan teknologi canggih untuk melacak populasi dan perilaku orangutan, 
                menyediakan data penting untuk strategi konservasi.
              </p>
              <button className="text-green-400 hover:text-green-300 font-semibold flex items-center space-x-2 transition-colors">
                <span>Lihat Penelitian</span>
                <ArrowRight className="h-4 w-4" />
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
              Kehidupan di Kanopi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Saksikan keindahan dan keanggunan orangutan Sumatra di habitat alami mereka
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                url: 'https://images.pexels.com/photos/1661546/pexels-photo-1661546.jpeg?auto=compress&cs=tinysrgb&w=600',
                title: 'Ibu dan Anak',
                description: 'Momen lembut antara induk dan anaknya'
              },
              {
                url: 'https://images.pexels.com/photos/4577538/pexels-photo-4577538.jpeg?auto=compress&cs=tinysrgb&w=600',
                title: 'Kanopi Hutan',
                description: 'Rumah hutan hujan yang rimbun'
              },
              {
                url: 'https://images.pexels.com/photos/17894350/pexels-photo-17894350.jpeg?auto=compress&cs=tinysrgb&w=600',
                title: 'Anak yang Bermain',
                description: 'Orangutan muda sedang bermain'
              },
              {
                url: 'https://images.pexels.com/photos/17894346/pexels-photo-17894346.jpeg?auto=compress&cs=tinysrgb&w=600',
                title: 'Tetua Bijak',
                description: 'Jantan dewasa dalam kontemplasi'
              },
              {
                url: 'https://images.pexels.com/photos/33786/ape-berber-monkeys-mammal-affchen.jpg?auto=compress&cs=tinysrgb&w=600',
                title: 'Ikatan Keluarga',
                description: 'Koneksi sosial di alam liar'
              },
              {
                url: 'https://images.pexels.com/photos/4577527/pexels-photo-4577527.jpeg?auto=compress&cs=tinysrgb&w=600',
                title: 'Surga Tropis',
                description: 'Lanskap Sumatra yang menakjubkan'
              }
            ].map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '13,846', label: 'Orangutan Tersisa', icon: Heart },
              { number: '2.6M', label: 'Hektar Dilindungi', icon: Leaf },
              { number: '15', label: 'Stasiun Penelitian', icon: Camera },
              { number: '50+', label: 'Komunitas Lokal', icon: Users }
            ].map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="bg-white/20 p-4 rounded-full w-fit mx-auto mb-4 backdrop-blur-sm">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Section */}
      <section id="visit" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
                Rencanakan Petualangan
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Rasakan keajaiban hutan hujan Sumatra melalui ekowisata yang bertanggung jawab. 
                Ekspedisi terpandu kami menawarkan pertemuan intim dengan orangutan sambil berkontribusi 
                langsung pada upaya konservasi.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-black p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700">Taman Nasional Gunung Leuser</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Camera className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Kesempatan fotografi profesional</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Pengalaman kelompok kecil (maks 8 orang)</span>
                </div>
              </div>

              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2">
                <span>Pesan Perjalanan</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            <div className="relative">
              <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/4577538/pexels-photo-4577538.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Sumatra rainforest canopy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">98%</div>
                  <div className="text-sm text-gray-600">Tingkat Kepuasan</div>
                </div>
              </div>
            </div>
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
                <span className="text-2xl font-bold">Orangutan Sanctuary</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Berdedikasi melindungi orangutan Sumatra melalui konservasi, penelitian, 
                dan ekowisata berkelanjutan. Bersama-sama, kita dapat memastikan makhluk luar biasa ini 
                berkembang untuk generasi mendatang.
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
              <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
              <ul className="space-y-2">
                {['Tentang Kami', 'Konservasi', 'Penelitian', 'Bergabung'].map((link) => (
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
                <p>Medan, North Sumatra</p>
                <p>Indonesia</p>
                <p className="hover:text-white transition-colors cursor-pointer">
                  info@orangutan-sanctuary.org
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Orangutan Sanctuary. Hak cipta dilindungi. 
              <span className="text-green-400"> Dibuat dengan ❤️ untuk konservasi.</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;