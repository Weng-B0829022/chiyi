import React from 'react';

const Header = () => (
  <header className="bg-pure-white text-pure-black fixed w-full z-10">
    <div className="container mx-auto px-4 py-2 flex justify-between items-center">
      <div className="md:mt-0  flex justify-center ">
        <img
          src="/logo.png"
          alt="憩旨"
          className="rounded-full  h-20 object-cover border-4 border-pure-white shadow-lg"
        />
        <h1 className="text-pure-black  text-4xl font-['Ma_Shan_Zheng'] flex items-center">憩旨</h1>
      </div>
      
      <nav>
        <ul className="flex">
          <li className="ml-6"><a href="#home" className="text-pure-black">首頁</a></li>
          <li className="ml-6"><a href="#services" className="text-pure-black">服務</a></li>
          <li className="ml-6"><a href="#pricing" className="text-pure-black">價格</a></li>
          <li className="ml-6"><a href="#booking" className="text-pure-black hover:text-vibrant-red">預約</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

const Hero = () => (
  <section id="home" className="bg-cover bg-center h-screen flex items-center justify-center text-white relative" style={{backgroundImage: "url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')"}}>
    <div className="absolute inset-0 bg-pure-black opacity-50"></div>
    <div className="z-10 text-center">
      <h2 className="text-5xl mb-4 font-['Ma_Shan_Zheng']"></h2>
      <p className="text-xl mb-8">體驗傳統東方按摩藝術，重塑身心平衡</p>
      <a href="#booking" className=" text-pure-white py-3 px-8 rounded hover:bg-pure-white hover:text-pure-black duration-1000">
        立即預約
      </a>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl text-center text-deep-brown mb-12">服務項目</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {['古法經絡按摩', '頭部頸肩舒壓', '足底反射療法', '芳香精油SPA'].map((service, index) => (
          <div key={index} className="bg-soft-gray p-8 rounded-lg shadow-md text-center hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-2xl text-deep-brown mb-4">{service}</h3>
            <p>根據中醫理論，調節氣血，舒緩疲勞</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="py-20 bg-pure-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl text-center text-deep-brown mb-12">價目表</h2>
      <table className="w-full">
        <thead>
          <tr className="bg-deep-brown text-pure-white">
            <th className="p-4 text-left">療程名稱</th>
            <th className="p-4 text-left">時長</th>
            <th className="p-4 text-left">價格</th>
          </tr>
        </thead>
        <tbody>
          {[
            ['古法經絡按摩', '90分鐘', '¥688'],
            ['頭部頸肩舒壓', '60分鐘', '¥488'],
            ['足底反射療法', '60分鐘', '¥388'],
            ['芳香精油SPA', '120分鐘', '¥888']
          ].map((row, index) => (
            <tr key={index} className="border-b">
              <td className="p-4">{row[0]}</td>
              <td className="p-4">{row[1]}</td>
              <td className="p-4">{row[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

const Booking = () => (
  <section id="booking" className="py-20 bg-soft-gray bg-opacity-30">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl text-center text-deep-brown mb-12">預約您的療程</h2>
      <form className="max-w-lg mx-auto bg-pure-white p-8 rounded-lg shadow-md">
        <input type="text" placeholder="您的姓名" className="w-full mb-4 p-2 rounded border border-soft-gray" required />
        <input type="tel" placeholder="聯繫電話" className="w-full mb-4 p-2 rounded border border-soft-gray" required />
        <input type="email" placeholder="電子郵箱" className="w-full mb-4 p-2 rounded border border-soft-gray" required />
        <input type="date" className="w-full mb-4 p-2 rounded border border-soft-gray" required />
        <select className="w-full mb-4 p-2 rounded border border-soft-gray" required>
          <option value="">選擇療程</option>
          <option value="massage">古法經絡按摩</option>
          <option value="headneck">頭部頸肩舒壓</option>
          <option value="foot">足底反射療法</option>
          <option value="aromatherapy">芳香精油SPA</option>
        </select>
        <button type="submit" className="w-full bg-deep-brown text-pure-white py-3 rounded hover:bg-opacity-80 ">確認預約</button>
      </form>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-deep-brown text-pure-white py-8 text-center">
    <div className="container mx-auto px-4">
      <p>聯繫電話：+86 123 4567 8900</p>
      <p>地址：北京市朝陽區東方路88號東方大廈15樓</p>
      <p>營業時間：每日 10:00 - 22:00</p>
      <p>&copy; 2024 東方頤養。保留所有權利。</p>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="font-['Noto_Serif_SC'] text-pure-black ">
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <Booking />
      <Footer />
    </div>
  );
};

export default App;