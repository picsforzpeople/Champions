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
