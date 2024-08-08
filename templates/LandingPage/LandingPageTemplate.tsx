import Script from "next/script";
import { useState } from "react";

const LandingPageTemplate = () => {
  const [nomorPenerima, setNomorPenerima] = useState("");
  console.log(nomorPenerima);

  const [namaPenerima, setNamaPenerima] = useState("");
  const [whatsappLink, setWhatsappLink] = useState("");

  const generateLink = () => {
    const pesan = `Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i ${namaPenerima} untuk menghadiri acara kami.\n\nBerikut link undangan kami, untuk info lengkap dari acara bisa kunjungi :\n\nhttps://serlydany.vercel.app/?to=${encodeURIComponent(
      namaPenerima
    )}\n\nMerupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.\n\nMohon maaf perihal undangan hanya di bagikan melalui pesan ini.\n\nTerima kasih banyak atas perhatiannya.`;
    const link = `https://wa.me/${nomorPenerima}?text=${encodeURIComponent(
      pesan
    )}`;
    setWhatsappLink(link);
  };
  return (
    <div className="max-w-lg mx-auto text-center space-y-5">
      <h2>Whatsapp Link Generator</h2>
      <div>
        <label>
          Nomor Penerima:&nbsp;
          <input
            type="text"
            value={nomorPenerima}
            className="p-2 rounded border border-blue-200"
            onChange={(e) => setNomorPenerima(e.target.value)}
          />
        </label>
      </div>
      <div className="mt-2">
        <label>
          Nama Penerima:&nbsp;
          <input
            type="text"
            value={namaPenerima}
            className="p-2 rounded border border-blue-200"
            onChange={(e) => setNamaPenerima(e.target.value)}
          />
        </label>
      </div>
      <div>
        <button
          onClick={generateLink}
          className="px-2 py-1 bg-green-500 text-white rounded"
        >
          Generate Link
        </button>
      </div>
      {whatsappLink && (
        <div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-700"
          >
            Klik Disini
          </a>
        </div>
      )}
    </div>
  );
};

export default LandingPageTemplate;
