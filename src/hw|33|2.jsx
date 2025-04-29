import React from 'react';

const App = () => {
  return (
    <div className="bg-gradient-to-br from-pink-50 to-white min-h-screen">
      <header className="bg-white ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-4 gap-4">
          <h1 className="text-3xl font-bold text-pink-600">Magnum</h1>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-pink-500">
              <option>Алматы</option>
              <option>Астана</option>
            </select>
            <input type="text" placeholder="Ыздеу" className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full md:w-64 focus:ring-2 focus:ring-pink-500"/>
            <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-pink-500">
              <option>Казакша</option>
              <option>Русский</option>
              <option>English</option>
            </select>
          </div>
        </div>
      </header>
      <nav className="bg-pink-600 text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap gap-4 overflow-x-auto">
        <a href="" className="hover:underline whitespace-nowrap">Чай Кофе</a>
        <a href="" className="hover:underline whitespace-nowrap"> Выпечка</a>
          <a href="" className="hover:underline whitespace-nowrap">Молочные изделия</a>
          <a href="" className="hover:underline whitespace-nowrap">Конфеты</a>
          <a href="" className="hover:underline whitespace-nowrap">Напитки</a>
          <a href="" className="hover:underline whitespace-nowrap">Все скидки</a>
          <a href="" className="hover:underline whitespace-nowrap">Продукты</a>
          <a href="" className="hover:underline whitespace-nowrap">Для детей</a>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Скидки магнум</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          
          <div className="bg-white rounded-xl  hover: transition p-5 relative">
            <span className="absolute top-3 left-3 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded">-25%</span>
            <img src="https://cdn1.ozone.ru/s3/multimedia-s/c600/6814367920.jpg" alt="" className="h-28 mx-auto object-contain" />
            <div className="mt-4">
              <p className="text-gray-800 font-semibold text-sm">макароны султан</p>
              <p className="text-gray-400 line-through text-sm">454 Т</p>
              <p className="text-xl font-bold text-yellow-500">339 Т</p>
            </div>
          </div>

          <div className="bg-white rounded-xl  hover: transition p-5 relative">
            <span className="absolute top-3 left-3 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded">-35%</span>
            <img src="https://avatars.mds.yandex.net/i?id=670111cb6ef9812e9526300067a92056_l-7025550-images-thumbs&n=13" alt="" className="h-28 mx-auto object-contain" />
            <div className="mt-4">
              <p className="text-gray-800 font-semibold text-sm">чай</p>
              <p className="text-gray-400 line-through text-sm">479 Т</p>
              <p className="text-xl font-bold text-yellow-500">309 Т</p>
            </div>
          </div>
          <div className="bg-white rounded-xl  hover: transition p-5 relative">
            <span className="absolute top-3 left-3 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded">-53%</span>
            <img src="https://avatars.mds.yandex.net/i?id=d57ee432d046ed8c88eda8cc047c692b_l-5275490-images-thumbs&n=13" alt="" className="h-28 mx-auto object-contain" />
            <div className="mt-4">
              <p className="text-gray-800 font-semibold text-sm">килька</p>
              <p className="text-gray-400 line-through text-sm">1055Т</p>
              <p className="text-xl font-bold text-yellow-500">499 Т</p>
            </div>
          </div>
          <div className="bg-white rounded-xl  hover: transition p-5 relative">
            <span className="absolute top-3 left-3 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded">-53%</span>
            <img src="https://avatars.mds.yandex.net/i?id=d57ee432d046ed8c88eda8cc047c692b_l-5275490-images-thumbs&n=13" alt="" className="h-28 mx-auto object-contain" />
            <div className="mt-4">
              <p className="text-gray-800 font-semibold text-sm">килька</p>
              <p className="text-gray-400 line-through text-sm">1055Т</p>
              <p className="text-xl font-bold text-yellow-500">499 Т</p>
            </div>
          </div>
          <div className="bg-white rounded-xl  hover: transition p-5 relative">
            <span className="absolute top-3 left-3 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded">-53%</span>
            <img src="https://avatars.mds.yandex.net/i?id=d57ee432d046ed8c88eda8cc047c692b_l-5275490-images-thumbs&n=13" alt="" className="h-28 mx-auto object-contain" />
            <div className="mt-4">
              <p className="text-gray-800 font-semibold text-sm">килька</p>
              <p className="text-gray-400 line-through text-sm">1055Т</p>
              <p className="text-xl font-bold text-yellow-500">499 Т</p>
            </div>
          </div>
          <div className="bg-white rounded-xl  hover: transition p-5 relative">
            <span className="absolute top-3 left-3 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded">-53%</span>
            <img src="https://avatars.mds.yandex.net/i?id=d57ee432d046ed8c88eda8cc047c692b_l-5275490-images-thumbs&n=13" alt="" className="h-28 mx-auto object-contain" />
            <div className="mt-4">
              <p className="text-gray-800 font-semibold text-sm">килька</p>
              <p className="text-gray-400 line-through text-sm">1055Т</p>
              <p className="text-xl font-bold text-yellow-500">499 Т</p>
            </div>
          </div> 
          <div className="bg-white rounded-xl  hover: transition p-5 relative">
            <span className="absolute top-3 left-3 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded">-53%</span>
            <img src="https://avatars.mds.yandex.net/i?id=d57ee432d046ed8c88eda8cc047c692b_l-5275490-images-thumbs&n=13" alt="" className="h-28 mx-auto object-contain" />
            <div className="mt-4">
              <p className="text-gray-800 font-semibold text-sm">килька</p>
              <p className="text-gray-400 line-through text-sm">1055Т</p>
              <p className="text-xl font-bold text-yellow-500">499 Т</p>
            </div>
          </div>
          <div className="bg-white rounded-xl  hover: transition p-5 relative">
            <span className="absolute top-3 left-3 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded">-40%</span>
            <img src="https://cdn1.ozone.ru/s3/multimedia-3/c600/6237238167.jpg" alt="" className="h-28 mx-auto object-contain" />
            <div className="mt-4">
              <p className="text-gray-800 font-semibold text-sm">Chocolate Kazakhstan</p>
              <p className="text-gray-400 line-through text-sm">889Т</p>
              <p className="text-xl font-bold text-yellow-500">529Т</p>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}

export default App
