import { TbMenu2, TbX } from "react-icons/tb";
import { useState } from "react";
import Sticky from "react-stickynode";

const mainLinks = [
  { link: "#", label: "Intro" },
  { link: "#about", label: "About" },
  { link: "#skills", label: "Skills" },
  { link: "#projects", label: "Projects" },
  { link: "#contact", label: "Contact" },
];

export default function SmallHeaderLayout() {
  const [open, setOpen] = useState(false);

  const mainItems = mainLinks.map((item) => (
    <a
      href={item.link}
      key={item.label}
      className="px-3 py-2 text-softblack"
    >
      {item.label}
    </a>
  ));

  return (
    <Sticky enabled={true} top={0} innerZ={1000} activeClass="sticky-header">
      {!open && (
        <div className="flex w-full">
          <button className="p-2 ml-auto" onClick={() => setOpen(true)}>
            <TbMenu2 className="bg-transparent text-2xl text-softblack" />
          </button>
        </div>
      )}

      {open && (
        <header className=" bg-beige border-t-0 border-5 rounded w-full">
          <div className="flex w-full">
            <button className="p-2 ml-auto" onClick={() => setOpen(false)}>
              <TbX className="text-2xl text-softblack" />
            </button>
          </div>

          <nav className="items-end pb-2">
            {mainItems}
          </nav>
        </header>
      )}
    </Sticky>
  );
}