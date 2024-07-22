import { footerLinks, socialMedia, VestaLogo } from "@/constants";

const Footer = () => {
  return (
    <>
      <div>
        <footer className="flex items-center justify-center px-10">
          <div className="flex flex-col w-full gap-10">
            <div className="flex flex-col items-start justify-center gap-[5%] md:flex-row">
              <div className="flex-col items-start flex-1 w-2/3 gap-8 ">
                <a href="/">
                  <img
                    src={VestaLogo}
                    alt="logo"
                    width={242}
                    height={93}
                    className="m-0"
                  />
                </a>

                <div className="w-2/3 text-[#999999]">
                  This growth plan will help you reach your resolutions and
                  achieve the goals you have been striving towards.
                </div>
                <div className="flex flex-row gap-6 py-4">
                  {socialMedia.map((icon) => (
                    <div className="flex items-center gap-3" key={icon.alt}>
                      <div className="flex flex-row items-center justify-center ">
                        <img
                          src={icon.src}
                          alt={icon.alt}
                          width={24}
                          height={24}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {footerLinks.map((section) => (
                <div key={section.title}>
                  <h4 className="mb-6 text-2xl font-medium leading-normal text-white font-montserrat">
                    {section.title}
                  </h4>
                  <ul>
                    {section.links.map((link) => (
                      <li
                        className="mt-3 text-base leading-normal text-[#999999] font-montserrat text-fade-white hover:text-slate-gray"
                        key={link.name}
                      >
                        <a href={link.link}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </footer>

        <hr className="w-10/12 m-auto mt-8 border-t border-secondary-color-1" />
        <div className="flex items-center text-fade-white max-sm:flex-col max-sm:items-center ">
          <div className="flex justify-center flex-1 gap-2 py-4 cursor-pointer font-montserrat text-[#999999]">
            <p>© 2024 Vesta. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
