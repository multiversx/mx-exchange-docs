const circulatingEGLD = 214679878
const currentEGLDPrice = 36.88
const scenarios = [
  {
    title: "Standard",
    adoption: "Medium",
    egldSupply: "70% Staked",
    marketCap: 20000000000,
  }
]


const calculate = (scenarios)  => {

  const scenario = scenarios[0]

  const { marketCap} = scenario

  const scenarioPrice = marketCap / circulatingEGLD
  const growthFactor = scenarioPrice / currentEGLDPrice


  return {
    scenarioPrice,
    growthFactor,
  }

}