// Header.js
const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow z-50">
      <div className="flex justify-between items-center px-3 h-32 relative">
        {/* Left Logo */}
        <img src="images/Logo.jpg" alt="College Logo" className="h-24 sm:h-32 w-auto" />

        {/* Center Logo */}
        <img
          src="images/konarkwheel.jpg"
          alt="Konark"
          className="h-20 sm:h-32 w-auto absolute left-1/2 top-0 transform -translate-x-1/2 z-10"
        />

        {/* Right Images */}
        <div className="absolute right-2 top-0 flex items-center gap-2 z-10">
          
          <img src="images/saraswati.jpg" alt="Saraswati" className="h-24 sm:h-32 w-auto" />
        </div>
      </div>

      {/* Border Tiles */}
      <div className="flex overflow-hidden">
        {Array.from({ length: 50 }).map((_, index) => (
          <img key={index} src="images/borderTile.jpg" alt="Border Tile" className="h-5 w-auto" />
        ))}
      </div>
    </header>
  );
};

export default Header;
