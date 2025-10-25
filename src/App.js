import React, { useState } from 'react';
import { Globe, MapPin } from 'lucide-react';

const countries = [
  { 
    name: 'United States', 
    flag: '🇺🇸',
    code: 'US',
    images: [
      'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800',
      'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=800',
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800',
      'https://images.unsplash.com/photo-1543716091-a840c05249ec?w=800',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
      'https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?w=800'
    ]
  },
  { 
    name: 'Japan', 
    code: 'JP', 
    flag: '🇯🇵',
    images: [
      'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800',
      'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800',
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800',
      'https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=800',
      'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800',
      'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800'
    ]
  },
  { 
    name: 'France', 
    code: 'FR', 
    flag: '🇫🇷',
    images: [
      'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800',
      'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800',
      'https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?w=800',
      'https://plus.unsplash.com/premium_photo-1688479428007-658f1abb8c33?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnJhbmNlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1400',
      'https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJhbmNlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1400',
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800'
    ]
  },
  { 
    name: 'Italy', 
    code: 'IT', 
    flag: '🇮🇹',
    images: [
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800',
      'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800',
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXRhbHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1400',
      'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXRhbHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1400',
      'https://images.unsplash.com/photo-1515859005217-8a1f08870f59?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aXRhbHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1400',
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800'
    ]
  },
  { 
    name: 'Brazil', 
    code: 'BR', 
    flag: '🇧🇷',
    images: [
      'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800',
      'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?w=800',
      'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800',
      'https://images.unsplash.com/photo-1551620832-e2af54f6f0b8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnJhemlsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1400',
      'https://images.unsplash.com/photo-1544473244-f6895e69ad8b?w=800',
      'https://images.unsplash.com/photo-1621693247912-767f47a3c382?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnJhemlsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1400'
    ]
  },
  { 
    name: 'Australia', 
    code: 'AU', 
    flag: '🇦🇺',
    images: [
      'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800',
      'https://images.unsplash.com/photo-1587139223877-04cb899fa3e8?w=800',
      'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800',
      'https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?w=800',
      'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=800',
      'https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?w=800'
    ]
  },
  { 
    name: 'United Kingdom', 
    code: 'GB', 
    flag: '🇬🇧',
    images: [
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800',
      'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dW5pdGVkJTIwa2luZ2RvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1400',
      'https://images.unsplash.com/photo-1542382257-80dedb725088?w=800',
      'https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=800',
      'https://images.unsplash.com/photo-1464021025634-49b81a77a858?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dW5pdGVkJTIwa2luZ2RvbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1400',
      'https://images.unsplash.com/photo-1545853332-147d5073187e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVuaXRlZCUyMGtpbmdkb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1400'
    ]
  },
  { 
    name: 'Canada', 
    code: 'CA', 
    flag: '🇨🇦',
    images: [
      'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800',
      'https://images.unsplash.com/photo-1503756234508-e32369269deb?w=800',
      'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800',
      'https://images.unsplash.com/photo-1503424886307-b090341d25d1?w=800',
      'https://plus.unsplash.com/premium_photo-1694475393287-88027e0fbde4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FuYWRhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1400',
      'https://images.unsplash.com/photo-1508693926297-1d61ee3df82a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FuYWRhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1400'
    ]
  },
  { 
    name: 'Spain', 
    code: 'ES', 
    flag: '🇪🇸',
    images: [
      'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800',
      'https://plus.unsplash.com/premium_photo-1716138192476-f34e85ad43c2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1400',
      'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800',
      'https://images.unsplash.com/photo-1562883676-8c7feb83f09b?w=800',
      'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800',
      'https://images.unsplash.com/photo-1509840841025-9088ba78a826?w=800'
    ]
  },
  { 
    name: 'Greece', 
    flag: '🇬🇷',
    images: [
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800',
      'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800',
      'https://plus.unsplash.com/premium_photo-1661964149725-fbf14eabd38c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JlZWNlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1400',
      'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800',
      'https://images.unsplash.com/photo-1580502304784-8985b7eb7260?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3JlZWNlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1400',
      'https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?w=800'
    ]
  },
];

export default function CountryFlagViewer() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Globe className="w-10 h-10 text-indigo-600" />
            <h1 className="text-4xl font-bold text-gray-800">Country Explorer</h1>
          </div>
          <p className="text-gray-600">Select a country to view its flag and iconic locations</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {countries.map((country) => (
            <button
              key={country.code}
              onClick={() => {
                setSelectedCountry(country);
                setImageErrors({});
              }}
              className={`p-4 rounded-lg transition-all duration-200 ${
                selectedCountry?.code === country.code
                  ? 'bg-indigo-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-800 hover:bg-indigo-50 hover:shadow-md'
              }`}
            >
              <div className="text-5xl mb-2">{country.flag}</div>
              <div className="text-sm font-medium">{country.name}</div>
            </button>
          ))}
        </div>

        {selectedCountry && (
          <> 
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Iconic Views of {selectedCountry.name}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {selectedCountry.images.map((imagePath, index) => (
                  <div
                    key={index}
                    className="relative group overflow-hidden rounded-xl bg-gray-200 aspect-video hover:shadow-xl transition-all duration-300"
                  >
                    {!imageErrors[index] ? (
                      <img
                        src={imagePath}
                        alt={`${selectedCountry.name} view ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={() => handleImageError(index)}
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400">
                        <Globe className="w-12 h-12 text-gray-600 mb-2" />
                        <p className="text-gray-700 text-sm font-medium">Image not found</p>
                        <p className="text-gray-600 text-xs mt-1 px-4 text-center">{imagePath}</p>
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white font-semibold text-sm">
                        {selectedCountry.name} Landmark {index + 1}
                      </p>
                      <p className="text-white/80 text-xs">Photo {index + 1}</p>
                    </div>
                  </div>
                ))}
              </div>
              
            
            </div>
          </>
        )}
      </div>
    </div>
  );
}