import { useEffect, useState } from "react";

function App() {
  const [navbarData, setNavbarData] = useState([]);

  useEffect(() => {
    const FetchApi = async () => {
      try {
        const res = await fetch("http://localhost:1337/api/navbars?populate=*");
        const data = await res.json();
        console.log("Fetched Data:", data);
        setNavbarData(data.data);
      } catch (error) {
        console.log(error, "error while fetching data");
      }
    };
    FetchApi();
  }, []);

  
  

  return (
    <header className="">
      {navbarData.map((item: any) => {
        const { id, Logo, alt, button_text, button_url, Links } = item;
        return (
          <nav
            key={id}
            className="flex justify-around px-6 h-20 items-center w-full shadow-xl"
          >
            <img
              src={`http://localhost:1337${Logo.url}`}
              alt={alt}
              className="object-cover w-60"
            />
            <ul className="flex gap-10 font-semibold capitalize text-lg">
              {Links.map((link: any) => (
                <li key={link.id}>
                  <a href={link.Link_url}>{link.Link_Name}</a>
                </li>
              ))}
            </ul>
            <button className="font-semibold text-xl bg-amber-700 text-white h-12 w-40 rounded-xl text-center">
              <a href={button_url}>{button_text}</a>
            </button>
          </nav>
        );
      })}
    </header>
  );
}

export default App;