const Prestasi = () => {
  return (
    <div className="bg-emerald-950 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center text-white">Prestasi</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 justify-center">
          <div className="bg-white rounded-lg p-6 flex flex-col justify-between text-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Juara 2 Lomba Cerdas Cermat Bidang Pendidikan Kewarganegaraan Tingkat Kabupaten/Kota 2021</h3>
              <p>Medali + Piagam Penghargaan</p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 flex flex-col justify-between text-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Peserta KSM Bidang Matematika Terintegrasi Tingkat Kabupaten/Kota 2021</h3>
              <p>Piagam Penghargaan</p>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-white">
          <h2 className="text-xl font-semibold">Selebihnya Self-Reward... 😊</h2>
          <p className="mt-2">Tetap semangat, jangan menyerah.</p>
        </div>
      </div>
    </div>
  );
};

export default Prestasi;
