const Kontak = () => {
  const whatsappNumber = "6287868685950";

  return (
    <div className="bg-emerald-950 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center text-white">Kontak</h1>
        <div className="contact-info text-center text-white">
          <p>Anda dapat menghubungi saya melalui WhatsApp, jika ada pertanyaan lebih lanjut.</p>
          <div className="flex items-center justify-center mt-4">
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="whatsapp-btn bg-green-500 text-white py-2 px-4 rounded inline-block hover:bg-green-600 transition duration-300">
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
        <h3 className="mt-8 text-center text-white">Terima Kasih!</h3>
      </div>
    </div>
  );
};

export default Kontak;
