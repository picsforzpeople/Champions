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
        ]
      },
      {
        "name": "Mega Scizor",
        "types": [
          "Bug",
          "Steel"
        ],
        "abilities": [
          "Technician"
        ]
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
        ]
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
        ]
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
        ]
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
        ]
      },
      {
        "name": "Mega Dragonite",
        "types": [
          "Dragon",
          "Flying"
        ],
        "abilities": [
          "Multiscale"
        ]
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
        ]
      },
      {
        "name": "Mega Banette",
        "types": [
          "Ghost"
        ],
        "abilities": [
          "Prankster"
        ]
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
        ]
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
        ]
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
        ]
      },
      {
        "name": "Mega Falinks",
        "types": [
          "Fighting"
        ],
        "abilities": [
          "Defiant"
        ]
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
        ]
      },
      {
        "name": "Mega Froslass",
        "types": [
          "Ice",
          "Ghost"
        ],
        "abilities": [
          "Snow Warning"
        ]
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
        ]
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
        ]
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
        ]
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
        ]
      },
      {
        "name": "Mega Charizard X",
        "types": [
          "Fire",
          "Dragon"
        ],
        "abilities": [
          "Tough Claws"
        ]
      },
      {
        "name": "Mega Charizard Y",
        "types": [
          "Fire",
          "Flying"
        ],
        "abilities": [
          "Drought"
        ]
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
        ]
      },
      {
        "name": "Mega Kangaskhan",
        "types": [
          "Normal"
        ],
        "abilities": [
          "Parental Bond"
        ]
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
        ]
      },
      {
        "name": "Mega Camerupt",
        "types": [
          "Fire",
          "Ground"
        ],
        "abilities": [
          "Sheer Force"
        ]
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
        ]
      },
      {
        "name": "Mega Meganium",
        "types": [
          "Grass",
          "Fairy"
        ],
        "abilities": [
          "Mega Sol"
        ]
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
        ]
      },
      {
        "name": "Mega Gardevoir",
        "types": [
          "Psychic",
          "Fairy"
        ],
        "abilities": [
          "Pixilate"
        ]
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
        ]
      },
      {
        "name": "Mega Skarmory",
        "types": [
          "Steel",
          "Flying"
        ],
        "abilities": [
          "Stalwart"
        ]
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
        ]
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
        ]
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
        ]
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
        ]
      },
      {
        "name": "Mega Clefable",
        "types": [
          "Fairy",
          "Flying"
        ],
        "abilities": [
          "Magic Bounce"
        ]
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
        ]
      },
      {
        "name": "Mega Scrafty",
        "types": [
          "Dark",
          "Fighting"
        ],
        "abilities": [
          "Intimidate"
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
      },
      {
        "name": "Mega Salamence",
        "types": [
          "Dragon",
          "Flying"
        ],
        "abilities": [
          "Aerilate"
        ]
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
        ]
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
        ]
      },
      {
        "name": "Palafin (Hero)",
        "types": [
          "Water"
        ],
        "abilities": [
          "Zero to Hero"
        ]
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
        ]
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
        ]
      },
      {
        "name": "Mega Garchomp",
        "types": [
          "Dragon",
          "Ground"
        ],
        "abilities": [
          "Sand Force"
        ]
      },
      {
        "name": "Mega Garchomp Z",
        "types": [
          "Dragon"
        ],
        "abilities": [
          "Levitate"
        ]
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
        ]
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
        ]
      },
      {
        "name": "Mega Mawile",
        "types": [
          "Steel",
          "Fairy"
        ],
        "abilities": [
          "Huge Power"
        ]
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
        ]
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
        ]
      },
      {
        "name": "Alolan Raichu",
        "types": [
          "Electric",
          "Psychic"
        ],
        "abilities": [
          "Surge Surfer"
        ]
      },
      {
        "name": "Mega Raichu X",
        "types": [
          "Electric"
        ],
        "abilities": [
          "Electric Surge"
        ]
      },
      {
        "name": "Mega Raichu Y",
        "types": [
          "Electric"
        ],
        "abilities": [
          "No Guard"
        ]
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
        ]
      },
      {
        "name": "Mega Hawlucha",
        "types": [
          "Fighting",
          "Flying"
        ],
        "abilities": [
          "No Guard"
        ]
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
        ]
      },
      {
        "name": "Mega Altaria",
        "types": [
          "Dragon",
          "Fairy"
        ],
        "abilities": [
          "Pixilate"
        ]
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
        ]
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
        ]
      }
    ],
    "checked": "2026-10-05"
  }
};
