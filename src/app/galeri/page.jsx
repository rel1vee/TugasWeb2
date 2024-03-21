const Galeri = () => {
  return (
    <div className="bg-emerald-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold mb-8">Galeri</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg overflow-hidden">
            <img src="/gambar1.png" alt="Gambar 1" className="w-full h-auto" />
            <div className="p-4">
              <p className="text-lg font-medium mb-2">"Tidak ada jalan pintas menuju ke mana pun yang bernilai pergi."</p>
              <p><br />- Beverly Sills</p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden">
            <img src="/gambar2.png" alt="Gambar 2" className="w-full h-auto" />
            <div className="p-4">
              <p className="text-lg font-medium mb-2">"Keberanian tidak berarti tidak takut. Keberanian berarti bertindak meskipun takut."</p>
              <p><br />- Nelson Mandela</p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden">
            <img src="/gambar3.png" alt="Gambar 3" className="w-full h-auto" />
            <div className="p-4">
              <p className="text-lg font-medium mb-2">"Kesuksesan tidak final, kegagalan tidak fatal: yang penting adalah keberanian untuk terus maju."</p>
              <p><br />- Winston Churchil</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galeri;
