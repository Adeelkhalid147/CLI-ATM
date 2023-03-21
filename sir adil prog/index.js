class country {
    name;
    language;
    population;
    populationgrowhrate;
    _stateprivacy;
    _leader;
    planet = "Earth";
    religious;
    constructor(name, language, population, populationgrowhrate, _stateprivacy, _leader, religious) {
        this.name = name;
        this.language = language;
        this.population = population;
        this.populationgrowhrate = populationgrowhrate;
        this._stateprivacy = _stateprivacy;
        this._leader = _leader;
        this.religious = religious;
    }
    populationgrowth() {
        return 1;
    }
    get privatedata() {
        return this._stateprivacy;
    }
    greeting() {
        return "Hello!";
    }
}
class oiccountry extends country {
    constructor(name, language, population, populationgrowhrate, _stateprivacy, _leader, religious = `Islam`) {
        super(name, language, population, populationgrowhrate, _stateprivacy, _leader, religious);
    }
    populationgrowth() {
        this.population = this.population * (1 + this.populationgrowhrate / 100);
        return this.population;
    }
    greeting() {
        return "Aslam o Alikum";
    }
}
let pakistan = new oiccountry("pakistan", "urdu", 200000, 2.5, "secure data", "pakistan leader");
console.log(pakistan);
pakistan.greeting;
pakistan.populationgrowth();
console.log(pakistan);
console.log(pakistan.greeting());
let india = new country("india", "hindi", 400000, 3, "secure india", "india leader", "hindu");
console.log(india);
// console.log(pakistan.privatedata);//method bna k pvt data excess kr skte.
console.log(india.greeting());
export {};
