import ninchatHero from "../assets/ninchatHero.png";

const HeroSection = () => {

  const whatsappUrl = "https://api.whatsapp.com/send?phone=+1(325)4130669&text=Olá!";


  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Transformamos conversas de 
        <span className="bg-gradient-to-r from-green-500 to-primary text-transparent bg-clip-text lg:mr-5 mr-2">
          {" "}
          whatsapp
        </span>
        em resultados incríveis
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      Automatize, personalize e amplie as interações com seus clientes para alcançar novos patamares de sucesso. Clique no ninchat e saiba como!
      </p>
      <div className="flex justify-center">
        <a href={whatsappUrl}>
        <img className="lg:max-w-[540px] animate-pulse max-w-[240px] " src={ninchatHero} />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
