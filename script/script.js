// -------------------------- Deklarasi Variable ------------------------

var answer = document.getElementById("answerText");
var rAnswer = document.getElementById("rAnswer");
var sprites = document.getElementById("imgSprites");
var dScore = document.getElementById("dScore");
var score = 0;
var r;

// --------------------------- Randomizer ---------------------------------

function SRandom() {
    r = Math.floor(Math.random() * pokemon.length);
}

function startQ() {
    SRandom();
    sprites.src = pokemon[r][0];
}

// --------------------------------- Jawaban -------------------------------

function answerEnter() {
    if (window.event.keyCode == 13) {
        document.getElementById("answerSubmit").click();
    }
}

function answerSubmit() {
    rAnswer.style.display = "block";
    rAnswer.innerHTML = pokemon[r][1];
    sprites.style.filter = "brightness(1)";
    

    if (answer.value == pokemon[r][1]) {
        rAnswer.style.color = "rgb(47, 255, 127)";
        score += 10;
    } else {
        rAnswer.style.color = "rgb(248, 64, 64)";
        score -= 10;
    }
    
    dScore.innerHTML = score;
    answer.value = "";
    setTimeout(function() {
        startQ();
        rAnswer.style.display = "none";
        sprites.style.filter = "brightness(0)";
    }, 2500);
}

// -------------------------- Pokemon's arrays --------------------------

var pokemon = [
    ["sprites/001.png", "Bulbasaur"],
    ["sprites/002.png", "Ivysaur"],
    ["sprites/003.png", "Venusaur"],
    ["sprites/004.png", "Charmender"],
    ["sprites/005.png", "Charmeleon"],
    ["sprites/006.png", "Charizard"],
    ["sprites/007.png", "Squirtle"],
    ["sprites/008.png", "Wartortle"],
    ["sprites/009.png", "Blastoise"],
    ["sprites/010.png", "Caterpie"],
    ["sprites/011.png", "Metapod"],
    ["sprites/012.png", "Butterfree"],
    ["sprites/013.png", "Weedle"],
    ["sprites/014.png", "Kakuna"],
    ["sprites/015.png", "Beedrill"],
    ["sprites/016.png", "Pidgey"],
    ["sprites/017.png", "Pidgeotto"],
    ["sprites/018.png", "Pidgeot"],
    ["sprites/019.png", "Rattata"],
    ["sprites/020.png", "Raticate"],
    ["sprites/021.png", "Spearow"],
    ["sprites/022.png", "Fearow"],
    ["sprites/023.png", "Ekans"],
    ["sprites/024.png", "Arbok"],
    ["sprites/025.png", "Pikachu"],
    ["sprites/026.png", "Raichu"],
    ["sprites/027.png", "Sandshrew"],
    ["sprites/028.png", "Sandslash"],
    ["sprites/029.png", "Female Nidoran"],
    ["sprites/030.png", "Nidorina"],
    ["sprites/031.png", "Nidoqueen"],
    ["sprites/032.png", "Male Nidoran"],
    ["sprites/033.png", "Nidorino"],
    ["sprites/034.png", "Nidoking"],
    ["sprites/035.png", "Clefairy"],
    ["sprites/036.png", "Clefable"],
    ["sprites/037.png", "Vulpix"],
    ["sprites/038.png", "Ninetales"],
    ["sprites/039.png", "Jigglypuff"],
    ["sprites/040.png", "Wigglypuff"],
    ["sprites/041.png", "Zubat"],
    ["sprites/042.png", "Golbat"],
    ["sprites/043.png", "Oddish"],
    ["sprites/044.png", "Gloom"],
    ["sprites/045.png", "Vileplume"],
    ["sprites/046.png", "Paras"],
    ["sprites/047.png", "Parasect"],
    ["sprites/048.png", "Venonat"],
    ["sprites/049.png", "Venomoth"],
    ["sprites/050.png", "Diglett"],
    ["sprites/051.png", "Dugtrio"],
    ["sprites/052.png", "Meowth"],
    ["sprites/053.png", "Persian"],
    ["sprites/054.png", "Psyduck"],
    ["sprites/055.png", "Golduck"],
    ["sprites/056.png", "Mankey"],
    ["sprites/057.png", "Primeape"],
    ["sprites/058.png", "Growlithe"],
    ["sprites/059.png", "Arcanine"],
    ["sprites/060.png", "Poliwag"],
    ["sprites/061.png", "Poliwhirl"],
    ["sprites/062.png", "Poliwrath"],
    ["sprites/063.png", "Abra"],
    ["sprites/064.png", "Kadabra"],
    ["sprites/065.png", "Alakazam"],
    ["sprites/066.png", "Machop"],
    ["sprites/067.png", "Machoke"],
    ["sprites/068.png", "Machamp"],
    ["sprites/069.png", "Bellsprout"],
    ["sprites/070.png", "Weepinbell"],
    ["sprites/071.png", "Victreebel"],
    ["sprites/072.png", "Tentacool"],
    ["sprites/073.png", "Tentacruel"],
    ["sprites/074.png", "Geodude"],
    ["sprites/075.png", "Graveler"],
    ["sprites/076.png", "Golem"],
    ["sprites/077.png", "Ponyta"],
    ["sprites/078.png", "Rapidash"],
    ["sprites/079.png", "Slowpoke"],
    ["sprites/080.png", "Slowbro"],
    ["sprites/081.png", "Magnemite"],
    ["sprites/082.png", "Magneton"],
    ["sprites/083.png", "Farfetch'd"],
    ["sprites/084.png", "Doduo"],
    ["sprites/085.png", "Dodrio"],
    ["sprites/086.png", "Seel"],
    ["sprites/087.png", "Dewgong"],
    ["sprites/088.png", "Grimer"],
    ["sprites/089.png", "Muk"],
    ["sprites/090.png", "Shellder"],
    ["sprites/091.png", "Cloyster"],
    ["sprites/092.png", "Gastly"],
    ["sprites/093.png", "Haunter"],
    ["sprites/094.png", "Gengar"],
    ["sprites/095.png", "Onix"],
    ["sprites/096.png", "Drowzee"],
    ["sprites/097.png", "Hypno"],
    ["sprites/098.png", "Krabby"],
    ["sprites/099.png", "Kingler"],
    ["sprites/100.png", "Voltorb"],
    ["sprites/101.png", "Electrode"],
    ["sprites/102.png", "Exeggute"],
    ["sprites/103.png", "Exeggutor"],
    ["sprites/104.png", "Cubone"],
    ["sprites/105.png", "Marowak"],
    ["sprites/106.png", "Hitmonlee"],
    ["sprites/107.png", "Hitmonchan"],
    ["sprites/108.png", "Lickitung"],
    ["sprites/109.png", "Koffing"],
    ["sprites/110.png", "Weezing"],
    ["sprites/111.png", "Rhyhorn"],
    ["sprites/112.png", "Rhydon"],
    ["sprites/113.png", "Chansey"],
    ["sprites/114.png", "Tangela"],
    ["sprites/115.png", "Kangaskhan"],
    ["sprites/116.png", "Horsea"],
    ["sprites/117.png", "Seadra"],
    ["sprites/118.png", "Goldeen"],
    ["sprites/119.png", "Seaking"],
    ["sprites/120.png", "Staryu"],
    ["sprites/121.png", "Starmie"],
    ["sprites/122.png", "Mr. Mime"],
    ["sprites/123.png", "Scyther"],
    ["sprites/124.png", "Jynx"],
    ["sprites/125.png", "Electabuzz"],
    ["sprites/126.png", "Magmar"],
    ["sprites/127.png", "Pinsir"],
    ["sprites/128.png", "Tauros"],
    ["sprites/129.png", "Magikarp"],
    ["sprites/130.png", "Gyarados"],
    ["sprites/131.png", "Lapras"],
    ["sprites/132.png", "Ditto"],
    ["sprites/133.png", "Eevee"],
    ["sprites/134.png", "Vaporeon"],
    ["sprites/135.png", "Jolteon"],
    ["sprites/136.png", "Flareon"],
    ["sprites/137.png", "Porygon"],
    ["sprites/138.png", "Omanyte"],
    ["sprites/139.png", "Omastar"],
    ["sprites/140.png", "Kabuto"],
    ["sprites/141.png", "Kabutops"],
    ["sprites/142.png", "Aerodactyl"],
    ["sprites/143.png", "Snorlax"],
    ["sprites/144.png", "Articuno"],
    ["sprites/145.png", "Zapdos"],
    ["sprites/146.png", "Moltres"],
    ["sprites/147.png", "Dratini"],
    ["sprites/148.png", "Dragonair"],
    ["sprites/149.png", "Dragonite"],
    ["sprites/150.png", "Mewtwo"],
    ["sprites/151.png", "Mew"],
]