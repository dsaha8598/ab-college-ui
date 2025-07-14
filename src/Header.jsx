const Header = () => {
  return (
    <header className="bg-white shadow z-30">
      <div className="flex justify-between items-center px-3 h-32 relative">
        {/* Left Logo */}
        <img
          src={`${process.env.PUBLIC_URL}/images/Logo.jpg`}
          alt="College Logo"
          className="h-24 sm:h-32 w-auto"
        />

        {/* Right Images */}
        <div className="absolute right-2 top-0 flex items-center gap-2 z-10">
          <img
            src={`${process.env.PUBLIC_URL}/images/saraswati.jpg`}
            alt="Saraswati"
            className="h-24 sm:h-32 w-auto"
          />
        </div>
      </div>

      {/* Border Tiles */}
      <div className="flex overflow-hidden">
        {Array.from({ length: 50 }).map((_, index) => (
          <img
            key={index}
            src={`${process.env.PUBLIC_URL}/images/borderTile.jpg`}
            alt="Border Tile"
            className="h-5 w-auto"
          />
        ))}
      </div>
    </header>
  );
};

export default Header;
