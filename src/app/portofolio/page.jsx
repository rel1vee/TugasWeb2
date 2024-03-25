import Image from "next/image";

const Portofolio = () => {
  return (
    <div className="bg-emerald-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold mb-8">Portofolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <Image src="/project4.png" alt="Proyek 1: YouTube Transcriber" className="w-full h-auto" />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Youtube Transcriber</h3>
              <a href="https://github.com/rel1vee/YoutubeTranscriber" target="_blank" className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                Source Code
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <Image src="/project5.png" alt="Proyek 2: Code Assistant" className="w-full h-auto" />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Code Assistant</h3>
              <a href="https://github.com/rel1vee/CodeAssistant" target="_blank" className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                Source Code
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <Image src="/project2.png" alt="Proyek 3: Jadwal Salat" className="w-full h-auto" />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Jadwal Salat</h3>
              <a href="https://github.com/rel1vee/JadwalSalat" target="_blank" className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                Source Code
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <Image src="/project3.png" alt="Proyek 4: ChatBot" className="w-full h-auto" />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Q&A ChatBot</h3>
              <a href="https://github.com/rel1vee/GeminiChatBot" target="_blank" className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                Source Code
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <Image src="/project1.png" alt="Proyek 5: Sliding-Puzzle Solver" className="w-full h-auto" />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">Sliding-Puzzle Solver</h3>
              <a href="https://github.com/rel1vee/Sliding-Puzzle-Solver" target="_blank" className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
