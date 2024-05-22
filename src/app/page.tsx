import Image from "next/image";
import landing from "./css/pages/landing.module.css";

export default function Home() {
  return (
    <div className={landing.container}>
      <div id="header" className={landing.header}>
        <Image
          src="/assets/svg/icon.svg"
          alt="earat Logo"
          className="dark:invert"
          width={55}
          height={0}
          priority
        />
        <ol className={landing.ol}>
          <li>sepecs</li>
          <li>github</li>
          <li>contact</li>
        </ol>
        <div id="sessions" className={landing.sessions}>
          <a className={landing.login} href="">
            log in
          </a>
          <a className={landing.singin} href="">
            sing in
          </a>
        </div>
        <span>
          <Image
            src="/assets/svg/buttons/burger.svg"
            alt="burger menu Logo"
            className={landing.burger}
            width={30}
            height={30}
            priority
          ></Image>
        </span>
      </div>
      <main className={landing.main}>
        <div className={landing.banner}>
          <div className={landing.banner_content}>
            <Image
              src="/assets/svg/banner/chat-emoticon.svg"
              alt="burger menu Logo"
              id="empticon"
              className={landing.emoticon_1}
              width={120}
              height={30}
              priority
            ></Image>
            <h1>earat</h1>
            <Image
              src="/assets/svg/banner/chat-emoticon-black.svg"
              alt="burger menu Logo"
              id="empticon"
              className={landing.emoticon_2}
              width={120}
              height={30}
              priority
            ></Image>
          </div>
          <p>real time chat bases in laravel</p>
          <div id="sessions" className={landing.sessions_banner}>
            <a className={landing.login} href="">
              log in
            </a>
            <a className={landing.singin} href="">
              sing in
            </a>
          </div>
        </div>
        <div className={landing.preview_content}>
          <div className={landing.video_content}>
            <span>
              <div className={landing.d1}></div>
              <div className={landing.d2}></div>
              <div className={landing.d3}></div>
            </span>
            <video
              autoPlay
              preload="true"
              muted
              loop
              src={"/assets/videos/chat-vid.mp4"}
            ></video>
            <div className={landing.techs}>
              <p>powered by</p>
              <div className={landing.tech_buttons}>
              <a href="">
                <Image
                  src="/assets/svg/banner/laravel.svg"
                  alt="burger menu Logo"
                  id="empticon"
                  className={landing.tech_btn}
                  width={120}
                  height={30}
                  priority
                ></Image>
              </a>
              <a href="">
                <Image
                  src="/assets/svg/banner/aws.svg"
                  alt="burger menu Logo"
                  id="empticon"
                  className={landing.tech_btn}
                  width={120}
                  height={30}
                  priority
                ></Image>
              </a>
              <a href="">
                <Image
                  src="/assets/svg/banner/tailwind.svg"
                  alt="burger menu Logo"
                  id="empticon"
                  className={landing.tech_btn}
                  width={120}
                  height={30}
                  priority
                ></Image>
              </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className={landing.footer}>
        <Image
          src="/assets/svg/logo.svg"
          alt="burger menu Logo"
          id="empticon"
          className={landing.emoticon_2}
          width={120}
          height={30}
          priority
        ></Image>
        <p>website created by hibran acosta @2024</p>
      </footer>
    </div>
  );
}
