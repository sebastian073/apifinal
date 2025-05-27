import html2canvas from 'html2canvas';

export default function OriginalFeature({ user }) {
  const handleDownload = async () => {
    const card = document.getElementById('user-card');
    const canvas = await html2canvas(card);
    const link = document.createElement('a');
    link.download = `${user.name.replace(/ /g, '_')}_card.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div>
      <div id="user-card" className="p-4 border rounded-lg w-64 bg-white">
        <img src={user.avatar} className="w-20 h-20 rounded-full mx-auto mb-2" />
        <h2 className="text-center font-bold">{user.name}</h2>
        <p className="text-center text-sm text-gray-500">{user.email}</p>
        <p className="text-center">{user.country}</p>
      </div>
      <button onClick={handleDownload} className="mt-4 p-2 bg-blue-600 text-white w-full rounded">
        Descargar tarjeta
      </button>
    </div>
  );
}