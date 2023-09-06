import { logo } from "../assets";
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="site_logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => {
            window.open("https://github.com/luisdanielrb");
          }}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">ChatGPT 3.5</span>
      </h1>
      <h2 className="desc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis
        ipsam et nihil? Soluta iusto ea neque harum architecto animi debitis,
        dicta porro! Reiciendis suscipit expedita accusamus eius sapiente animi
        rerum.
      </h2>
    </header>
  );
};

export default Hero;
