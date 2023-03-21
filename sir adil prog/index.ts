class country {
  public name: string;
  public language: string;
  public population: number;
  public populationgrowhrate: number;
  private _stateprivacy: string;
  private _leader: string;
  public planet = "Earth";
  public religious: string;
  constructor(
    name: string,
    language: string,
    population: number,
    populationgrowhrate: number,
    _stateprivacy: string,
    _leader: string,
    religious: string
  ) {
    this.name = name;
    this.language = language;
    this.population = population;
    this.populationgrowhrate = populationgrowhrate;
    this._stateprivacy = _stateprivacy;
    this._leader = _leader;
    this.religious = religious;
  }
  public populationgrowth(): number {
    return 1;
  }
  public get privatedata(): string {
    return this._stateprivacy;
  }
  public greeting(): string {
    return "Hello!";
  }
}
class oiccountry extends country {
  constructor(
    name: string,
    language: string,
    population: number,
    populationgrowhrate: number,
    _stateprivacy: string,
    _leader: string,
    religious = `Islam`
  ) {
    super(
      name,
      language,
      population,
      populationgrowhrate,
      _stateprivacy,
      _leader,
      religious
    );
  }
  public populationgrowth(): number {
    this.population = this.population * (1 + this.populationgrowhrate / 100);
    return this.population;
  }
  public greeting(): string {
    return "Aslam o Alikum";
  }
}
let pakistan = new oiccountry(
  "pakistan",
  "urdu",
  200000,
  2.5,
  "secure data",
  "pakistan leader"
);
console.log(pakistan);
pakistan.greeting;
pakistan.populationgrowth();
console.log(pakistan);

console.log(pakistan.greeting());

let india = new country(
  "india",
  "hindi",
  400000,
  3,
  "secure india",
  "india leader",
  "hindu"
);
console.log(india);
// console.log(pakistan.privatedata);//method bna k pvt data excess kr skte.
console.log(india.greeting());
