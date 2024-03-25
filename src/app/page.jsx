import Image from "next/image";

const Beranda = () => {
  return (
    <div className="bg-emerald-50 min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-md rounded-lg max-w-4xl mx-auto overflow-hidden md:flex items-center">
        <div className="md:w-1/3 flex justify-center mb-4 md:mb-0">
          <Image src="/profile.png" alt="Zaki's Photo" className="w-48 h-48 rounded-full object-cover" />
        </div>
        <div className="md:w-2/3 px-4 py-4">
          <p className="text-lg text-emerald-950 mt-4 mb-4 leading-relaxed">Sebagai seorang mahasiswa yang berfokus pada ilmu Teknologi Informasi, saya memiliki kecintaan yang mendalam terhadap dunia teknologi dan komputasi. Ketertarikan saya terhadap dunia IT tidak hanya sebatas pada penggunaan teknologi, tetapi juga pada pemahaman yang mendalam tentang fondasi dan konsep-konsep yang mendasarinya.</p>
          <p className="text-lg text-emerald-950 mb-4 leading-relaxed">Saya memiliki dorongan yang kuat untuk terus belajar dan mengembangkan diri, serta memperluas pemahaman saya dalam berbagai bidang IT. Salah satu area yang menjadi fokus utama saya adalah Artificial Intelligence (AI), khususnya dalam Machine Learning (ML), Deep Learning (DL), dan Generative AI.</p>
        </div>
      </div>
    </div>
  );
};

export default Beranda;
