import headerClasses from "./main-header.module.scss";
import Image from "next/image";
import layoutClasses from "./layout.module.scss";

export default function MainHeader(props) {
  const navListState = [
    { name: "hotel", icon: "/img/sprite.svg#icon-home", link: "" },
    { name: "flight", icon: "/img/sprite.svg#icon-aircraft-take-off", link: "" },
    { name: "car rental", icon: "/img/sprite.svg#icon-key", link: "" },
    { name: "tours", icon: "/img/sprite.svg#icon-map", link: "" },
  ];

  return (
    // CONTAINER 
    <div className={layoutClasses.container}>
      {/* HEADER SECTION */}
      <header className={layoutClasses.header}>
        <div className={headerClasses.logo}>
          <Image
            src="/img/logo.png"
            alt="trillo logo"
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>

        <form action="#" className={headerClasses.search}>
          <input
            type="text"
            className={headerClasses["search__input"]}
            placeholder="Search hotels"
          />
          {/* FOR SVG ICONS JUST USE THIS LIBRARY https://icomoon.io/   */}
          <button className={headerClasses["search__button"]}>
            <svg className={headerClasses["search__icon"]}>
              <use xlinkHref="/img/sprite.svg#icon-magnifying-glass"></use>
            </svg>
          </button>
        </form>

        <nav className={headerClasses["user-nav"]}>
          <div className={headerClasses["user-nav__icon-box"]}>
            <svg className={headerClasses["user-nav__icon"]}>
              <use xlinkHref="/img/sprite.svg#icon-bookmark"></use>
            </svg>
            <span className={headerClasses["user-nav__notification"]}>7</span>
          </div>

          <div className={headerClasses["user-nav__icon-box"]}>
            <svg className={headerClasses["user-nav__icon"]}>
              <use xlinkHref="/img/sprite.svg#icon-chat"></use>
            </svg>
            <span className={headerClasses["user-nav__notification"]}>12</span>
          </div>
          <div className={headerClasses["user-nav__user"]}>
            <div className={headerClasses["user-nav__user-photo"]}>
              <Image
                layout="fill"
                objectFit="contain"
                src="/img/user.jpg"
                alt="User Photo"
              ></Image>
            </div>
            <span className={headerClasses["user-nav__user-name"]}></span>
          </div>
        </nav>
      </header>
      {/* END OF HEADER SECTION */}

      <div className={layoutClasses.content}>
        {/* SIDEBAR SECTION */}
        <nav className={layoutClasses.sidebar}>
          <ul className={layoutClasses["side-nav"]}>
            {navListState.map((e,i)=>{
             return (<>
               <li key={i} className={layoutClasses["side-nav_item"]}>
              <a href="#" className={layoutClasses["side-nav_link"]}>
                <svg className={headerClasses["side-nav__icon"]}>
                  <use xlinkHref={e.icon}></use>
                </svg>
                <span>{e.name}</span>
              </a>
            </li>
              </>)
            })}
           
          </ul>
          <div className={headerClasses.legal}>
            &copy; 2022 by Nada Ayman Azzam. All rights reserved.
          </div>
        </nav>
      {/* END OF SIDEBAR SECTION */}


        {/* MAIN SECTION */}
        <main className={layoutClasses["hotel-view"]}>{props.children}</main>
      {/* END OF MAIN SECTION */}

      </div>
    </div>
    // END OF CONTAINER
  );
}
