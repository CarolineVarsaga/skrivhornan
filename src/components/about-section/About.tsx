import Divider from "../shared/Divider"

const About = () => {
  return (
    <section className="about-section">
      <div className="about-frame">
        <h2 className="about-heading">Om mig</h2>
        <Divider /> 
        <div className="text-container">
          <p className="about-paragraph">
            Sedan 2007 har jag ägnat mig på heltid åt det skrivna ordet.
            Idag driver jag Vårsagor AB med biståndsorganisationen 
            Hoppets Stjärna som främsta uppdragsgivare.
            Bland bolagets kunder återfinns också Ågrenshuset, Tidningen 7, 
            Järven Health Care, PMI, Indulogg, Ica Kvantum och Tältmissionen. 
            De enskilda uppdragen omfattar alltifrån kåserier, reklamtexter 
            och julrim till redaktörsroller för magasin och bilagor.
          </p>
          <p className="about-paragraph-bottom">
              Min stora drivkraft är att jag sedan barnsben älskat ord och allt 
              som du kan bygga med dem. Språket är den bro som gör det möjligt för 
              komplexa tankar och budskap att färdas mellan dig och mig, men om din 
              bro ska bära gäller det att dina ord är väl valda - och att hitta rätt 
              ord vid rätt tillfälle är svårt. En tonåring, en senior, en 
              verkstadsarbetare och en akademiker har varsitt sätt att använda det 
              svenska språket. Ord som träffar rakt i hjärtat på dig kan falla platt 
              inför den målgrupp du vill nå.
          </p>
        </div>
        
      </div>
    </section>
  )
}

export default About