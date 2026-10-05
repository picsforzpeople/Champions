const ROSTER=[
["Scizor",212,"Bug / Steel",1,1],["Indeedee",876,"Psychic / Normal",0,0],["Mudsdale",750,"Ground",1,0],["Dragonite",149,"Dragon / Flying",1,0],["Banette",354,"Ghost",1,1],["Skeledirge",911,"Fire / Ghost",0,0],["Primarina",730,"Water / Fairy",1,0],["Falinks",870,"Fighting",0,0],
["Froslass",478,"Ice / Ghost",0,0],["Cofagrigus",563,"Ghost",0,0],["Snorlax",143,"Normal",0,0],["Volcarona",637,"Bug / Fire",0,0],["Charizard",6,"Fire / Flying",0,1],["Kangaskhan",115,"Normal",0,1],["Camerupt",323,"Fire / Ground",0,1],["Meganium",154,"Grass",0,0],
["Gardevoir",282,"Psychic / Fairy",0,1],["Skarmory",227,"Steel / Flying",0,0],["Goodra",706,"Dragon",1,0],["Arboliva",930,"Grass / Normal",1,0],["Clefable",36,"Fairy",0,0],["Scrafty",560,"Dark / Fighting",0,1],["Ninetales",38,"Fire",0,0],["Reuniclus",579,"Psychic",0,0],
["Rillaboom",812,"Grass",0,0],["Farigiraf",981,"Normal / Psychic",0,0],["Grimmsnarl",861,"Dark / Fairy",0,0],["Sylveon",700,"Fairy",0,0],["Salamence",373,"Dragon / Flying",0,1],["Tsareena",763,"Grass",0,0],["Palafin",964,"Water",0,0],["Mimikyu",778,"Ghost / Fairy",0,0],
["Garchomp",445,"Dragon / Ground",0,1],["Gholdengo",1000,"Steel / Ghost",0,0],["Mawile",303,"Steel / Fairy",0,1],["Milotic",350,"Water",0,0],["Raichu",26,"Electric",0,1],["Hawlucha",701,"Fighting / Flying",0,0],["Altaria",334,"Dragon / Flying",0,1],["Arcanine",59,"Fire",0,0]
].map(([name,dex,type,andes,mega])=>({name,dex,type,andes:!!andes,mega:!!mega,status:"Owned",sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/"+dex+".png"}));
const BUILDS={
Scizor:{ability:"Technician",nature:"—",ev:"—",item:"—",moves:["Bullet Punch","Double Hit","Breaking Swipe","Aerial Ace"],role:"Immediate pressure / partner protection",notes:"Ready in the wings. Pounce was removed; Breaking Swipe provides the preferred utility."},
Altaria:{ability:"Cloud Nine",nature:"—",ev:"—",item:"Leftovers",moves:["Tailwind","Will-O-Wisp","Heat Wave","Roost"],role:"Speed control / weather denial / sustain",notes:"Repeated match MVP. Opponents tend to panic in front of it."},
Palafin:{ability:"Zero to Hero",nature:"Brave",ev:"—",item:"Choice Scarf (tested)",moves:["Flip Turn","Jet Punch","Close Combat","Throat Chop"],role:"Pivot → Hero cleaner",notes:"Rain turns Palafin into an immediate offensive threat."},
Mawile:{ability:"—",nature:"—",ev:"—",item:"—",moves:["Swords Dance","Baton Pass","Iron Head","Play Rough"],role:"Setup pressure / Mega bait",notes:"Swagger has also been part of the toolkit."},
Mimikyu:{ability:"Disguise",nature:"—",ev:"—",item:"Bright Powder",moves:["Phantom Force","Burning Jealousy","Play Rough","Taunt"],role:"Disruption / pressure",notes:"Part of the Hydra control shell."},
Tsareena:{ability:"Queenly Majesty",nature:"—",ev:"—",item:"—",moves:["Helping Hand","Trailblaze","Taunt","High Jump Kick"],role:"Support / priority denial",notes:"Built as the queen of support."},
Milotic:{ability:"Competitive",nature:"—",ev:"—",item:"Metronome / Leftovers tested",moves:["Scald","Weather Ball","Life Dew","Icy Wind"],role:"Sustain / speed control",notes:"Flexible weather coverage and Competitive pressure."},
Grimmsnarl:{ability:"Prankster",nature:"—",ev:"—",item:"Light Clay",moves:["Parting Shot","Reflect","Body Slam","Sucker Punch"],role:"Screens / pivot",notes:"Historical Team Stalin utility core."},
Sylveon:{ability:"Pixilate",nature:"—",ev:"—",item:"Shell Bell",moves:["Hyper Voice","Mystical Fire","Sunny Day","Skill Swap"],role:"Ability manipulation / spread pressure",notes:"Skill Swap was central to the Stalin concept."},
Charizard:{ability:"Tough Claws (Mega X)",nature:"—",ev:"Bulky mixed",item:"Charizardite X",moves:["Roost","Dragon Claw","Heat Wave","Air Cutter"],role:"Bulky mixed attacker",notes:"Air Cutter was chosen for Dragon Cheer critical-hit synergy with Milotic."}
};

// Species reference is separate from the player's confirmed builds.
const CHAMPIONS_INFO={
  "Scizor": {
    "source": "https://www.serebii.net/pokedex-champions/scizor/",
    "forms": [
      {
        "name": "Scizor",
        "types": [
          "Bug",
          "Steel"
        ],
        "abilities": [
          "Swarm",
          "Technician",
          "Light Metal"
        ],
        "stats": {
          "HP": 70,
          "Attack": 130,
          "Defense": 100,
          "Sp. Atk": 55,
          "Sp. Def": 80,
          "Speed": 65
        },
        "total": 500
      },
      {
        "name": "Mega Scizor",
        "types": [
          "Bug",
          "Steel"
        ],
        "abilities": [
          "Technician"
        ],
        "stats": {
          "HP": 70,
          "Attack": 150,
          "Defense": 140,
          "Sp. Atk": 65,
          "Sp. Def": 100,
          "Speed": 75
        },
        "total": 600
      }
    ],
    "checked": "2026-10-05"
  },
  "Indeedee": {
    "source": "https://www.serebii.net/pokedex-champions/indeedee/",
    "forms": [
      {
        "name": "Indeedee (Male)",
        "types": [
          "Psychic",
          "Normal"
        ],
        "abilities": [
          "Inner Focus",
          "Synchronize",
          "Psychic Surge"
        ],
        "stats": {
          "HP": 60,
          "Attack": 65,
          "Defense": 55,
          "Sp. Atk": 105,
          "Sp. Def": 95,
          "Speed": 95
        },
        "total": 475
      },
      {
        "name": "Indeedee (Female)",
        "types": [
          "Psychic",
          "Normal"
        ],
        "abilities": [
          "Own Tempo",
          "Synchronize",
          "Psychic Surge"
        ],
        "stats": {
          "HP": 70,
          "Attack": 55,
          "Defense": 65,
          "Sp. Atk": 95,
          "Sp. Def": 105,
          "Speed": 85
        },
        "total": 475
      }
    ],
    "checked": "2026-10-05"
  },
  "Mudsdale": {
    "source": "https://www.serebii.net/pokedex-champions/mudsdale/",
    "forms": [
      {
        "name": "Mudsdale",
        "types": [
          "Ground"
        ],
        "abilities": [
          "Own Tempo",
          "Stamina",
          "Inner Focus"
        ],
        "stats": {
          "HP": 100,
          "Attack": 125,
          "Defense": 100,
          "Sp. Atk": 55,
          "Sp. Def": 85,
          "Speed": 35
        },
        "total": 500
      }
    ],
    "checked": "2026-10-05"
  },
  "Dragonite": {
    "source": "https://www.serebii.net/pokedex-champions/dragonite/",
    "forms": [
      {
        "name": "Dragonite",
        "types": [
          "Dragon",
          "Flying"
        ],
        "abilities": [
          "Inner Focus",
          "Multiscale"
        ],
        "stats": {
          "HP": 91,
          "Attack": 134,
          "Defense": 95,
          "Sp. Atk": 100,
          "Sp. Def": 100,
          "Speed": 80
        },
        "total": 600
      },
      {
        "name": "Mega Dragonite",
        "types": [
          "Dragon",
          "Flying"
        ],
        "abilities": [
          "Multiscale"
        ],
        "stats": {
          "HP": 91,
          "Attack": 124,
          "Defense": 115,
          "Sp. Atk": 145,
          "Sp. Def": 125,
          "Speed": 100
        },
        "total": 700
      }
    ],
    "checked": "2026-10-05"
  },
  "Banette": {
    "source": "https://www.serebii.net/pokedex-champions/banette/",
    "forms": [
      {
        "name": "Banette",
        "types": [
          "Ghost"
        ],
        "abilities": [
          "Insomnia",
          "Frisk",
          "Cursed Body"
        ],
        "stats": {
          "HP": 64,
          "Attack": 115,
          "Defense": 65,
          "Sp. Atk": 83,
          "Sp. Def": 63,
          "Speed": 65
        },
        "total": 455
      },
      {
        "name": "Mega Banette",
        "types": [
          "Ghost"
        ],
        "abilities": [
          "Prankster"
        ],
        "stats": {
          "HP": 64,
          "Attack": 165,
          "Defense": 75,
          "Sp. Atk": 93,
          "Sp. Def": 83,
          "Speed": 75
        },
        "total": 555
      }
    ],
    "checked": "2026-10-05"
  },
  "Skeledirge": {
    "source": "https://www.serebii.net/pokedex-champions/skeledirge/",
    "forms": [
      {
        "name": "Skeledirge",
        "types": [
          "Fire",
          "Ghost"
        ],
        "abilities": [
          "Blaze",
          "Unaware"
        ],
        "stats": {
          "HP": 104,
          "Attack": 75,
          "Defense": 100,
          "Sp. Atk": 110,
          "Sp. Def": 75,
          "Speed": 66
        },
        "total": 530
      }
    ],
    "checked": "2026-10-05"
  },
  "Primarina": {
    "source": "https://www.serebii.net/pokedex-champions/primarina/",
    "forms": [
      {
        "name": "Primarina",
        "types": [
          "Water",
          "Fairy"
        ],
        "abilities": [
          "Torrent",
          "Liquid Voice"
        ],
        "stats": {
          "HP": 80,
          "Attack": 74,
          "Defense": 74,
          "Sp. Atk": 126,
          "Sp. Def": 116,
          "Speed": 60
        },
        "total": 530
      }
    ],
    "checked": "2026-10-05"
  },
  "Falinks": {
    "source": "https://www.serebii.net/pokedex-champions/falinks/",
    "forms": [
      {
        "name": "Falinks",
        "types": [
          "Fighting"
        ],
        "abilities": [
          "Battle Armor",
          "Defiant"
        ],
        "stats": {
          "HP": 65,
          "Attack": 100,
          "Defense": 100,
          "Sp. Atk": 70,
          "Sp. Def": 60,
          "Speed": 75
        },
        "total": 470
      },
      {
        "name": "Mega Falinks",
        "types": [
          "Fighting"
        ],
        "abilities": [
          "Defiant"
        ],
        "stats": {
          "HP": 65,
          "Attack": 135,
          "Defense": 135,
          "Sp. Atk": 70,
          "Sp. Def": 65,
          "Speed": 100
        },
        "total": 570
      }
    ],
    "checked": "2026-10-05"
  },
  "Froslass": {
    "source": "https://www.serebii.net/pokedex-champions/froslass/",
    "forms": [
      {
        "name": "Froslass",
        "types": [
          "Ice",
          "Ghost"
        ],
        "abilities": [
          "Snow Cloak",
          "Cursed Body"
        ],
        "stats": {
          "HP": 70,
          "Attack": 80,
          "Defense": 70,
          "Sp. Atk": 80,
          "Sp. Def": 70,
          "Speed": 110
        },
        "total": 480
      },
      {
        "name": "Mega Froslass",
        "types": [
          "Ice",
          "Ghost"
        ],
        "abilities": [
          "Snow Warning"
        ],
        "stats": {
          "HP": 70,
          "Attack": 80,
          "Defense": 70,
          "Sp. Atk": 140,
          "Sp. Def": 100,
          "Speed": 120
        },
        "total": 580
      }
    ],
    "checked": "2026-10-05"
  },
  "Cofagrigus": {
    "source": "https://www.serebii.net/pokedex-champions/cofagrigus/",
    "forms": [
      {
        "name": "Cofagrigus",
        "types": [
          "Ghost"
        ],
        "abilities": [
          "Mummy"
        ],
        "stats": {
          "HP": 58,
          "Attack": 50,
          "Defense": 145,
          "Sp. Atk": 95,
          "Sp. Def": 105,
          "Speed": 30
        },
        "total": 483
      }
    ],
    "checked": "2026-10-05"
  },
  "Snorlax": {
    "source": "https://www.serebii.net/pokedex-champions/snorlax/",
    "forms": [
      {
        "name": "Snorlax",
        "types": [
          "Normal"
        ],
        "abilities": [
          "Immunity",
          "Thick Fat",
          "Gluttony"
        ],
        "stats": {
          "HP": 160,
          "Attack": 110,
          "Defense": 65,
          "Sp. Atk": 65,
          "Sp. Def": 110,
          "Speed": 30
        },
        "total": 540
      }
    ],
    "checked": "2026-10-05"
  },
  "Volcarona": {
    "source": "https://www.serebii.net/pokedex-champions/volcarona/",
    "forms": [
      {
        "name": "Volcarona",
        "types": [
          "Bug",
          "Fire"
        ],
        "abilities": [
          "Flame Body",
          "Swarm"
        ],
        "stats": {
          "HP": 85,
          "Attack": 60,
          "Defense": 65,
          "Sp. Atk": 135,
          "Sp. Def": 105,
          "Speed": 100
        },
        "total": 550
      }
    ],
    "checked": "2026-10-05"
  },
  "Charizard": {
    "source": "https://www.serebii.net/pokedex-champions/charizard/",
    "forms": [
      {
        "name": "Charizard",
        "types": [
          "Fire",
          "Flying"
        ],
        "abilities": [
          "Blaze",
          "Solar Power"
        ],
        "stats": {
          "HP": 78,
          "Attack": 84,
          "Defense": 78,
          "Sp. Atk": 109,
          "Sp. Def": 85,
          "Speed": 100
        },
        "total": 534
      },
      {
        "name": "Mega Charizard X",
        "types": [
          "Fire",
          "Dragon"
        ],
        "abilities": [
          "Tough Claws"
        ],
        "stats": {
          "HP": 78,
          "Attack": 130,
          "Defense": 111,
          "Sp. Atk": 130,
          "Sp. Def": 85,
          "Speed": 100
        },
        "total": 634
      },
      {
        "name": "Mega Charizard Y",
        "types": [
          "Fire",
          "Flying"
        ],
        "abilities": [
          "Drought"
        ],
        "stats": {
          "HP": 78,
          "Attack": 104,
          "Defense": 78,
          "Sp. Atk": 159,
          "Sp. Def": 115,
          "Speed": 100
        },
        "total": 634
      }
    ],
    "checked": "2026-10-05"
  },
  "Kangaskhan": {
    "source": "https://www.serebii.net/pokedex-champions/kangaskhan/",
    "forms": [
      {
        "name": "Kangaskhan",
        "types": [
          "Normal"
        ],
        "abilities": [
          "Early Bird",
          "Scrappy",
          "Inner Focus"
        ],
        "stats": {
          "HP": 105,
          "Attack": 95,
          "Defense": 80,
          "Sp. Atk": 40,
          "Sp. Def": 80,
          "Speed": 90
        },
        "total": 490
      },
      {
        "name": "Mega Kangaskhan",
        "types": [
          "Normal"
        ],
        "abilities": [
          "Parental Bond"
        ],
        "stats": {
          "HP": 105,
          "Attack": 125,
          "Defense": 100,
          "Sp. Atk": 60,
          "Sp. Def": 100,
          "Speed": 100
        },
        "total": 590
      }
    ],
    "checked": "2026-10-05"
  },
  "Camerupt": {
    "source": "https://www.serebii.net/pokedex-champions/camerupt/",
    "forms": [
      {
        "name": "Camerupt",
        "types": [
          "Fire",
          "Ground"
        ],
        "abilities": [
          "Magma Armor",
          "Solid Rock",
          "Anger Point"
        ],
        "stats": {
          "HP": 70,
          "Attack": 100,
          "Defense": 70,
          "Sp. Atk": 105,
          "Sp. Def": 75,
          "Speed": 40
        },
        "total": 460
      },
      {
        "name": "Mega Camerupt",
        "types": [
          "Fire",
          "Ground"
        ],
        "abilities": [
          "Sheer Force"
        ],
        "stats": {
          "HP": 70,
          "Attack": 120,
          "Defense": 100,
          "Sp. Atk": 145,
          "Sp. Def": 105,
          "Speed": 20
        },
        "total": 560
      }
    ],
    "checked": "2026-10-05"
  },
  "Meganium": {
    "source": "https://www.serebii.net/pokedex-champions/meganium/",
    "forms": [
      {
        "name": "Meganium",
        "types": [
          "Grass"
        ],
        "abilities": [
          "Overgrow",
          "Leaf Guard"
        ],
        "stats": {
          "HP": 80,
          "Attack": 82,
          "Defense": 100,
          "Sp. Atk": 83,
          "Sp. Def": 100,
          "Speed": 80
        },
        "total": 525
      },
      {
        "name": "Mega Meganium",
        "types": [
          "Grass",
          "Fairy"
        ],
        "abilities": [
          "Mega Sol"
        ],
        "stats": {
          "HP": 80,
          "Attack": 92,
          "Defense": 115,
          "Sp. Atk": 143,
          "Sp. Def": 115,
          "Speed": 80
        },
        "total": 625
      }
    ],
    "checked": "2026-10-05"
  },
  "Gardevoir": {
    "source": "https://www.serebii.net/pokedex-champions/gardevoir/",
    "forms": [
      {
        "name": "Gardevoir",
        "types": [
          "Psychic",
          "Fairy"
        ],
        "abilities": [
          "Synchronize",
          "Trace",
          "Telepathy"
        ],
        "stats": {
          "HP": 68,
          "Attack": 65,
          "Defense": 65,
          "Sp. Atk": 125,
          "Sp. Def": 115,
          "Speed": 80
        },
        "total": 518
      },
      {
        "name": "Mega Gardevoir",
        "types": [
          "Psychic",
          "Fairy"
        ],
        "abilities": [
          "Pixilate"
        ],
        "stats": {
          "HP": 68,
          "Attack": 85,
          "Defense": 65,
          "Sp. Atk": 165,
          "Sp. Def": 135,
          "Speed": 100
        },
        "total": 618
      }
    ],
    "checked": "2026-10-05"
  },
  "Skarmory": {
    "source": "https://www.serebii.net/pokedex-champions/skarmory/",
    "forms": [
      {
        "name": "Skarmory",
        "types": [
          "Steel",
          "Flying"
        ],
        "abilities": [
          "Keen Eye",
          "Sturdy",
          "Weak Armor"
        ],
        "stats": {
          "HP": 65,
          "Attack": 80,
          "Defense": 140,
          "Sp. Atk": 40,
          "Sp. Def": 70,
          "Speed": 70
        },
        "total": 465
      },
      {
        "name": "Mega Skarmory",
        "types": [
          "Steel",
          "Flying"
        ],
        "abilities": [
          "Stalwart"
        ],
        "stats": {
          "HP": 65,
          "Attack": 140,
          "Defense": 110,
          "Sp. Atk": 40,
          "Sp. Def": 100,
          "Speed": 110
        },
        "total": 565
      }
    ],
    "checked": "2026-10-05"
  },
  "Goodra": {
    "source": "https://www.serebii.net/pokedex-champions/goodra/",
    "forms": [
      {
        "name": "Goodra",
        "types": [
          "Dragon"
        ],
        "abilities": [
          "Sap Sipper",
          "Hydration",
          "Gooey"
        ],
        "stats": {
          "HP": 90,
          "Attack": 100,
          "Defense": 70,
          "Sp. Atk": 110,
          "Sp. Def": 150,
          "Speed": 80
        },
        "total": 600
      },
      {
        "name": "Hisuian Goodra",
        "types": [
          "Steel",
          "Dragon"
        ],
        "abilities": [
          "Sap Sipper",
          "Shell Armor",
          "Gooey"
        ],
        "stats": {
          "HP": 80,
          "Attack": 100,
          "Defense": 100,
          "Sp. Atk": 110,
          "Sp. Def": 150,
          "Speed": 60
        },
        "total": 600
      }
    ],
    "checked": "2026-10-05"
  },
  "Arboliva": {
    "source": "https://www.serebii.net/pokedex-champions/arboliva/",
    "forms": [
      {
        "name": "Arboliva",
        "types": [
          "Grass",
          "Normal"
        ],
        "abilities": [
          "Seed Sower",
          "Harvest"
        ],
        "stats": {
          "HP": 78,
          "Attack": 69,
          "Defense": 90,
          "Sp. Atk": 125,
          "Sp. Def": 109,
          "Speed": 39
        },
        "total": 510
      }
    ],
    "checked": "2026-10-05"
  },
  "Clefable": {
    "source": "https://www.serebii.net/pokedex-champions/clefable/",
    "forms": [
      {
        "name": "Clefable",
        "types": [
          "Fairy"
        ],
        "abilities": [
          "Cute Charm",
          "Magic Guard",
          "Unaware"
        ],
        "stats": {
          "HP": 95,
          "Attack": 70,
          "Defense": 73,
          "Sp. Atk": 95,
          "Sp. Def": 90,
          "Speed": 60
        },
        "total": 483
      },
      {
        "name": "Mega Clefable",
        "types": [
          "Fairy",
          "Flying"
        ],
        "abilities": [
          "Magic Bounce"
        ],
        "stats": {
          "HP": 95,
          "Attack": 80,
          "Defense": 93,
          "Sp. Atk": 135,
          "Sp. Def": 110,
          "Speed": 70
        },
        "total": 583
      }
    ],
    "checked": "2026-10-05"
  },
  "Scrafty": {
    "source": "https://www.serebii.net/pokedex-champions/scrafty/",
    "forms": [
      {
        "name": "Scrafty",
        "types": [
          "Dark",
          "Fighting"
        ],
        "abilities": [
          "Shed Skin",
          "Moxie",
          "Intimidate"
        ],
        "stats": {
          "HP": 65,
          "Attack": 90,
          "Defense": 115,
          "Sp. Atk": 45,
          "Sp. Def": 115,
          "Speed": 58
        },
        "total": 488
      },
      {
        "name": "Mega Scrafty",
        "types": [
          "Dark",
          "Fighting"
        ],
        "abilities": [
          "Intimidate"
        ],
        "stats": {
          "HP": 65,
          "Attack": 130,
          "Defense": 135,
          "Sp. Atk": 55,
          "Sp. Def": 135,
          "Speed": 68
        },
        "total": 588
      }
    ],
    "checked": "2026-10-05"
  },
  "Ninetales": {
    "source": "https://www.serebii.net/pokedex-champions/ninetales/",
    "forms": [
      {
        "name": "Ninetales",
        "types": [
          "Fire"
        ],
        "abilities": [
          "Flash Fire",
          "Drought"
        ],
        "stats": {
          "HP": 73,
          "Attack": 76,
          "Defense": 75,
          "Sp. Atk": 81,
          "Sp. Def": 100,
          "Speed": 100
        },
        "total": 505
      },
      {
        "name": "Alolan Ninetales",
        "types": [
          "Ice",
          "Fairy"
        ],
        "abilities": [
          "Snow Cloak",
          "Snow Warning"
        ],
        "stats": {
          "HP": 73,
          "Attack": 67,
          "Defense": 75,
          "Sp. Atk": 81,
          "Sp. Def": 100,
          "Speed": 109
        },
        "total": 505
      }
    ],
    "checked": "2026-10-05"
  },
  "Reuniclus": {
    "source": "https://www.serebii.net/pokedex-champions/reuniclus/",
    "forms": [
      {
        "name": "Reuniclus",
        "types": [
          "Psychic"
        ],
        "abilities": [
          "Overcoat",
          "Magic Guard",
          "Regenerator"
        ],
        "stats": {
          "HP": 110,
          "Attack": 65,
          "Defense": 75,
          "Sp. Atk": 125,
          "Sp. Def": 85,
          "Speed": 30
        },
        "total": 490
      }
    ],
    "checked": "2026-10-05"
  },
  "Rillaboom": {
    "source": "https://www.serebii.net/pokedex-champions/rillaboom/",
    "forms": [
      {
        "name": "Rillaboom",
        "types": [
          "Grass"
        ],
        "abilities": [
          "Overgrow",
          "Grassy Surge"
        ],
        "stats": {
          "HP": 100,
          "Attack": 125,
          "Defense": 90,
          "Sp. Atk": 60,
          "Sp. Def": 70,
          "Speed": 85
        },
        "total": 530
      }
    ],
    "checked": "2026-10-05"
  },
  "Farigiraf": {
    "source": "https://www.serebii.net/pokedex-champions/farigiraf/",
    "forms": [
      {
        "name": "Farigiraf",
        "types": [
          "Normal",
          "Psychic"
        ],
        "abilities": [
          "Cud Chew",
          "Armor Tail",
          "Sap Sipper"
        ],
        "stats": {
          "HP": 120,
          "Attack": 90,
          "Defense": 70,
          "Sp. Atk": 110,
          "Sp. Def": 70,
          "Speed": 60
        },
        "total": 520
      }
    ],
    "checked": "2026-10-05"
  },
  "Grimmsnarl": {
    "source": "https://www.serebii.net/pokedex-champions/grimmsnarl/",
    "forms": [
      {
        "name": "Grimmsnarl",
        "types": [
          "Dark",
          "Fairy"
        ],
        "abilities": [
          "Prankster",
          "Frisk",
          "Pickpocket"
        ],
        "stats": {
          "HP": 95,
          "Attack": 120,
          "Defense": 65,
          "Sp. Atk": 95,
          "Sp. Def": 75,
          "Speed": 60
        },
        "total": 510
      }
    ],
    "checked": "2026-10-05"
  },
  "Sylveon": {
    "source": "https://www.serebii.net/pokedex-champions/sylveon/",
    "forms": [
      {
        "name": "Sylveon",
        "types": [
          "Fairy"
        ],
        "abilities": [
          "Cute Charm",
          "Pixilate"
        ],
        "stats": {
          "HP": 95,
          "Attack": 65,
          "Defense": 65,
          "Sp. Atk": 110,
          "Sp. Def": 130,
          "Speed": 60
        },
        "total": 525
      }
    ],
    "checked": "2026-10-05"
  },
  "Salamence": {
    "source": "https://www.serebii.net/pokedex-champions/salamence/",
    "forms": [
      {
        "name": "Salamence",
        "types": [
          "Dragon",
          "Flying"
        ],
        "abilities": [
          "Intimidate",
          "Moxie"
        ],
        "stats": {
          "HP": 95,
          "Attack": 135,
          "Defense": 80,
          "Sp. Atk": 110,
          "Sp. Def": 80,
          "Speed": 100
        },
        "total": 600
      },
      {
        "name": "Mega Salamence",
        "types": [
          "Dragon",
          "Flying"
        ],
        "abilities": [
          "Aerilate"
        ],
        "stats": {
          "HP": 95,
          "Attack": 145,
          "Defense": 130,
          "Sp. Atk": 120,
          "Sp. Def": 90,
          "Speed": 120
        },
        "total": 700
      }
    ],
    "checked": "2026-10-05"
  },
  "Tsareena": {
    "source": "https://www.serebii.net/pokedex-champions/tsareena/",
    "forms": [
      {
        "name": "Tsareena",
        "types": [
          "Grass"
        ],
        "abilities": [
          "Leaf Guard",
          "Queenly Majesty",
          "Sweet Veil"
        ],
        "stats": {
          "HP": 72,
          "Attack": 120,
          "Defense": 98,
          "Sp. Atk": 50,
          "Sp. Def": 98,
          "Speed": 72
        },
        "total": 510
      }
    ],
    "checked": "2026-10-05"
  },
  "Palafin": {
    "source": "https://www.serebii.net/pokedex-champions/palafin/",
    "forms": [
      {
        "name": "Palafin (Zero)",
        "types": [
          "Water"
        ],
        "abilities": [
          "Zero to Hero"
        ],
        "stats": {
          "HP": 100,
          "Attack": 70,
          "Defense": 72,
          "Sp. Atk": 53,
          "Sp. Def": 62,
          "Speed": 100
        },
        "total": 457
      },
      {
        "name": "Palafin (Hero)",
        "types": [
          "Water"
        ],
        "abilities": [
          "Zero to Hero"
        ],
        "stats": {
          "HP": 100,
          "Attack": 160,
          "Defense": 97,
          "Sp. Atk": 106,
          "Sp. Def": 87,
          "Speed": 100
        },
        "total": 650
      }
    ],
    "checked": "2026-10-05"
  },
  "Mimikyu": {
    "source": "https://www.serebii.net/pokedex-champions/mimikyu/",
    "forms": [
      {
        "name": "Mimikyu",
        "types": [
          "Ghost",
          "Fairy"
        ],
        "abilities": [
          "Disguise"
        ],
        "stats": {
          "HP": 55,
          "Attack": 90,
          "Defense": 80,
          "Sp. Atk": 50,
          "Sp. Def": 105,
          "Speed": 96
        },
        "total": 476
      }
    ],
    "checked": "2026-10-05"
  },
  "Garchomp": {
    "source": "https://www.serebii.net/pokedex-champions/garchomp/",
    "forms": [
      {
        "name": "Garchomp",
        "types": [
          "Dragon",
          "Ground"
        ],
        "abilities": [
          "Sand Veil",
          "Rough Skin"
        ],
        "stats": {
          "HP": 108,
          "Attack": 130,
          "Defense": 95,
          "Sp. Atk": 80,
          "Sp. Def": 85,
          "Speed": 102
        },
        "total": 600
      },
      {
        "name": "Mega Garchomp",
        "types": [
          "Dragon",
          "Ground"
        ],
        "abilities": [
          "Sand Force"
        ],
        "stats": {
          "HP": 108,
          "Attack": 170,
          "Defense": 115,
          "Sp. Atk": 120,
          "Sp. Def": 95,
          "Speed": 92
        },
        "total": 700
      },
      {
        "name": "Mega Garchomp Z",
        "types": [
          "Dragon"
        ],
        "abilities": [
          "Levitate"
        ],
        "stats": {
          "HP": 108,
          "Attack": 130,
          "Defense": 85,
          "Sp. Atk": 141,
          "Sp. Def": 85,
          "Speed": 151
        },
        "total": 700
      }
    ],
    "checked": "2026-10-05"
  },
  "Gholdengo": {
    "source": "https://www.serebii.net/pokedex-champions/gholdengo/",
    "forms": [
      {
        "name": "Gholdengo",
        "types": [
          "Steel",
          "Ghost"
        ],
        "abilities": [
          "Good as Gold"
        ],
        "stats": {
          "HP": 87,
          "Attack": 60,
          "Defense": 95,
          "Sp. Atk": 133,
          "Sp. Def": 91,
          "Speed": 84
        },
        "total": 550
      }
    ],
    "checked": "2026-10-05"
  },
  "Mawile": {
    "source": "https://www.serebii.net/pokedex-champions/mawile/",
    "forms": [
      {
        "name": "Mawile",
        "types": [
          "Steel",
          "Fairy"
        ],
        "abilities": [
          "Hyper Cutter",
          "Intimidate",
          "Sheer Force"
        ],
        "stats": {
          "HP": 50,
          "Attack": 85,
          "Defense": 85,
          "Sp. Atk": 55,
          "Sp. Def": 55,
          "Speed": 50
        },
        "total": 380
      },
      {
        "name": "Mega Mawile",
        "types": [
          "Steel",
          "Fairy"
        ],
        "abilities": [
          "Huge Power"
        ],
        "stats": {
          "HP": 50,
          "Attack": 105,
          "Defense": 125,
          "Sp. Atk": 55,
          "Sp. Def": 95,
          "Speed": 50
        },
        "total": 480
      }
    ],
    "checked": "2026-10-05"
  },
  "Milotic": {
    "source": "https://www.serebii.net/pokedex-champions/milotic/",
    "forms": [
      {
        "name": "Milotic",
        "types": [
          "Water"
        ],
        "abilities": [
          "Marvel Scale",
          "Competitive",
          "Cute Charm"
        ],
        "stats": {
          "HP": 95,
          "Attack": 60,
          "Defense": 79,
          "Sp. Atk": 100,
          "Sp. Def": 125,
          "Speed": 81
        },
        "total": 540
      }
    ],
    "checked": "2026-10-05"
  },
  "Raichu": {
    "source": "https://www.serebii.net/pokedex-champions/raichu/",
    "forms": [
      {
        "name": "Raichu",
        "types": [
          "Electric"
        ],
        "abilities": [
          "Static",
          "Lightning Rod"
        ],
        "stats": {
          "HP": 60,
          "Attack": 90,
          "Defense": 55,
          "Sp. Atk": 90,
          "Sp. Def": 80,
          "Speed": 110
        },
        "total": 485
      },
      {
        "name": "Alolan Raichu",
        "types": [
          "Electric",
          "Psychic"
        ],
        "abilities": [
          "Surge Surfer"
        ],
        "stats": {
          "HP": 60,
          "Attack": 85,
          "Defense": 50,
          "Sp. Atk": 95,
          "Sp. Def": 85,
          "Speed": 110
        },
        "total": 485
      },
      {
        "name": "Mega Raichu X",
        "types": [
          "Electric"
        ],
        "abilities": [
          "Electric Surge"
        ],
        "stats": {
          "HP": 60,
          "Attack": 135,
          "Defense": 95,
          "Sp. Atk": 90,
          "Sp. Def": 95,
          "Speed": 110
        },
        "total": 585
      },
      {
        "name": "Mega Raichu Y",
        "types": [
          "Electric"
        ],
        "abilities": [
          "No Guard"
        ],
        "stats": {
          "HP": 60,
          "Attack": 100,
          "Defense": 55,
          "Sp. Atk": 160,
          "Sp. Def": 80,
          "Speed": 130
        },
        "total": 585
      }
    ],
    "checked": "2026-10-05"
  },
  "Hawlucha": {
    "source": "https://www.serebii.net/pokedex-champions/hawlucha/",
    "forms": [
      {
        "name": "Hawlucha",
        "types": [
          "Fighting",
          "Flying"
        ],
        "abilities": [
          "Limber",
          "Unburden",
          "Mold Breaker"
        ],
        "stats": {
          "HP": 78,
          "Attack": 92,
          "Defense": 75,
          "Sp. Atk": 74,
          "Sp. Def": 63,
          "Speed": 118
        },
        "total": 500
      },
      {
        "name": "Mega Hawlucha",
        "types": [
          "Fighting",
          "Flying"
        ],
        "abilities": [
          "No Guard"
        ],
        "stats": {
          "HP": 78,
          "Attack": 137,
          "Defense": 100,
          "Sp. Atk": 74,
          "Sp. Def": 93,
          "Speed": 118
        },
        "total": 600
      }
    ],
    "checked": "2026-10-05"
  },
  "Altaria": {
    "source": "https://www.serebii.net/pokedex-champions/altaria/",
    "forms": [
      {
        "name": "Altaria",
        "types": [
          "Dragon",
          "Flying"
        ],
        "abilities": [
          "Natural Cure",
          "Cloud Nine"
        ],
        "stats": {
          "HP": 75,
          "Attack": 70,
          "Defense": 90,
          "Sp. Atk": 70,
          "Sp. Def": 105,
          "Speed": 80
        },
        "total": 490
      },
      {
        "name": "Mega Altaria",
        "types": [
          "Dragon",
          "Fairy"
        ],
        "abilities": [
          "Pixilate"
        ],
        "stats": {
          "HP": 75,
          "Attack": 110,
          "Defense": 110,
          "Sp. Atk": 110,
          "Sp. Def": 105,
          "Speed": 80
        },
        "total": 590
      }
    ],
    "checked": "2026-10-05"
  },
  "Arcanine": {
    "source": "https://www.serebii.net/pokedex-champions/arcanine/",
    "forms": [
      {
        "name": "Arcanine",
        "types": [
          "Fire"
        ],
        "abilities": [
          "Intimidate",
          "Flash Fire",
          "Justified"
        ],
        "stats": {
          "HP": 90,
          "Attack": 110,
          "Defense": 80,
          "Sp. Atk": 100,
          "Sp. Def": 80,
          "Speed": 95
        },
        "total": 555
      },
      {
        "name": "Hisuian Arcanine",
        "types": [
          "Fire",
          "Rock"
        ],
        "abilities": [
          "Intimidate",
          "Flash Fire",
          "Rock Head"
        ],
        "stats": {
          "HP": 95,
          "Attack": 115,
          "Defense": 80,
          "Sp. Atk": 95,
          "Sp. Def": 80,
          "Speed": 90
        },
        "total": 555
      }
    ],
    "checked": "2026-10-05"
  }
};

// Current personal builds transcribed from the full 40 screenshot batch.
const SCREENSHOT_BUILDS={
  "Arcanine": {
    "nature": "Adamant",
    "ability": "Intimidate",
    "stats": {
      "HP": 167,
      "Attack": 178,
      "Defense": 100,
      "Sp. Atk": 108,
      "Sp. Def": 100,
      "Speed": 147
    },
    "training": {
      "HP": 2,
      "Attack": 32,
      "Defense": 0,
      "Sp. Atk": 0,
      "Sp. Def": 0,
      "Speed": 32
    },
    "moves": [
      "Flare Blitz",
      "Psychic Fangs",
      "Extreme Speed",
      "Wild Charge"
    ],
    "gender": "Male",
    "form": "Arcanine",
    "status": "Permanently recruited",
    "confirmed": "2026-10-05",
    "item": "Not confirmed \u2014 not shown in screenshot"
  },
  "Altaria": {
    "nature": "Modest",
    "ability": "Cloud Nine",
    "stats": {
      "HP": 182,
      "Attack": 81,
      "Defense": 110,
      "Sp. Atk": 101,
      "Sp. Def": 125,
      "Speed": 132
    },
    "training": {
      "HP": 32,
      "Attack": 0,
      "Defense": 0,
      "Sp. Atk": 2,
      "Sp. Def": 0,
      "Speed": 32
    },
    "moves": [
      "Hyper Voice",
      "Roost",
      "Will-O-Wisp",
      "Tailwind"
    ],
    "gender": "Female",
    "form": "Altaria",
    "status": "Permanently recruited",
    "confirmed": "2026-10-05",
    "item": "Not confirmed \u2014 not shown in screenshot"
  },
  "Hawlucha": {
    "nature": "Adamant",
    "ability": "Mold Breaker",
    "stats": {
      "HP": 155,
      "Attack": 158,
      "Defense": 95,
      "Sp. Atk": 84,
      "Sp. Def": 83,
      "Speed": 170
    },
    "training": {
      "HP": 2,
      "Attack": 32,
      "Defense": 0,
      "Sp. Atk": 0,
      "Sp. Def": 0,
      "Speed": 32
    },
    "moves": [
      "High Jump Kick",
      "Dual Wingbeat",
      "Stone Edge",
      "Drain Punch"
    ],
    "gender": "Male",
    "form": "Hawlucha",
    "status": "Permanently recruited",
    "confirmed": "2026-10-05",
    "item": "Not confirmed \u2014 not shown in screenshot"
  },
  "Raichu": {
    "nature": "Timid",
    "ability": "Lightning Rod",
    "stats": {
      "HP": 137,
      "Attack": 99,
      "Defense": 75,
      "Sp. Atk": 142,
      "Sp. Def": 100,
      "Speed": 178
    },
    "training": {
      "HP": 2,
      "Attack": 0,
      "Defense": 0,
      "Sp. Atk": 32,
      "Sp. Def": 0,
      "Speed": 32
    },
    "moves": [
      "Rising Voltage",
      "Surf",
      "Encore",
      "Electroweb"
    ],
    "gender": "Male",
    "form": "Raichu",
    "status": "Permanently recruited",
    "confirmed": "2026-10-05",
    "item": "Not confirmed \u2014 not shown in screenshot"
  },
  "Milotic": {
    "nature": "Bold",
    "ability": "Marvel Scale",
    "stats": {
      "HP": 202,
      "Attack": 72,
      "Defense": 144,
      "Sp. Atk": 120,
      "Sp. Def": 147,
      "Speed": 101
    },
    "training": {
      "HP": 32,
      "Attack": 0,
      "Defense": 32,
      "Sp. Atk": 0,
      "Sp. Def": 2,
      "Speed": 0
    },
    "moves": [
      "Scald",
      "Protect",
      "Life Dew",
      "Dragon Cheer"
    ],
    "gender": "Female",
    "form": "Milotic",
    "status": "Permanently recruited",
    "confirmed": "2026-10-05",
    "item": "Not confirmed \u2014 not shown in screenshot"
  },
  "Mawile": {
    "nature": "Naughty",
    "ability": "Intimidate",
    "stats": {
      "HP": 157,
      "Attack": 150,
      "Defense": 107,
      "Sp. Atk": 75,
      "Sp. Def": 67,
      "Speed": 70
    },
    "training": {
      "HP": 32,
      "Attack": 32,
      "Defense": 2,
      "Sp. Atk": 0,
      "Sp. Def": 0,
      "Speed": 0
    },
    "moves": [
      "Iron Head",
      "Baton Pass",
      "Swords Dance",
      "Swagger"
    ],
    "gender": "Male",
    "form": "Mawile",
    "status": "Permanently recruited",
    "confirmed": "2026-10-05",
    "item": "Not confirmed \u2014 not shown in screenshot"
  },
  "Garchomp": {
    "nature": "Adamant",
    "ability": "Rough Skin",
    "stats": {
      "HP": 185,
      "Attack": 200,
      "Defense": 115,
      "Sp. Atk": 90,
      "Sp. Def": 105,
      "Speed": 154
    },
    "training": {
      "HP": 2,
      "Attack": 32,
      "Defense": 0,
      "Sp. Atk": 0,
      "Sp. Def": 0,
      "Speed": 32
    },
    "moves": [
      "Earthquake",
      "Dragon Tail",
      "Poison Jab",
      "Protect"
    ],
    "gender": "Male",
    "form": "Garchomp",
    "status": "Permanently recruited",
    "confirmed": "2026-10-05",
    "item": "Not confirmed \u2014 not shown in screenshot"
  },
  "Mimikyu": {
    "nature": "Careful",
    "ability": "Disguise",
    "stats": {
      "HP": 162,
      "Attack": 142,
      "Defense": 100,
      "Sp. Atk": 63,
      "Sp. Def": 137,
      "Speed": 118
    },
    "training": {
      "HP": 32,
      "Attack": 32,
      "Defense": 0,
      "Sp. Atk": 0,
      "Sp. Def": 0,
      "Speed": 2
    },
    "moves": [
      "Play Rough",
      "Phantom Force",
      "Charm",
      "Night Shade"
    ],
    "gender": "Female",
    "form": "Disguised Form",
    "status": "Permanently recruited",
    "confirmed": "2026-10-05",
    "item": "Not confirmed \u2014 not shown in screenshot"
  },
  "Gholdengo": {
    "nature": "Modest",
    "ability": "Good as Gold",
    "stats": {
      "HP": 194,
      "Attack": 72,
      "Defense": 115,
      "Sp. Atk": 203,
      "Sp. Def": 113,
      "Speed": 104
    },
    "training": {
      "HP": 32,
      "Attack": 0,
      "Defense": 0,
      "Sp. Atk": 32,
      "Sp. Def": 2,
      "Speed": 0
    },
    "moves": [
      "Make It Rain",
      "Memento",
      "Shadow Ball",
      "Protect"
    ],
    "gender": "Genderless",
    "form": "Gholdengo",
    "status": "Permanently recruited",
    "confirmed": "2026-10-05",
    "item": "Not confirmed \u2014 not shown in screenshot"
  },
  "Palafin": {
    "nature": "Adamant",
    "ability": "Zero to Hero",
    "stats": {
      "HP": 207,
      "Attack": 134,
      "Defense": 92,
      "Sp. Atk": 65,
      "Sp. Def": 82,
      "Speed": 122
    },
    "training": {
      "HP": 32,
      "Attack": 32,
      "Defense": 0,
      "Sp. Atk": 0,
      "Sp. Def": 0,
      "Speed": 2
    },
    "moves": [
      "Jet Punch",
      "Throat Chop",
      "Flip Turn",
      "Protect"
    ],
    "gender": "Male",
    "form": "Palafin (Zero)",
    "status": "Permanently recruited",
    "confirmed": "2026-10-05",
    "item": "Not confirmed \u2014 not shown in screenshot"
  },
  "Tsareena": {
    "nature": "Adamant",
    "ability": "Queenly Majesty",
    "stats": {
      "HP": 179,
      "Attack": 189,
      "Defense": 118,
      "Sp. Atk": 63,
      "Sp. Def": 120,
      "Speed": 92
    },
    "training": {
      "HP": 32,
      "Attack": 32,
      "Defense": 0,
      "Sp. Atk": 0,
      "Sp. Def": 2,
      "Speed": 0
    },
    "moves": [
      "Trop Kick",
      "U-turn",
      "Light Screen",
      "Solar Blade"
    ],
    "gender": "Female",
    "form": "Tsareena",
    "status": "Permanently recruited",
    "confirmed": "2026-10-05",
    "item": "Not confirmed \u2014 not shown in screenshot"
  },
  "Salamence": {
    "nature": "Adamant",
    "ability": "Moxie",
    "stats": {
      "HP": 202,
      "Attack": 205,
      "Defense": 102,
      "Sp. Atk": 117,
      "Sp. Def": 100,
      "Speed": 120
    },
    "training": {
      "HP": 32,
      "Attack": 32,
      "Defense": 2,
      "Sp. Atk": 0,
      "Sp. Def": 0,
      "Speed": 0
    },
    "moves": [
      "Dual Wingbeat",
      "Temper Flare",
      "Dragon Claw",
      "Protect"
    ],
    "gender": "Male",
    "form": "Salamence",
    "status": "Permanently recruited",
    "confirmed": "2026-10-05",
    "item": "Not confirmed \u2014 not shown in screenshot"
  },
  "Grimmsnarl": {
    "nature": "Adamant",
    "ability": "Prankster",
    "stats": {
      "HP": 202,
      "Attack": 189,
      "Defense": 85,
      "Sp. Atk": 103,
      "Sp. Def": 97,
      "Speed": 80
    },
    "training": {
      "HP": 32,
      "Attack": 32,
      "Defense": 0,
      "Sp. Atk": 0,
      "Sp. Def": 2,
      "Speed": 0
    },
    "moves": [
      "Fake Out",
      "Sucker Punch",
      "Reflect",
      "Parting Shot"
    ],
    "gender": "Male",
    "form": "Grimmsnarl",
    "status": "Permanently recruited",
    "confirmed": "2026-10-05",
    "item": "Not confirmed \u2014 not shown in screenshot"
  },
  "Sylveon": {
    "nature": "Hasty",
    "ability": "Pixilate",
    "stats": {
      "HP": 170,
      "Attack": 85,
      "Defense": 76,
      "Sp. Atk": 162,
      "Sp. Def": 152,
      "Speed": 123
    },
    "training": {
      "HP": 0,
      "Attack": 0,
      "Defense": 0,
      "Sp. Atk": 32,
      "Sp. Def": 2,
      "Speed": 32
    },
    "moves": [
      "Hyper Voice",
      "Skill Swap",
      "Mystical Fire",
      "Light Screen"
    ],
    "gender": "Male",
    "form": "Sylveon",
    "status": "Permanently recruited",
    "confirmed": "2026-10-05",
    "item": "Not confirmed \u2014 not shown in screenshot"
  },
  "Farigiraf": {
    "nature": "Modest",
    "ability": "Armor Tail",
    "stats": {
      "HP": 227,
      "Attack": 99,
      "Defense": 108,
      "Sp. Atk": 143,
      "Sp. Def": 106,
      "Speed": 80
    },
    "training": {
      "HP": 32,
      "Attack": 0,
      "Defense": 18,
      "Sp. Atk": 0,
      "Sp. Def": 16,
      "Speed": 0
    },
    "moves": [
      "Hyper Voice",
      "Trick Room",
      "Wish",
      "Ally Switch"
    ],
    "gender": "Male",
    "form": "Farigiraf",
    "status": "Permanently recruited",
    "confirmed": "2026-10-05",
    "item": "Not confirmed \u2014 not shown in screenshot"
  },
  "Rillaboom": {
    "nature": "Adamant",
    "ability": "Grassy Surge",
    "stats": {
      "HP": 207,
      "Attack": 194,
      "Defense": 110,
      "Sp. Atk": 72,
      "Sp. Def": 90,
      "Speed": 107
    },
    "training": {
      "HP": 32,
      "Attack": 32,
      "Defense": 0,
      "Sp. Atk": 0,
      "Sp. Def": 0,
      "Speed": 2
    },
    "moves": [
      "Drum Beating",
      "High Horsepower",
      "Brick Break",
      "U-turn"
    ],
    "gender": "Male",
    "form": "Rillaboom",
    "status": "Permanently recruited",
    "confirmed": "2026-10-05",
    "item": "Not confirmed \u2014 not shown in screenshot"
  },
  "Reuniclus": {
    "nature": "Sassy",
    "ability": "Magic Guard",
    "stats": {
      "HP": 217,
      "Attack": 85,
      "Defense": 111,
      "Sp. Atk": 147,
      "Sp. Def": 133,
      "Speed": 45
    },
    "training": {
      "HP": 32,
      "Attack": 0,
      "Defense": 16,
      "Sp. Atk": 2,
      "Sp. Def": 16,
      "Speed": 0
    },
    "moves": [
      "Expanding Force",
      "Energy Ball",
      "Recover",
      "Sunny Day"
    ],
    "gender": "Male",
    "form": "Reuniclus",
    "status": "Permanently recruited",
    "confirmed": "2026-10-05",
    "item": "Not confirmed \u2014 not shown in screenshot"
  },
  "Ninetales": {
    "nature": "Modest",
    "ability": "Snow Warning",
    "stats": {
      "HP": 180,
      "Attack": 78,
      "Defense": 95,
      "Sp. Atk": 113,
      "Sp. Def": 120,
      "Speed": 161
    },
    "training": {
      "HP": 32,
      "Attack": 0,
      "Defense": 0,
      "Sp. Atk": 2,
      "Sp. Def": 0,
      "Speed": 32
    },
    "moves": [
      "Blizzard",
      "Dazzling Gleam",
      "Aurora Veil",
      "Protect"
    ],
    "gender": "Female",
    "form": "Alolan Ninetales",
    "status": "Permanently recruited",
    "confirmed": "2026-10-05",
    "item": "Not confirmed \u2014 not shown in screenshot"
  },
  "Scrafty": {
    "nature": "Adamant",
    "ability": "Intimidate",
    "stats": {
      "HP": 172,
      "Attack": 156,
      "Defense": 135,
      "Sp. Atk": 58,
      "Sp. Def": 135,
      "Speed": 80
    },
    "training": {
      "HP": 32,
      "Attack": 32,
      "Defense": 0,
      "Sp. Atk": 0,
      "Sp. Def": 0,
      "Speed": 2
    },
    "moves": [
      "Knock Off",
      "Rock Slide",
      "Drain Punch",
      "Fake Out"
    ],
    "gender": "Female",
    "form": "Scrafty",
    "status": "Permanently recruited",
    "confirmed": "2026-10-05",
    "item": "Not confirmed \u2014 not shown in screenshot"
  },
  "Clefable": {
    "nature": "Quiet",
    "ability": "Unaware",
    "stats": {
      "HP": 202,
      "Attack": 90,
      "Defense": 125,
      "Sp. Atk": 126,
      "Sp. Def": 112,
      "Speed": 72
    },
    "training": {
      "HP": 32,
      "Attack": 0,
      "Defense": 32,
      "Sp. Atk": 0,
      "Sp. Def": 2,
      "Speed": 0
    },
    "moves": [
      "Helping Hand",
      "Charm",
      "Life Dew",
      "Follow Me"
    ],
    "gender": "Female",
    "form": "Clefable",
    "status": "Permanently recruited",
    "confirmed": "2026-10-05",
    "item": "Not confirmed \u2014 not shown in screenshot"
  },
  "Arboliva": {
    "nature": "Modest",
    "ability": "Seed Sower",
    "stats": {
      "HP": 185,
      "Attack": 80,
      "Defense": 132,
      "Sp. Atk": 159,
      "Sp. Def": 141,
      "Speed": 59
    },
    "training": {
      "HP": 32,
      "Attack": 0,
      "Defense": 22,
      "Sp. Atk": 0,
      "Sp. Def": 12,
      "Speed": 0
    },
    "moves": [
      "Strength Sap",
      "Protect",
      "Pollen Puff",
      "Terrain Pulse"
    ],
    "gender": "Female",
    "form": "Arboliva",
    "status": "Permanently recruited",
    "confirmed": "2026-10-05",
    "item": "Not confirmed \u2014 not shown in screenshot"
  },
  "Goodra": {
    "nature": "Relaxed",
    "ability": "Shell Armor",
    "stats": {
      "HP": 187,
      "Attack": 120,
      "Defense": 134,
      "Sp. Atk": 162,
      "Sp. Def": 170,
      "Speed": 72
    },
    "training": {
      "HP": 32,
      "Attack": 0,
      "Defense": 2,
      "Sp. Atk": 32,
      "Sp. Def": 0,
      "Speed": 0
    },
    "moves": [
      "Ice Beam",
      "Shelter",
      "Body Press",
      "Flash Cannon"
    ],
    "gender": "Female",
    "form": "Hisuian Goodra",
    "status": "Permanently recruited",
    "confirmed": "2026-10-05",
    "item": "Not confirmed \u2014 not shown in screenshot"
  },
  "Skarmory": {
    "nature": "Adamant",
    "ability": "Weak Armor",
    "stats": {
      "HP": 140,
      "Attack": 145,
      "Defense": 160,
      "Sp. Atk": 54,
      "Sp. Def": 92,
      "Speed": 122
    },
    "training": {
      "HP": 0,
      "Attack": 32,
      "Defense": 0,
      "Sp. Atk": 0,
      "Sp. Def": 2,
      "Speed": 32
    },
    "moves": [
      "Brave Bird",
      "Drill Run",
      "Taunt",
      "Whirlwind"
    ],
    "gender": "Female",
    "form": "Skarmory",
    "status": "Permanently recruited",
    "confirmed": "2026-10-05",
    "item": "Not confirmed \u2014 not shown in screenshot"
  },
  "Gardevoir": {
    "nature": "Relaxed",
    "ability": "Synchronize",
    "stats": {
      "HP": 175,
      "Attack": 85,
      "Defense": 128,
      "Sp. Atk": 145,
      "Sp. Def": 137,
      "Speed": 90
    },
    "training": {
      "HP": 32,
      "Attack": 0,
      "Defense": 32,
      "Sp. Atk": 0,
      "Sp. Def": 2,
      "Speed": 0
    },
    "moves": [
      "Hyper Voice",
      "Psychic Terrain",
      "Protect",
      "Life Dew"
    ],
    "gender": "Female",
    "form": "Gardevoir",
    "status": "Permanently recruited",
    "confirmed": "2026-10-05",
    "item": "Not confirmed \u2014 not shown in screenshot"
  },
  "Meganium": {
    "nature": "Modest",
    "ability": "Leaf Guard",
    "stats": {
      "HP": 187,
      "Attack": 91,
      "Defense": 120,
      "Sp. Atk": 148,
      "Sp. Def": 120,
      "Speed": 100
    },
    "training": {
      "HP": 32,
      "Attack": 0,
      "Defense": 0,
      "Sp. Atk": 32,
      "Sp. Def": 0,
      "Speed": 0
    },
    "moves": [
      "Solar Beam",
      "Knock Off",
      "Dazzling Gleam",
      "Weather Ball"
    ],
    "gender": "Male",
    "form": "Meganium",
    "status": "Visitor from Pok\u00e9mon HOME",
    "confirmed": "2026-10-05",
    "item": "Not confirmed \u2014 not shown in screenshot"
  },
  "Camerupt": {
    "nature": "Quiet",
    "ability": "Solid Rock",
    "stats": {
      "HP": 177,
      "Attack": 120,
      "Defense": 92,
      "Sp. Atk": 172,
      "Sp. Def": 95,
      "Speed": 54
    },
    "training": {
      "HP": 32,
      "Attack": 0,
      "Defense": 2,
      "Sp. Atk": 32,
      "Sp. Def": 0,
      "Speed": 0
    },
    "moves": [
      "Earth Power",
      "Smack Down",
      "Eruption",
      "Lash Out"
    ],
    "gender": "Female",
    "form": "Camerupt",
    "status": "Visitor from Pok\u00e9mon HOME",
    "confirmed": "2026-10-05",
    "item": "Not confirmed \u2014 not shown in screenshot"
  },
  "Kangaskhan": {
    "nature": "Adamant",
    "ability": "Scrappy",
    "stats": {
      "HP": 212,
      "Attack": 128,
      "Defense": 132,
      "Sp. Atk": 54,
      "Sp. Def": 100,
      "Speed": 110
    },
    "training": {
      "HP": 32,
      "Attack": 2,
      "Defense": 32,
      "Sp. Atk": 0,
      "Sp. Def": 0,
      "Speed": 0
    },
    "moves": [
      "Facade",
      "Drain Punch",
      "Last Resort",
      "Sucker Punch"
    ],
    "gender": "Female",
    "form": "Kangaskhan",
    "status": "Permanently recruited",
    "confirmed": "2026-10-05",
    "item": "Not confirmed \u2014 not shown in screenshot"
  },
  "Charizard": {
    "nature": "Sassy",
    "ability": "Solar Power",
    "stats": {
      "HP": 153,
      "Attack": 104,
      "Defense": 130,
      "Sp. Atk": 129,
      "Sp. Def": 150,
      "Speed": 108
    },
    "training": {
      "HP": 0,
      "Attack": 0,
      "Defense": 32,
      "Sp. Atk": 0,
      "Sp. Def": 32,
      "Speed": 0
    },
    "moves": [
      "Flamethrower",
      "Dragon Claw",
      "Roost",
      "Dig"
    ],
    "gender": "Male",
    "form": "Charizard",
    "status": "Permanently recruited",
    "confirmed": "2026-10-05",
    "item": "Not confirmed \u2014 not shown in screenshot"
  },
  "Volcarona": {
    "nature": "Bold",
    "ability": "Swarm",
    "stats": {
      "HP": 162,
      "Attack": 72,
      "Defense": 128,
      "Sp. Atk": 187,
      "Sp. Def": 125,
      "Speed": 120
    },
    "training": {
      "HP": 2,
      "Attack": 0,
      "Defense": 32,
      "Sp. Atk": 32,
      "Sp. Def": 0,
      "Speed": 0
    },
    "moves": [
      "Fiery Dance",
      "Hyper Beam",
      "Bug Buzz",
      "Giga Drain"
    ],
    "gender": "Male",
    "form": "Volcarona",
    "status": "Trial \u2014 4 days remaining at capture",
    "confirmed": "2026-10-05",
    "item": "Not confirmed \u2014 not shown in screenshot"
  },
  "Snorlax": {
    "nature": "Brave",
    "ability": "Gluttony",
    "stats": {
      "HP": 267,
      "Attack": 178,
      "Defense": 87,
      "Sp. Atk": 85,
      "Sp. Def": 130,
      "Speed": 45
    },
    "training": {
      "HP": 32,
      "Attack": 32,
      "Defense": 2,
      "Sp. Atk": 0,
      "Sp. Def": 0,
      "Speed": 0
    },
    "moves": [
      "Body Slam",
      "Recycle",
      "Supercell Slam",
      "Belly Drum"
    ],
    "gender": "Male",
    "form": "Snorlax",
    "status": "Permanently recruited",
    "confirmed": "2026-10-05",
    "item": "Not confirmed \u2014 not shown in screenshot"
  },
  "Cofagrigus": {
    "nature": "Bold",
    "ability": "Mummy",
    "stats": {
      "HP": 133,
      "Attack": 63,
      "Defense": 216,
      "Sp. Atk": 147,
      "Sp. Def": 127,
      "Speed": 50
    },
    "training": {
      "HP": 0,
      "Attack": 0,
      "Defense": 32,
      "Sp. Atk": 32,
      "Sp. Def": 2,
      "Speed": 0
    },
    "moves": [
      "Shadow Ball",
      "Dark Pulse",
      "Rest",
      "Curse"
    ],
    "gender": "Male",
    "form": "Cofagrigus",
    "status": "Permanently recruited",
    "confirmed": "2026-10-05",
    "item": "Not confirmed \u2014 not shown in screenshot"
  },
  "Froslass": {
    "nature": "Modest",
    "ability": "Snow Cloak",
    "stats": {
      "HP": 145,
      "Attack": 90,
      "Defense": 90,
      "Sp. Atk": 145,
      "Sp. Def": 92,
      "Speed": 162
    },
    "training": {
      "HP": 0,
      "Attack": 0,
      "Defense": 0,
      "Sp. Atk": 32,
      "Sp. Def": 2,
      "Speed": 32
    },
    "moves": [
      "Blizzard",
      "Reflect",
      "Pain Split",
      "Taunt"
    ],
    "gender": "Female",
    "form": "Froslass",
    "status": "Trial \u2014 6 days remaining at capture",
    "confirmed": "2026-10-05",
    "item": "Not confirmed \u2014 not shown in screenshot"
  },
  "Falinks": {
    "nature": "Careful",
    "ability": "Defiant",
    "stats": {
      "HP": 140,
      "Attack": 152,
      "Defense": 122,
      "Sp. Atk": 81,
      "Sp. Def": 123,
      "Speed": 95
    },
    "training": {
      "HP": 0,
      "Attack": 32,
      "Defense": 2,
      "Sp. Atk": 0,
      "Sp. Def": 32,
      "Speed": 0
    },
    "moves": [
      "Close Combat",
      "Brick Break",
      "Poison Jab",
      "Endeavor"
    ],
    "gender": "Genderless",
    "form": "Falinks",
    "status": "Permanently recruited",
    "confirmed": "2026-10-05",
    "item": "Not confirmed \u2014 not shown in screenshot"
  },
  "Primarina": {
    "nature": "Quiet",
    "ability": "Liquid Voice",
    "stats": {
      "HP": 187,
      "Attack": 94,
      "Defense": 126,
      "Sp. Atk": 160,
      "Sp. Def": 136,
      "Speed": 72
    },
    "training": {
      "HP": 32,
      "Attack": 0,
      "Defense": 32,
      "Sp. Atk": 0,
      "Sp. Def": 0,
      "Speed": 0
    },
    "moves": [
      "Life Dew",
      "Psychic Noise",
      "Hyper Voice",
      "Moonblast"
    ],
    "gender": "Male",
    "form": "Primarina",
    "status": "Permanently recruited",
    "confirmed": "2026-10-05",
    "item": "Not confirmed \u2014 not shown in screenshot"
  },
  "Skeledirge": {
    "nature": "Quiet",
    "ability": "Unaware",
    "stats": {
      "HP": 211,
      "Attack": 95,
      "Defense": 122,
      "Sp. Atk": 178,
      "Sp. Def": 95,
      "Speed": 77
    },
    "training": {
      "HP": 32,
      "Attack": 0,
      "Defense": 2,
      "Sp. Atk": 32,
      "Sp. Def": 0,
      "Speed": 0
    },
    "moves": [
      "Torch Song",
      "Flame Charge",
      "Snarl",
      "Earth Power"
    ],
    "gender": "Male",
    "form": "Skeledirge",
    "status": "Trial \u2014 6 days remaining at capture",
    "confirmed": "2026-10-05",
    "item": "Not confirmed \u2014 not shown in screenshot"
  },
  "Banette": {
    "nature": "Brave",
    "ability": "Cursed Body",
    "stats": {
      "HP": 171,
      "Attack": 183,
      "Defense": 85,
      "Sp. Atk": 103,
      "Sp. Def": 85,
      "Speed": 76
    },
    "training": {
      "HP": 32,
      "Attack": 32,
      "Defense": 0,
      "Sp. Atk": 0,
      "Sp. Def": 2,
      "Speed": 0
    },
    "moves": [
      "Poltergeist",
      "Encore",
      "Sucker Punch",
      "Trick Room"
    ],
    "gender": "Male",
    "form": "Banette",
    "status": "Permanently recruited",
    "confirmed": "2026-10-05",
    "item": "Not confirmed \u2014 not shown in screenshot"
  },
  "Dragonite": {
    "nature": "Brave",
    "ability": "Multiscale",
    "stats": {
      "HP": 198,
      "Attack": 204,
      "Defense": 117,
      "Sp. Atk": 120,
      "Sp. Def": 120,
      "Speed": 90
    },
    "training": {
      "HP": 32,
      "Attack": 32,
      "Defense": 2,
      "Sp. Atk": 0,
      "Sp. Def": 0,
      "Speed": 0
    },
    "moves": [
      "Ice Spinner",
      "Protect",
      "Fire Punch",
      "Breaking Swipe"
    ],
    "gender": "Female",
    "form": "Dragonite",
    "status": "Permanently recruited",
    "confirmed": "2026-10-05",
    "item": "Not confirmed \u2014 not shown in screenshot"
  },
  "Mudsdale": {
    "nature": "Adamant",
    "ability": "Stamina",
    "stats": {
      "HP": 207,
      "Attack": 194,
      "Defense": 122,
      "Sp. Atk": 67,
      "Sp. Def": 105,
      "Speed": 55
    },
    "training": {
      "HP": 32,
      "Attack": 32,
      "Defense": 2,
      "Sp. Atk": 0,
      "Sp. Def": 0,
      "Speed": 0
    },
    "moves": [
      "High Horsepower",
      "Heavy Slam",
      "Rock Slide",
      "Body Press"
    ],
    "gender": "Female",
    "form": "Mudsdale",
    "status": "Permanently recruited",
    "confirmed": "2026-10-05",
    "item": "Not confirmed \u2014 not shown in screenshot"
  },
  "Indeedee": {
    "nature": "Careful",
    "ability": "Inner Focus",
    "stats": {
      "HP": 135,
      "Attack": 117,
      "Defense": 75,
      "Sp. Atk": 112,
      "Sp. Def": 161,
      "Speed": 117
    },
    "training": {
      "HP": 0,
      "Attack": 32,
      "Defense": 0,
      "Sp. Atk": 0,
      "Sp. Def": 32,
      "Speed": 2
    },
    "moves": [
      "Trick Room",
      "Encore",
      "Psychic Terrain",
      "Terrain Pulse"
    ],
    "gender": "Male",
    "form": "Indeedee (Male)",
    "status": "Trial \u2014 6 days remaining at capture",
    "confirmed": "2026-10-05",
    "item": "Not confirmed \u2014 not shown in screenshot"
  },
  "Scizor": {
    "nature": "Adamant",
    "ability": "Technician",
    "stats": {
      "HP": 177,
      "Attack": 200,
      "Defense": 120,
      "Sp. Atk": 67,
      "Sp. Def": 100,
      "Speed": 85
    },
    "training": {
      "HP": 32,
      "Attack": 32,
      "Defense": 0,
      "Sp. Atk": 0,
      "Sp. Def": 0,
      "Speed": 0
    },
    "moves": [
      "Bullet Punch",
      "Pounce",
      "Double Hit",
      "Close Combat"
    ],
    "gender": "Female",
    "form": "Scizor",
    "status": "Permanently recruited",
    "confirmed": "2026-10-05",
    "item": "Not confirmed \u2014 not shown in screenshot"
  }
};

for (const m of ROSTER) {
 const current=SCREENSHOT_BUILDS[m.name], previous=BUILDS[m.name];
 if(previous) current.history=[{...previous, label:"Earlier recorded build (superseded by screenshot)"}];
 BUILDS[m.name]=current;
 m.status=current.status;
 m.form=current.form;
 m.gender=current.gender;
 if(m.name==="Ninetales") {m.type="Ice / Fairy";m.sprite="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10104.png";}
 if(m.name==="Goodra") {m.type="Steel / Dragon";m.sprite="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10242.png";}
}
