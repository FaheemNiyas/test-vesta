const Footer = () => {
  return (
    <>
      <div>
        <footer className="w-2/3 max-container"></footer>

        <hr className="w-10/12 m-auto my-2 border-t border-secondary-color-1" />
        <div className="flex items-center text-fade-white max-sm:flex-col max-sm:items-center ">
          <div className="flex justify-center flex-1 gap-2 cursor-pointer font-montserrat">
            {/* <img
              src={copyrightSign}
              alt="copyright sign"
              width={20}
              height={20}
              className="rounded-full"
            /> */}
            <p>2023 GrowthFunding - Staging</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
