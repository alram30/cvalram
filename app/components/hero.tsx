import foto from "../foto1.jpg";
function Profile() {
    return (
      <img
        src={foto.src}
        alt="Ali Ramdani "
        className="fotoku"
      />
    );
  }

export default function Hero () {
    return (
        
                <div className="container mx-auto p-2 text-center">
                <h1 className="text-gray-400 font-bold" > CV Online</h1>
                <h1 className="text-3xl text-red-400 font-bold">ALI RAMDANI</h1>
                <Profile />
                <p>Saya Adalah Seorang Programer Profesional Sejak Tahun 1991</p>
                </div>
    );
}