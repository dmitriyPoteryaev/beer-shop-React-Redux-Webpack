import React from "react";
import './Opportunities.css';
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Opportunities = () => {
  return (
    <main className="Opportunities">
   <Header curPage={"Opportunities"}></Header>

    
 <ul className="MoreInformation">
<li>
<span className="Title">You can eat, drink, and sleep BrewDog.</span> 

In August 2018, BrewDog debuted the DogHouse, a hotel at its brewery in Columbus. The hotel offers beer around every corner, from the shower to the breakfast menu.
</li>
<li>
<span className="Title">BrewDog is always breeding.</span> 
BrewDog began as a small brewery in Ellon, Scotland in 2007. Ten years later, it opened a second facility in Ellon, as well as its first U.S. brewery, in Columbus, Ohio. In 2019, BrewDog took over what would have been Stone Brewing in Berlin, Germany. Another BrewDog location is in the works in Brisbane, Australia.
In addition to its breweries, BrewDog has upwards of 90 bars around the world. It’s expected to have 100 pubs by the end of 2019.
</li>
<li>
<span className="Title">BrewDog’s founders are media hounds.</span> 

In 2013, BrewDog founders Watt and Dickie starred in their own TV series, “Brew Dogs,” on the former Esquire network. It was cancelled after three seasons. They didn’t stop there: BrewDog launched its own streaming service, the BrewDog Network, in 2018. The subscription-based service offers “over 100 hours of drink and lifestyle content, including original series you can’t find anywhere else.” It launched with a tongue-in-cheek, porn-themed campaign that, perhaps unsurprisingly, didn’t go over too well.

</li>
<li>
<span className="Title">It brews to extremes.</span>
BrewDog has made beer as high as 55 percent ABV, and as low as 0.5 percent ABV. It’s brewed on a boat, on a Brooklyn rooftop, and on a plane. It claims to have made the world’s most caloric, most caffeinated, and most expensive beers. And yes, the beer sold in taxidermy squirrels was them, too.
</li>
<li>
<span className="Title">This dog can fly.</span>
BrewDog Airlines, a name for a series of flights run by BrewDog since 2018, transports “equity punks” and paying customers to and from BrewDog locations around the world. Its debut flight from London to Columbus didn’t go exactly according to plan: The plane famously had a restroom malfunction, leaving 200 drunk passengers with no place to break the seal. Its next flight is scheduled to take off Oct. 31, 2019.
Note: BrewDog Airlines is not an actual airline.
</li>

</ul> 

<Footer></Footer>
</main>
  );
};

export default Opportunities;
