var express = require('express');
var router = express.Router();
var pokemon = {
  "bulbasaur" : {
    number: 1, name: "Bulbasaur", type1: "Poison", type2: "Grass", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", 
    speed: 45, special_defense: 65, special_attack: 65, defense: 49, attack: 49, hp: 45
  },
  "ivysaur" : {
    number: 2, name: "Ivysaur", type1: "Poison", type2: "Grass", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png", 
    speed: 60, special_defense: 80, special_attack: 80, defense: 63, attack: 62, hp: 60
  },
  "venusaur" : {
    number: 3, name: "Venusaur", type1: "Poison", type2: "Grass", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png", 
    speed: 80, special_defense: 100, special_attack: 100, defense: 83, attack: 82, hp: 80
  },
  "charmander" : {
    number: 4, name: "Charmander", type1: "Fire", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png", 
    speed: 65, special_defense: 50, special_attack: 60, defense: 43, attack: 52, hp: 39
  },
  "charmeleon" : {
    number: 5, name: "Charmeleon", type1: "Fire", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png", 
    speed: 80, special_defense: 65, special_attack: 80, defense: 58, attack: 64, hp: 58
  },
  "charizard" : {
    number: 6, name: "Charizard", type1: "Flying", type2: "Fire", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png", 
    speed: 100, special_defense: 85, special_attack: 109, defense: 78, attack: 84, hp: 78
  },
  "squirtle" : {
    number: 7, name: "Squirtle", type1: "Water",  
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png", 
    speed: 43, special_defense: 64, special_attack: 50, defense: 65, attack: 48, hp: 44
  },
  "wartortle" : {
    number: 8, name: "Wartortle", type1: "Water", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png", 
    speed: 58, special_defense: 80, special_attack: 65, defense: 80, attack: 63, hp: 59
  },
  "blastoise" : {
    number: 9, name: "Blastoise", type1: "Water", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png", 
    speed: 78, special_defense: 105, special_attack: 85, defense: 100, attack: 83, hp: 79
  },
  "caterpie" : {
    number: 10, name: "Caterpie", type1: "Bug",  
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png", 
    speed: 45, special_defense: 20, special_attack: 20, defense: 35, attack: 30, hp: 45
  },
  "metapod" : {
    number: 11, name: "Metapod", type1: "Bug", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png", 
    speed: 30, special_defense: 25, special_attack: 25, defense: 55, attack: 20, hp: 50
  },
  "butterfree" : {
    number: 12, name: "Butterfree", type1: "Flying", type2: "Bug", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png", 
    speed: 70, special_defense: 80, special_attack: 90, defense: 50, attack: 45, hp: 60
  },
  "weedle" : {
    number: 13, name: "Weedle", type1: "Poison", type2: "Bug", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png", 
    speed: 50, special_defense: 20, special_attack: 20, defense: 30, attack: 35, hp: 40
  },
  "kakuna" : {
    number: 14, name: "Kakuna", type1: "Poison", type2: "Bug", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png", 
    speed: 35, special_defense: 25, special_attack: 25, defense: 50, attack: 25, hp: 45
  },
  "beedrill" : {
    number: 15, name: "Beedrill", type1: "Poison", type2: "Bug", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png", 
    speed: 75, special_defense: 80, special_attack: 45, defense: 40, attack: 90, hp: 65
  },
  "pidgey" : {
    number: 16, name: "Pidgey", type1: "Flying", type2: "Normal", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png", 
    speed: 56, special_defense: 35, special_attack: 35, defense: 40, attack: 45, hp: 40
  },
  "pidgeotto" : {
    number: 17, name: "Pidgeotto", type1: "Flying", type2: "Normal", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png", 
    speed: 71, special_defense: 50, special_attack: 50, defense: 55, attack: 60, hp: 63
  },
  "pidgeot" : {
    number: 18, name: "Pidgeot", type1: "Flying", type2: "Normal", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png", 
    speed: 101, special_defense: 70, special_attack: 70, defense: 75, attack: 80, hp: 83
  },
  "rattata" : {
    number: 19, name: "Rattata", type1: "Normal", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png", 
    speed: 72, special_defense: 35, special_attack: 25, defense: 35, attack: 56, hp: 30
  },
  "raticate" : {
    number: 20, name: "Raticate", type1: "Normal", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png", 
    speed: 97, special_defense: 70, special_attack: 50, defense: 60, attack: 81, hp: 55
  },
  "spearow" : {
    number: 21, name: "Spearow", type1: "Flying", type2: "Normal", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png", 
    speed: 70, special_defense: 31, special_attack: 31, defense: 30, attack: 60, hp: 40
  },
  "fearow" : {
    number: 22, name: "Fearow", type1: "Flying", type2: "Normal", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png", 
    speed: 100, special_defense: 61, special_attack: 61, defense: 65, attack: 90, hp: 65
  },
  "ekans" : {
    number: 23, name: "Ekans", type1: "Poison",  
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png", 
    speed: 55, special_defense: 54, special_attack: 40, defense: 44, attack: 60, hp: 35
  },
  "arbok" : {
    number: 24, name: "Arbok", type1: "Poison", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png", 
    speed: 80, special_defense: 79, special_attack: 65, defense: 69, attack: 95, hp: 60
  },
  "pikachu" : {
    number: 25, name: "Pikachu", type1: "Electric",  
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png", 
    speed: 90, special_defense: 50, special_attack: 50, defense: 40, attack: 55, hp: 35
  },
  "raichu" : {
    number: 26, name: "Raichu", type1: "Electric",  
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png", 
    speed: 110, special_defense: 80, special_attack: 90, defense: 55, attack: 90, hp: 60
  },
  "sandshrew" : {
    number: 27, name: "Sandshrew", type1: "Ground",  
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png", 
    speed: 40, special_defense: 30, special_attack: 20, defense: 85, attack: 75, hp: 50
  },
  "sandslash" : {
    number: 28, name: "Sandslash", type1: "Ground",  
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png", 
    speed: 65, special_defense: 55, special_attack: 45, defense: 110, attack: 100, hp: 75
  },
  "nidoranf" : {
    number: 29, name: "Nidoran-f", type1: "Poison", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png", 
    speed: 41, special_defense: 40, special_attack: 40, defense: 52, attack: 47, hp: 55
  },
  "nidorina" : {
    number: 30, name: "Nidorina", type1: "Poison", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png", 
    speed: 56, special_defense: 55, special_attack: 55, defense: 67, attack: 62, hp: 70
  },
  "nidoqueen" : {
    number: 31, name: "Nidoqueen", type1: "Ground", type2: "Poison", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png", 
    speed: 76, special_defense: 85, special_attack: 75, defense: 87, attack: 92, hp: 90
  },
  "nidoranm" : {
    number: 32, name: "Nidoran-m", type1: "Poison",  
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png", 
    speed: 50, special_defense: 40, special_attack: 40, defense: 40, attack: 57, hp: 46
  },
  "nidorino" : {
    number: 33, name: "Nidorino", type1: "Poison",  
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png", 
    speed: 65, special_defense: 55, special_attack: 55, defense: 57, attack: 72, hp: 61
  },
  "nidoking" : {
    number: 34, name: "Nidoking", type1: "Ground", type2: "Poison", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png", 
    speed: 85, special_defense: 75, special_attack: 85, defense: 77, attack: 102, hp: 81
  },
  "clefairy" : {
    number: 35, name: "Clefairy", type1: "Fairy",  
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png", 
    speed: 35, special_defense: 65, special_attack: 60, defense: 48, attack: 45, hp: 70
  },
  "clefable" : {
    number: 36, name: "Clefable", type1: "Fairy", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png", 
    speed: 60, special_defense: 90, special_attack: 95, defense: 73, attack: 70, hp: 95
  },
  "vulpix" : {
    number: 37, name: "Vulpix", type1: "Fire",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png", 
    speed: 65, special_defense: 65, special_attack: 50, defense: 40, attack: 41, hp: 38
  },
  "ninetales" : {
    number: 38, name: "Ninetales", type1: "Fire", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png", 
    speed: 100, special_defense: 100, special_attack: 81, defense: 75, attack: 76, hp: 73
  },
  "jigglypuff" : {
    number: 39, name: "Jigglypuff", type1: "Fairy", type2: "Normal", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png", 
    speed: 20, special_defense: 25, special_attack: 45, defense: 20, attack: 45, hp: 115
  },
  "wigglytuff" : {
    number: 40, name: "Wigglytuff", type1: "Fairy", type2: "Normal", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png", 
    speed: 45, special_defense: 50, special_attack: 85, defense: 45, attack: 70, hp: 140
  },
  "zubat" : {
    number: 41, name: "Zubat", type1: "Flying", type2: "Poison", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png", 
    speed: 55, special_defense: 40, special_attack: 30, defense: 35, attack: 45, hp: 40
  },
  "golbat" : {
    number: 42, name: "Golbat", type1: "Flying", type2: "Poison", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png", 
    speed: 90, special_defense: 75, special_attack: 65, defense: 70, attack: 80, hp: 75
  },
  "oddish" : {
    number: 43, name: "Oddish", type1: "Poison", type2: "Grass", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png", 
    speed: 30, special_defense: 65, special_attack: 75, defense: 55, attack: 50, hp: 45
  },
  "gloom" : {
    number: 44, name: "Gloom", type1: "Poison", type2: "Grass", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png", 
    speed: 40, special_defense: 75, special_attack: 85, defense: 70, attack: 65, hp: 60
  },
  "vileplume" : {
    number: 45, name: "Vileplume", type1: "Poison", type2: "Grass", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png", 
    speed: 50, special_defense: 90, special_attack: 110, defense: 85, attack: 80, hp: 75
  },
  "paras" : {
    number: 46, name: "Paras", type1: "Grass", type2: "Bug", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png", 
    speed: 25, special_defense: 55, special_attack: 45, defense: 55, attack: 70, hp: 35
  },
  "parasect" : {
    number: 47, name: "Parasect", type1: "Grass", type2: "Bug", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png", 
    speed: 30, special_defense: 80, special_attack: 60, defense: 80, attack: 95, hp: 60
  },
  "venonat" : {
    number: 48, name: "Venonat", type1: "Poison", type2: "Bug", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png", 
    speed: 45, special_defense: 55, special_attack: 40, defense: 50, attack: 55, hp: 60
  },
  "venomoth" : {
    number: 49, name: "Venomoth", type1: "Poison", type2: "Bug", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png", 
    speed: 90, special_defense: 75, special_attack: 90, defense: 60, attack: 65, hp: 70
  },
  "diglett" : {
    number: 50, name: "Diglett", type1: "Ground",  
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png", 
    speed: 95, special_defense: 45, special_attack: 35, defense: 25, attack: 55, hp: 10
  },
  "dugtrio" : {
    number: 51, name: "Dugtrio", type1: "Ground", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png", 
    speed: 120, special_defense: 70, special_attack: 50, defense: 50, attack: 100, hp: 35
  },
  "meowth" : {
    number: 52, name: "Meowth", type1: "Normal",  
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png", 
    speed: 90, special_defense: 40, special_attack: 40, defense: 35, attack: 45, hp: 40
  },
  "persian" : {
    number: 53, name: "Persian", type1: "Normal",  
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png", 
    speed: 115, special_defense: 65, special_attack: 65, defense: 60, attack: 70, hp: 65
  },
  "psyduck" : {
    number: 54, name: "Psyduck", type1: "Water",  
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png", 
    speed: 55, special_defense: 50, special_attack: 65, defense: 48, attack: 52, hp: 50
  },
  "golduck" : {
    number: 55, name: "Golduck", type1: "Water", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png", 
    speed: 85, special_defense: 80, special_attack: 95, defense: 78, attack: 82, hp: 80
  },
  "mankey" : {
    number: 56, name: "Mankey", type1: "Fighting",  
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png", 
    speed: 70, special_defense: 45, special_attack: 35, defense: 35, attack: 80, hp: 40
  },
  "primeape" : {
    number: 57, name: "Primeape", type1: "Fighting",  
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png", 
    speed: 95, special_defense: 70, special_attack: 60, defense: 60, attack: 105, hp: 65
  },
  "growlithe" : {
    number: 58, name: "Growlithe", type1: "Fire", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png", 
    speed: 60, special_defense: 50, special_attack: 70, defense: 45, attack: 70, hp: 55
  },
  "arcanine" : {
    number: 59, name: "Arcanine", type1: "Fire", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png", 
    speed: 95, special_defense: 80, special_attack: 100, defense: 80, attack: 110, hp: 90
  },
  "poliwag" : {
    number: 60, name: "Poliwag", type1: "Water",  
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png", 
    speed: 90, special_defense: 40, special_attack: 40, defense: 40, attack: 50, hp: 40
  },
  "poliwhirl" : {
    number: 61, name: "Poliwhirl", type1: "Water", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png", 
    speed: 90, special_defense: 50, special_attack: 50, defense: 65, attack: 65, hp: 65
  },
  "poliwrath" : {
    number: 62, name: "Poliwrath", type1: "Fighting", type2: "Water", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png", 
    speed: 70, special_defense: 90, special_attack: 70, defense: 95, attack: 95, hp: 90
  },
  "abra" : {
    number: 63, name: "Abra", type1: "Psychic", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png", 
    speed: 90, special_defense: 55, special_attack: 105, defense: 15, attack: 20, hp: 25
  },
  "kadabra" : {
    number: 64, name: "Kadabra", type1: "Psychic", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png", 
    speed: 105, special_defense: 70, special_attack: 120, defense: 30, attack: 35, hp: 40
  },
  "alakazam" : {
    number: 65, name: "Alakazam", type1: "Psychic", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png", 
    speed: 120, special_defense: 95, special_attack: 135, defense: 45, attack: 50, hp: 55
  },
  "machop" : {
    number: 66, name: "Machop", type1: "Fighting",  
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png", 
    speed: 35, special_defense: 35, special_attack: 35, defense: 50, attack: 80, hp: 70
  },
  "machoke" : {
    number: 67, name: "Machoke", type1: "Fighting",  
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png", 
    speed: 45, special_defense: 60, special_attack: 50, defense: 70, attack: 100, hp: 80
  },
  "machamp" : {
    number: 68, name: "Machamp", type1: "Fighting", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png", 
    speed: 55, special_defense: 85, special_attack: 65, defense: 80, attack: 130, hp: 90
  },
  "bellsprout" : {
    number: 69, name: "Bellsprout", type1: "Poison", type2: "Grass", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png", 
    speed: 40, special_defense: 30, special_attack: 70, defense: 35, attack: 75, hp: 50
  },
  "Weepinbell" : {
    number: 70, name: "Weepinbell", type1: "Poison", type2: "Grass", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png", 
    speed: 55, special_defense: 45, special_attack: 85, defense: 50, attack: 90, hp: 65
  },
  "victreebell" : {
    number: 71, name: "Victreebell", type1: "Poison", type2: "Grass", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png", 
    speed: 70, special_defense: 70, special_attack: 100, defense: 65, attack: 105, hp: 80
  },
  "tentacool" : {
    number: 72, name: "Tentacool", type1: "Poison", type2: "Water", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png", 
    speed: 70, special_defense: 100, special_attack: 50, defense: 35, attack: 40, hp: 40
  },
  "tentacruel" : {
    number: 73, name: "Tentacruel", type1: "Poison", type2: "Water", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png", 
    speed: 100, special_defense: 120, special_attack: 80, defense: 65, attack: 70, hp: 80
  },
  "geodude" : {
    number: 74, name: "Geodude", type1: "Ground", type2: "Rock", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png", 
    speed: 20, special_defense: 30, special_attack: 30, defense: 100, attack: 80, hp: 40
  },
  "graveler" : {
    number: 75, name: "Graveler", type1: "Ground", type2: "Rock", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png", 
    speed: 35, special_defense: 45, special_attack: 45, defense: 115, attack: 95, hp: 55
  },
  "golem" : {
    number: 76, name: "Graveler", type1: "Ground", type2: "Rock", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png", 
    speed: 45, special_defense: 65, special_attack: 55, defense: 130, attack: 120, hp: 80
  },
  "ponyta" : {
    number: 77, name: "Ponyta", type1: "Fire", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png", 
    speed: 90, special_defense: 65, special_attack: 65, defense: 55, attack: 85, hp: 50
  },
  "rapidash" : {
    number: 78, name: "Rapidash", type1: "Fire", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png", 
    speed: 105, special_defense: 80, special_attack: 80, defense: 70, attack: 100, hp: 65
  },
  "slowpoke" : {
    number: 79, name: "Slowpoke", type1: "Psychic", type2: "Water", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png", 
    speed: 15, special_defense: 40, special_attack: 40, defense: 65, attack: 65, hp: 90
  },
  "slowbro" : {
    number: 80, name: "Slowbro", type1: "Psychic", type2: "Water", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png", 
    speed: 30, special_defense: 80, special_attack: 100, defense: 110, attack: 75, hp: 95
  },
  "magnemite" : {
    number: 81, name: "Magnemite", type1: "Steel", type2: "Electric", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png", 
    speed: 45, special_defense: 55, special_attack: 95, defense: 70, attack: 35, hp: 25
  },
  "magneton" : {
    number: 82, name: "Magneton", type1: "Steel", type2: "Electric", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png", 
    speed: 70, special_defense: 70, special_attack: 120, defense: 95, attack: 60, hp: 50
  },
  "farfetchd" : {
    number: 83, name: "Farfetchd", type1: "Flying", type2: "Normal", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png", 
    speed: 60, special_defense: 62, special_attack: 58, defense: 55, attack: 90, hp: 52
  },
  "doduo" : {
    number: 84, name: "Doduo", type1: "Flying", type2: "Normal", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png", 
    speed: 75, special_defense: 35, special_attack: 35, defense: 45, attack: 85, hp: 35
  },
  "dodrio" : {
    number: 85, name: "Dodrio", type1: "Flying", type2: "Normal", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png", 
    speed: 110, special_defense: 60, special_attack: 60, defense: 70, attack: 110, hp: 60
  },
  "seel" : {
    number: 86, name: "Seel", type1: "Water",  
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png", 
    speed: 45, special_defense: 70, special_attack: 45, defense: 55, attack: 45, hp: 65
  },
  "dewgong" : {
    number: 87, name: "Dewgong", type1: "Ice", type2: "Water", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png", 
    speed: 70, special_defense: 95, special_attack: 70, defense: 80, attack: 70, hp: 90
  },
  "grimer" : {
    number: 88, name: "Grimer", type1: "Poison",  
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png", 
    speed: 25, special_defense: 50, special_attack: 40, defense: 50, attack: 80, hp: 80
  },
  "muk" : {
    number: 89, name: "Muk", type1: "Poison", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png", 
    speed: 50, special_defense: 100, special_attack: 65, defense: 75, attack: 105, hp: 105
  },
  "shellder" : {
    number: 90, name: "Shellder", type1: "Water", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png", 
    speed: 40, special_defense: 25, special_attack: 45, defense: 100, attack: 65, hp: 30
  },
  "cloyster" : {
    number: 91, name: "Cloyster", type1: "Ice", type2: "Normal", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png", 
    speed: 70, special_defense: 45, special_attack: 85, defense: 180, attack: 95, hp: 50
  },
  "gastly" : {
    number: 92, name: "Gastly", type1: "Poison", type2: "Ghost", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png", 
    speed: 80, special_defense: 35, special_attack: 100, defense: 30, attack: 35, hp: 30
  },
  "haunter" : {
    number: 93, name: "Haunter", type1: "Poison", type2: "Ghost", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png", 
    speed: 95, special_defense: 55, special_attack: 115, defense: 45, attack: 50, hp: 45
  },
  "gengar" : {
    number: 94, name: "Gengar", type1: "Poison", type2: "Ghost", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png", 
    speed: 110, special_defense: 75, special_attack: 130, defense: 60, attack: 65, hp: 60
  },
  "onix" : {
    number: 95, name: "Onix", type1: "Ground", type2: "Rock", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png", 
    speed: 70, special_defense: 45, special_attack: 30, defense: 160, attack: 45, hp: 35
  },
  "drowzee" : {
    number: 96, name: "Drowzee", type1: "Psychic",  
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png", 
    speed: 42, special_defense: 90, special_attack: 43, defense: 45, attack: 48, hp: 60
  },
  "hypno" : {
    number: 97, name: "Hypno", type1: "Psychic", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png", 
    speed: 67, special_defense: 115, special_attack: 73, defense: 70, attack: 73, hp: 85
  },
  "krabby" : {
    number: 98, name: "Krabby", type1: "Water",  
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png", 
    speed: 50, special_defense: 25, special_attack: 25, defense: 90, attack: 105, hp: 30
  },
  "kingler" : {
    number: 99, name: "Kingler", type1: "Water", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png", 
    speed: 75, special_defense: 50, special_attack: 50, defense: 115, attack: 130, hp: 55
  },
  "voltorb" : {
    number: 100, name: "Voltorb", type1: "Electric", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png", 
    speed: 100, special_defense: 55, special_attack: 55, defense: 50, attack: 30, hp: 40
  },
  "electrode" : {
    number: 101, name: "Electrode", type1: "Electric",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png", 
    speed: 150, special_defense: 80, special_attack: 80, defense: 70, attack: 50, hp: 60
  },
  "exeggcute" : {
    number: 102, name: "Exeggcute", type1: "Psychic", type2: "Grass", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png", 
    speed: 40, special_defense: 45, special_attack: 60, defense: 80, attack: 40, hp: 60
  },
  "exeggutor" : {
    number: 103, name: "Exeggutor", type1: "Psychic", type2: "Grass", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png", 
    speed: 55, special_defense: 75, special_attack: 125, defense: 85, attack: 95, hp: 95
  },
  "cubone" : {
    number: 104, name: "Cubone", type1: "Ground",  
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png", 
    speed: 35, special_defense: 50, special_attack: 40, defense: 95, attack: 50, hp: 50
  },
  "marowak" : {
    number: 105, name: "Marowak", type1: "Ground", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png", 
    speed: 45, special_defense: 80, special_attack: 50, defense: 110, attack: 80, hp: 60
  },
  "hitmonlee" : {
    number: 106, name: "Hitmonlee", type1: "Fighting",  
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png", 
    speed: 87, special_defense: 110, special_attack: 35, defense: 53, attack: 110, hp: 50
  },
  "hitmonchan" : {
    number: 107, name: "Hitmonchan", type1: "Fighting", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png", 
    speed: 76, special_defense: 110, special_attack: 35, defense: 79, attack: 105, hp: 50
  },
  "lickitung" : {
    number: 108, name: "Lickitung", type1: "Normal",  
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png", 
    speed: 30, special_defense: 75, special_attack: 60, defense: 75, attack: 55, hp: 90
  },
  "koffing" : {
    number: 109, name: "Koffing", type1: "Poison", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png", 
    speed: 35, special_defense: 45, special_attack: 60, defense: 95, attack: 65, hp: 40
  },
  "weezing" : {
    number: 110, name: "Weezing", type1: "Poison",  
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png", 
    speed: 60, special_defense: 70, special_attack: 85, defense: 120, attack: 90, hp: 65
  },
  "rhyhorn" : {
    number: 111, name: "Rhyhorn", type1: "Rock", type2: "Ground", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png", 
    speed: 25, special_defense: 30, special_attack: 30, defense: 95, attack: 85, hp: 80
  },
  "rhydon" : {
    number: 112, name: "Rhydon", type1: "Rock", type2: "Ground", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png", 
    speed: 40, special_defense: 45, special_attack: 45, defense: 120, attack: 130, hp: 105
  },
  "chansey" : {
    number: 113, name: "Chansey", type1: "Normal", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png", 
    speed: 50, special_defense: 105, special_attack: 35, defense: 5, attack: 5, hp: 250
  },
  "tangela" : {
    number: 114, name: "Tangela", type1: "Grass",  
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png", 
    speed: 60, special_defense: 40, special_attack: 100, defense: 115, attack: 55, hp: 65
  },
  "kangaskhan" : {
    number: 115, name: "Kangaskhan", type1: "Normal",  
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png", 
    speed: 90, special_defense: 80, special_attack: 40, defense: 80, attack: 95, hp: 105
  },
  "horsea" : {
    number: 116, name: "Horsea", type1: "Water",  
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png", 
    speed: 60, special_defense: 25, special_attack: 70, defense: 70, attack: 40, hp: 30
  },
  "seadra" : {
    number: 117, name: "Seadra", type1: "Water",  
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png", 
    speed: 85, special_defense: 45, special_attack: 95, defense: 95, attack: 65, hp: 55
  },
  "goldeen" : {
    number: 118, name: "Goldeen", type1: "Water", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png", 
    speed: 63, special_defense: 50, special_attack: 35, defense: 60, attack: 67, hp: 45
  },
  "seaking" : {
    number: 119, name: "Seaking", type1: "Water", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png", 
    speed: 68, special_defense: 80, special_attack: 65, defense: 65, attack: 92, hp: 80
  },
  "staryu" : {
    number: 120, name: "Staryu", type1: "Water",  
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png", 
    speed: 85, special_defense: 55, special_attack: 70, defense: 55, attack: 45, hp: 30
  },
  "starmie" : {
    number: 121, name: "Starmie", type1: "Psychic", type2: "Water", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png", 
    speed: 112, special_defense: 85, special_attack: 100, defense: 85, attack: 75, hp: 60
  },
  "mr-mime" : {
    number: 122, name: "Mr. Mime", type1: "Fairy", type2: "Psychic", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png", 
    speed: 90, special_defense: 120, special_attack: 100, defense: 65, attack: 45, hp: 40
  },
  "scyther" : {
    number: 123, name: "Scyther", type1: "Flying", type2: "Bug", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png", 
    speed: 105, special_defense: 80, special_attack: 55, defense: 80, attack: 110, hp: 70
  },
  "jynx" : {
    number: 124, name: "Jynx", type1: "Psychic", type2: "Ice", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png", 
    speed: 95, special_defense: 95, special_attack: 115, defense: 35, attack: 50, hp: 65
  },
  "electabuzz" : {
    number: 125, name: "Electabuzz", type1: "Electric", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png", 
    speed: 105, special_defense: 85, special_attack: 95, defense: 57, attack: 83, hp: 65
  },
  "magmar" : {
    number: 126, name: "Magmar", type1: "Fire",  
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png", 
    speed: 93, special_defense: 85, special_attack: 100, defense: 57, attack: 95, hp: 65
  },
  "pinsir" : {
    number: 127, name: "Pinsir", type1: "Bug", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png", 
    speed: 85, special_defense: 70, special_attack: 55, defense: 100, attack: 125, hp: 65
  },
  "tauros" : {
    number: 128, name: "Tauros", type1: "Normal",  
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png", 
    speed: 110, special_defense: 70, special_attack: 40, defense: 95, attack: 100, hp: 75
  },
  "magikarp" : {
    number: 129, name: "Magikarp", type1: "Water",  
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png", 
    speed: 80, special_defense: 20, special_attack: 15, defense: 55, attack: 10, hp: 20
  },
  "gyarados" : {
    number: 130, name: "Gyarados", type1: "Flying", type2: "Water", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png", 
    speed: 81, special_defense: 100, special_attack: 60, defense: 79, attack: 125, hp: 95
  },
  "lapras" : {
    number: 131, name: "Lapras", type1: "Ice", type2: "Water", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png", 
    speed: 60, special_defense: 95, special_attack: 85, defense: 80, attack: 85, hp: 130
  },
  "ditto" : {
    number: 132, name: "Ditto", type1: "Normal", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png", 
    speed: 48, special_defense: 48, special_attack: 48, defense: 48, attack: 48, hp: 48
  },
  "eevee" : {
    number: 133, name: "Eevee", type1: "Normal",  
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png", 
    speed: 55, special_defense: 65, special_attack: 45, defense: 50, attack: 55, hp: 55
  },
  "vaporeon" : {
    number: 134, name: "Vaporeon", type1: "Water", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png", 
    speed: 65, special_defense: 95, special_attack: 110, defense: 60, attack: 65, hp: 130
  },
  "jolteon" : {
    number: 135, name: "Jolteon", type1: "Electric",  
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png", 
    speed: 130, special_defense: 95, special_attack: 110, defense: 60, attack: 65, hp: 65
  },
  "flareon" : {
    number: 136, name: "Flareon", type1: "Fire", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png", 
    speed: 65, special_defense: 110, special_attack: 95, defense: 60, attack: 130, hp: 65
  },
  "porygon" : {
    number: 137, name: "Porygon", type1: "Normal",  
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png", 
    speed: 40, special_defense: 75, special_attack: 85, defense: 70, attack: 60, hp: 65
  },
  "omanyte" : {
    number: 138, name: "Omanyte", type1: "Water", type2: "Rock", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png", 
    speed: 35, special_defense: 55, special_attack: 90, defense: 100, attack: 40, hp: 35
  },
  "omastar" : {
    number: 139, name: "Omastar", type1: "Water", type2: "Rock", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png", 
    speed: 55, special_defense: 70, special_attack: 115, defense: 125, attack: 60, hp: 70
  },
  "kabuto" : {
    number: 140, name: "Kabuto", type1: "Water", type2: "Rock", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png", 
    speed: 55, special_defense: 45, special_attack: 55, defense: 90, attack: 80, hp: 30
  },
  "kabutops" : {
    number: 141, name: "Kabutops", type1: "Water", type2: "Rock", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png", 
    speed: 80, special_defense: 70, special_attack: 65, defense: 105, attack: 115, hp: 60
  },
  "aerodactyl" : {
    number: 142, name: "Aerodactyl", type1: "Flying", type2: "Rock", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png", 
    speed: 130, special_defense: 75, special_attack: 60, defense: 65, attack: 105, hp: 80
  },
  "snorlax" : {
    number: 143, name: "Snorlax", type1: "Normal",  
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png", 
    speed: 30, special_defense: 110, special_attack: 65, defense: 65, attack: 110, hp: 160
  },
  "articuno" : {
    number: 144, name: "Articuno", type1: "Flying", type2: "Ice", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png", 
    speed: 85, special_defense: 125, special_attack: 95, defense: 100, attack: 85, hp: 90
  },
  "zapdos" : {
    number: 145, name: "Zapdos", type1: "Flying", type2: "Electric", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png", 
    speed: 100, special_defense: 90, special_attack: 125, defense: 85, attack: 90, hp: 90
  },
  "moltres" : {
    number: 146, name: "Moltres", type1: "Flying", type2: "Fire", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png", 
    speed: 90, special_defense: 85, special_attack: 125, defense: 90, attack: 100, hp: 90
  },
  "dratini" : {
    number: 147, name: "Dratini", type1: "Dragon", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png", 
    speed: 50, special_defense: 50, special_attack: 50, defense: 45, attack: 64, hp: 41
  },
  "dragonair" : {
    number: 148, name: "Dragonair", type1: "Dragon",  
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png", 
    speed: 70, special_defense: 70, special_attack: 70, defense: 65, attack: 80, hp: 61
  },
  "dragonite" : {
    number: 149, name: "Dragonite", type1: "Flying", type2: "Dragon", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png", 
    speed: 80, special_defense: 100, special_attack: 100, defense: 95, attack: 134, hp: 91
  },
  "mewtwo" : {
    number: 150, name: "Mewtwo", type1: "Psychic", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png", 
    speed: 130, special_defense: 90, special_attack: 154, defense: 90, attack: 110, hp: 106
  },
  "mew" : {
    number: 151, name: "Mew", type1: "Psychic", 
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png", 
    speed: 100, special_defense: 100, special_attack: 100, defense: 100, attack: 100, hp: 100
  }
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { root: 'public' });
});

router.get('/pokemon',function(req,res,next) {
  console.log("In pokemon");
  var requestedPoke = pokemon[req.query.q];
  console.log("Query: " + req.query.q);
  console.log("RequestedPoke: " + requestedPoke);
  res.status(200).json(requestedPoke);
});

router.post('/pokemonSprite',function(req, res) {
  console.log("In Pokemon Post");
  console.log(req.body);
  var name = req.body['name'];
  var url = req.body['spriteURL'];
  pokemon[name]['sprite'] = url;
  console.log(pokemon[name]);
  res.end('{"success" : "Updated Successfully", "status" : 200}');
});

module.exports = router;
