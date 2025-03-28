
const popArtists = [
  { name: "Bruno Mars", country: "US", debut: 2010, gender: "Male", type: "Solo", popularity: 1 },
  { name: "Ariana Grande", country: "US", debut: 2011, gender: "Female", type: "Solo", popularity: 2 },
  { name: "Taylor Swift", country: "US", debut: 2006, gender: "Female", type: "Solo", popularity: 3 },
  { name: "Sabrina Carpenter", country: "US", debut: 2014, gender: "Female", type: "Solo", popularity: 4 },
  { name: "The Weeknd", country: "CA", debut: 2011, gender: "Male", type: "Solo", popularity: 5 },
  { name: "Justin Bieber", country: "CA", debut: 2009, gender: "Male", type: "Solo", popularity: 6 },
  { name: "Lady Gaga", country: "US", debut: 2008, gender: "Female", type: "Solo", popularity: 7 },
  { name: "Shakira", country: "CO", debut: 1995, gender: "Female", type: "Solo", popularity: 8 },
  { name: "Rihanna", country: "BB", debut: 2005, gender: "Female", type: "Solo", popularity: 9 },
  { name: "Ed Sheeran", country: "GB", debut: 2009, gender: "Male", type: "Solo", popularity: 10 },
  { name: "Katy Perry", country: "US", debut: 2007, gender: "Female", type: "Solo", popularity: 11 },
  { name: "Selena Gomez", country: "US", debut: 2011, gender: "Female", type: "Solo", popularity: 12 },
  { name: "Adele", country: "GB", debut: 2008, gender: "Female", type: "Solo", popularity: 13 },
  { name: "Dua Lipa", country: "GB", debut: 2015, gender: "Female", type: "Solo", popularity: 14 },
  { name: "Beyoncé", country: "US", debut: 2002, gender: "Female", type: "Solo", popularity: 15 },
  { name: "One Direction", country: "GB", debut: 2010, gender: "Male", type: "Group", popularity: 16 },
  { name: "Chris Brown", country: "US", debut: 2005, gender: "Male", type: "Solo", popularity: 17 },
  { name: "Maroon 5", country: "US", debut: 2002, gender: "Male", type: "Group", popularity: 18 },
  { name: "Jason Derulo", country: "US", debut: 2010, gender: "Male", type: "Solo", popularity: 19 },
  { name: "Olivia Rodrigo", country: "US", debut: 2016, gender: "Female", type: "Solo", popularity: 20 },
  { name: "Michael Jackson", country: "US", debut: 1972, gender: "Male", type: "Solo", popularity: 21 },
  { name: "Mariah Carey", country: "US", debut: 1990, gender: "Female", type: "Solo", popularity: 22 },
  { name: "Shawn Mendes", country: "CA", debut: 2015, gender: "Male", type: "Solo", popularity: 23 },
  { name: "Miley Cyrus", country: "US", debut: 2007, gender: "Female", type: "Solo", popularity: 24 },
  { name: "SIA", country: "AU", debut: 2000, gender: "Female", type: "Solo", popularity: 25 },
  { name: "Pitbull", country: "US", debut: 2004, gender: "Male", type: "Solo", popularity: 26 },
  { name: "Jennifer Lopez", country: "US", debut: 1999, gender: "Female", type: "Solo", popularity: 27 },
  { name: "Harry Styles", country: "GB", debut: 2017, gender: "Male", type: "Solo", popularity: 28 },
  { name: "Doja Cat", country: "US", debut: 2014, gender: "Female", type: "Solo", popularity: 29 },
  { name: "Camila Cabello", country: "US", debut: 2017, gender: "Female", type: "Solo", popularity: 30 },
  { name: "Britney Spears", country: "US", debut: 1999, gender: "Female", type: "Solo", popularity: 31 },
  { name: "Enrique Iglesias", country: "ES", debut: 1995, gender: "Male", type: "Solo", popularity: 32 },
  { name: "Demi Lovato", country: "US", debut: 2008, gender: "Female", type: "Solo", popularity: 33 },
  { name: "Justin Timberlake", country: "US", debut: 2002, gender: "Male", type: "Solo", popularity: 34 },
  { name: "Zayn", country: "GB", debut: 2016, gender: "Male", type: "Solo", popularity: 35 },
  { name: "Sam Smith", country: "GB", debut: 2013, gender: "Male", type: "Solo", popularity: 36 },
  { name: "Teddy Swims", country: "US", debut: 2019, gender: "Male", type: "Solo", popularity: 37 },
  { name: "Charlie Puth", country: "US", debut: 2015, gender: "Male", type: "Solo", popularity: 38 },
  { name: "Charli XCX", country: "GB", debut: 2012, gender: "Female", type: "Solo", popularity: 39 },
  { name: "Tate McRae", country: "CA", debut: 2017, gender: "Female", type: "Solo", popularity: 40 },
  { name: "OneRepublic", country: "US", debut: 2007, gender: "Male", type: "Group", popularity: 41 },
  { name: "P!nk", country: "US", debut: 2000, gender: "Female", type: "Solo", popularity: 42 },
  { name: "Black Eyed Peas", country: "US", debut: 1998, gender: "Mixed", type: "Group", popularity: 43 },
  { name: "Elton John", country: "GB", debut: 1969, gender: "Male", type: "Solo", popularity: 44 },
  { name: "Halsey", country: "US", debut: 2014, gender: "Female", type: "Solo", popularity: 45 },
  { name: "Ellie Goulding", country: "GB", debut: 2010, gender: "Female", type: "Solo", popularity: 46 },
  { name: "Bebefinn", country: "US", debut: 2022, gender: "Male", type: "Solo", popularity: 47 },
  { name: "Tyla", country: "ZA", debut: 2019, gender: "Female", type: "Solo", popularity: 48 },
  { name: "Benson Boone", country: "US", debut: 2021, gender: "Male", type: "Solo", popularity: 49 },
  { name: "Céline Dion", country: "CA", debut: 1984, gender: "Female", type: "Solo", popularity: 50 },
  { name: "Whitney Houston", country: "US", debut: 1985, gender: "Female", type: "Solo", popularity: 51 },
  { name: "Meghan Trainor", country: "US", debut: 2014, gender: "Female", type: "Solo", popularity: 52 },
  { name: "Khalid", country: "US", debut: 2016, gender: "Male", type: "Solo", popularity: 53 },
  { name: "Madonna", country: "US", debut: 1983, gender: "Female", type: "Solo", popularity: 54 },
  { name: "The Kid LAROI", country: "AU", debut: 2019, gender: "Male", type: "Solo", popularity: 55 },
  { name: "Michael Buble", country: "CA", debut: 2003, gender: "Male", type: "Solo", popularity: 56 },
  { name: "ABBA", country: "SE", debut: 1973, gender: "Mixed", type: "Group", popularity: 57 },
  { name: "GIMS", country: "FR", debut: 2013, gender: "Male", type: "Solo", popularity: 58 },
  { name: "Liam Payne", country: "GB", debut: 2017, gender: "Male", type: "Solo", popularity: 59 },
  { name: "Kesha", country: "US", debut: 2009, gender: "Female", type: "Solo", popularity: 60 },
  { name: "Christina Aguilera", country: "US", debut: 1999, gender: "Female", type: "Solo", popularity: 61 },
  { name: "James Arthur", country: "GB", debut: 2012, gender: "Male", type: "Solo", popularity: 62 },
  { name: "Wham!", country: "GB", debut: 1982, gender: "Male", type: "Group", popularity: 63 },
  { name: "Backstreet Boys", country: "US", debut: 1996, gender: "Male", type: "Group", popularity: 64 },
  { name: "Niall Horan", country: "IE", debut: 2017, gender: "Male", type: "Solo", popularity: 65 },
  { name: "Little Mix", country: "GB", debut: 2012, gender: "Female", type: "Group", popularity: 66 },
  { name: "Lewis Capaldi", country: "GB", debut: 2017, gender: "Male", type: "Solo", popularity: 67 },
  { name: "Kelly Clarkson", country: "US", debut: 2003, gender: "Female", type: "Solo", popularity: 68 },
  { name: "Jessie J", country: "GB", debut: 2011, gender: "Female", type: "Solo", popularity: 69 },
  { name: "JVKE", country: "US", debut: 2020, gender: "Male", type: "Solo", popularity: 70 },
  { name: "Elvis Presley", country: "US", debut: 1956, gender: "Male", type: "Solo", popularity: 71 },
  { name: "Bebe Rexha", country: "US", debut: 2014, gender: "Female", type: "Solo", popularity: 72 },
  { name: "Ava Max", country: "US", debut: 2018, gender: "Female", type: "Solo", popularity: 73 },
  { name: "Anne-Marie", country: "GB", debut: 2015, gender: "Female", type: "Solo", popularity: 74 },
  { name: "KISS OF LIFE", country: "KR", debut: 2023, gender: "Female", type: "Solo", popularity: 75 },
  { name: "Pentatonix", country: "US", debut: 2012, gender: "Mixed", type: "Group", popularity: 76 },
  { name: "Fifth Harmony", country: "US", debut: 2013, gender: "Female", type: "Group", popularity: 77 },
  { name: "Zara Larsson", country: "SE", debut: 2012, gender: "Female", type: "Solo", popularity: 78 },
  { name: "Nelly Furtado", country: "CA", debut: 2000, gender: "Female", type: "Solo", popularity: 79 },
  { name: "Madison Beer", country: "US", debut: 2013, gender: "Female", type: "Solo", popularity: 80 },
  { name: "Bee Gees", country: "AU", debut: 1967, gender: "Male", type: "Group", popularity: 81 },
  { name: "Frank Sinatra", country: "US", debut: 1946, gender: "Male", type: "Solo", popularity: 82 },
  { name: "Stromae", country: "BE", debut: 2009, gender: "Male", type: "Solo", popularity: 83 },
  { name: "Clean Bandit", country: "GB", debut: 2013, gender: "Mixed", type: "Group", popularity: 84 },
  { name: "Boney M.", country: "DE", debut: 1976, gender: "Mixed", type: "Group", popularity: 85 },
  { name: "RAYE", country: "GB", debut: 2016, gender: "Female", type: "Solo", popularity: 86 },
  { name: "5 Seconds of Summer", country: "AU", debut: 2012, gender: "Male", type: "Group", popularity: 87 },
  { name: "George Michael", country: "GB", debut: 1987, gender: "Male", type: "Solo", popularity: 88 },
  { name: "Modern Talking", country: "DE", debut: 1985, gender: "Male", type: "Group", popularity: 89 },
  { name: "James Charles", country: "US", debut: 2024, gender: "Male", type: "Solo", popularity: 90 },
  { name: "Mark Ronson", country: "GB", debut: 2003, gender: "Male", type: "Solo", popularity: 91 },
  { name: "*NSYNC", country: "US", debut: 1997, gender: "Male", type: "Group", popularity: 92 },
  { name: "Yuridia", country: "MX", debut: 2005, gender: "Female", type: "Solo", popularity: 93 },
  { name: "Rita Ora", country: "GB", debut: 2012, gender: "Female", type: "Solo", popularity: 94 },
  { name: "Calum Scott", country: "GB", debut: 2017, gender: "Male", type: "Solo", popularity: 95 },
  { name: "Myles Smith", country: "GB", debut: 2023, gender: "Male", type: "Solo", popularity: 96 },
  { name: "Gwen Stefani", country: "US", debut: 2004, gender: "Female", type: "Solo", popularity: 97 },
  { name: "Addison Rae", country: "US", debut: 2021, gender: "Female", type: "Solo", popularity: 98 },
  { name: "Labrinth", country: "GB", debut: 2010, gender: "Male", type: "Solo", popularity: 99 },
  { name: "Alessia Cara", country: "CA", debut: 2015, gender: "Female", type: "Solo", popularity: 100 },
  { name: "Nick Jonas", country: "US", debut: 2012, gender: "Male", type: "Solo", popularity: 101 },
  { name: "Carly Rae Jepsen", country: "CA", debut: 2008, gender: "Female", type: "Solo", popularity: 102 },
  { name: "Dean Lewis", country: "AU", debut: 2017, gender: "Male", type: "Solo", popularity: 103 },
  { name: "Lara Campos", country: "MX", debut: 2024, gender: "Female", type: "Solo", popularity: 104 },
  { name: "Jonas Brothers", country: "US", debut: 2006, gender: "Male", type: "Group", popularity: 105 },
  { name: "Alphaville", country: "DE", debut: 1984, gender: "Male", type: "Group", popularity: 106 },
  { name: "INNA", country: "RO", debut: 2010, gender: "Female", type: "Solo", popularity: 107 },
  { name: "Cyndi Lauper", country: "US", debut: 1983, gender: "Female", type: "Solo", popularity: 108 },
  { name: "Diamond Platnumz", country: "TZ", debut: 2012, gender: "Male", type: "Solo", popularity: 109 },
  { name: "Christina Perri", country: "US", debut: 2011, gender: "Female", type: "Solo", popularity: 110 },
  { name: "will.i.am", country: "US", debut: 2001, gender: "Male", type: "Solo", popularity: 111 },
  { name: "XO TEAM", country: "US", debut: 2021, gender: "Mixed", type: "Group", popularity: 112 },
  { name: "Bing Crosby", country: "US", debut: 1932, gender: "Male", type: "Solo", popularity: 113 },
  { name: "Indila", country: "FR", debut: 2014, gender: "Female", type: "Solo", popularity: 114 },
  { name: "John Mayer", country: "US", debut: 2001, gender: "Male", type: "Solo", popularity: 115 },
  { name: "Lyodra", country: "ID", debut: 2017, gender: "Female", type: "Solo", popularity: 116 },
  { name: "CoComelon", country: "US", debut: 2019, gender: "Mixed", type: "Group", popularity: 117 },
  { name: "James Blunt", country: "GB", debut: 2005, gender: "Male", type: "Solo", popularity: 118 },
  { name: "George Ezra", country: "GB", debut: 2013, gender: "Male", type: "Solo", popularity: 119 },
  { name: "Dove Cameron", country: "US", debut: 2016, gender: "Female", type: "Solo", popularity: 120 },
  { name: "Robbie Williams", country: "GB", debut: 1997, gender: "Male", type: "Solo", popularity: 121 },
  { name: "Kylie Minogue", country: "GB", debut: 1987, gender: "Female", type: "Solo", popularity: 122 },
  { name: "Dean Martin", country: "US", debut: 1950, gender: "Male", type: "Solo", popularity: 123 },
  { name: "Jason Mraz", country: "US", debut: 2002, gender: "Male", type: "Solo", popularity: 124 },
  { name: "Mete Kayagil", country: "TR", debut: 2023, gender: "Male", type: "Solo", popularity: 125 },
  { name: "The Pussycat Dolls", country: "US", debut: 2005, gender: "Female", type: "Group", popularity: 126 },
  { name: "Sofia Carson", country: "US", debut: 2015, gender: "Female", type: "Solo", popularity: 127 },
  { name: "Music Travel Love", country: "CA", debut: 2016, gender: "Male", type: "Group", popularity: 128 },
  { name: "Hailee Steinfeld", country: "US", debut: 2015, gender: "Female", type: "Solo", popularity: 129 },
  { name: "Fergie", country: "US", debut: 2006, gender: "Female", type: "Solo", popularity: 130 },
  { name: "Roxette", country: "SE", debut: 1986, gender: "Mixed", type: "Group", popularity: 131 },
  { name: "Lola Young", country: "GB", debut: 2019, gender: "Female", type: "Solo", popularity: 132 },
  { name: "Bella Poarch", country: "US", debut: 2022, gender: "Female", type: "Solo", popularity: 133 },
  { name: "Laura Pausini", country: "IT", debut: 1993, gender: "Female", type: "Solo", popularity: 134 },
  { name: "benny blanco", country: "US", debut: 2018, gender: "Male", type: "Solo", popularity: 135 },
  { name: "a-ha", country: "NO", debut: 1985, gender: "Male", type: "Group", popularity: 136 },
  { name: "Lukas Graham", country: "DK", debut: 2016, gender: "Male", type: "Group", popularity: 137 },
  { name: "Dido", country: "GB", debut: 1999, gender: "Female", type: "Solo", popularity: 138 },
  { name: "Nicole Scherzinger", country: "US", debut: 2007, gender: "Female", type: "Solo", popularity: 139 },
  { name: "Eros Ramazzotti", country: "IT", debut: 1985, gender: "Male", type: "Solo", popularity: 140 },
  { name: "charli d'amelio", country: "US", debut: 2022, gender: "Female", type: "Solo", popularity: 141 },
  { name: "Lizzo", country: "US", debut: 2014, gender: "Female", type: "Solo", popularity: 142 },
  { name: "Tove Lo", country: "SE", debut: 2014, gender: "Female", type: "Solo", popularity: 143 },
  { name: "Connor Maynard", country: "GB", debut: 2012, gender: "Male", type: "Solo", popularity: 144 },
  { name: "Cher", country: "US", debut: 1965, gender: "Female", type: "Solo", popularity: 145 },
  { name: "Idina Menzel", country: "US", debut: 1998, gender: "Female", type: "Solo", popularity: 146 },
  { name: "Westlife", country: "IE", debut: 1999, gender: "Male", type: "Group", popularity: 147 },
  { name: "Lyna", country: "ES", debut: 2018, gender: "Female", type: "Solo", popularity: 148 },
  { name: "Aitana", country: "ES", debut: 2017, gender: "Female", type: "Solo", popularity: 149 },
  { name: "Bonnie Tyler", country: "GB", debut: 1976, gender: "Female", type: "Solo", popularity: 150 },
  { name: "Noah Cyrus", country: "US", debut: 2010, gender: "Female", type: "Solo", popularity: 152 },
  { name: "Tina Turner", country: "US", debut: 1974, gender: "Female", type: "Solo", popularity: 153 },
  { name: "Isabel LaRosa", country: "US", debut: 2021, gender: "Female", type: "Solo", popularity: 154 },
  { name: "Boyce Avenue", country: "US", debut: 2009, gender: "Male", type: "Group", popularity: 155 },
  { name: "Squeezie", country: "FR", debut: 2019, gender: "Male", type: "Solo", popularity: 156 },
  { name: "Mike Posner", country: "US", debut: 2009, gender: "Male", type: "Solo", popularity: 157 },
  { name: "Mark Ambor", country: "US", debut: 2019, gender: "Male", type: "Solo", popularity: 158 },
  { name: "Owl City", country: "US", debut: 2007, gender: "Male", type: "Solo", popularity: 159 },
  { name: "Leona Lewis", country: "GB", debut: 2007, gender: "Female", type: "Solo", popularity: 160 },
  { name: "Lasso", country: "MX", debut: 2016, gender: "Male", type: "Solo", popularity: 161 },
  { name: "Dasha", country: "US", debut: 2020, gender: "Female", type: "Solo", popularity: 162 },
  { name: "Spice Girls", country: "GB", debut: 1996, gender: "Female", type: "Group", popularity: 163 },
  { name: "Semicenk", country: "TR", debut: 2021, gender: "Male", type: "Solo", popularity: 164 },
  { name: "HooplaKidz", country: "US", debut: 2018, gender: "Mixed", type: "Group", popularity: 165 },
  { name: "Taio Cruz", country: "GB", debut: 2006, gender: "Male", type: "Solo", popularity: 166 },
  { name: "Julia Michaels", country: "US", debut: 2017, gender: "Female", type: "Solo", popularity: 167 },
  { name: "Jess Glynne", country: "GB", debut: 2014, gender: "Female", type: "Solo", popularity: 168 },
  { name: "Karina y Marina", country: "ES", debut: 2019, gender: "Female", type: "Group", popularity: 169 },
  { name: "RHYDER", country: "VN", debut: 2019, gender: "Male", type: "Solo", popularity: 170 },
  { name: "Olly Murs", country: "GB", debut: 2010, gender: "Male", type: "Solo", popularity: 171 },
  { name: "Big Time Rush", country: "US", debut: 2010, gender: "Male", type: "Group", popularity: 172 },
  { name: "Natasha Bedingfield", country: "GB", debut: 2004, gender: "Female", type: "Solo", popularity: 173 },
  { name: "John Newman", country: "GB", debut: 2013, gender: "Male", type: "Solo", popularity: 174 },
  { name: "Annie Lennox", country: "GB", debut: 1990, gender: "Female", type: "Solo", popularity: 175 },
  { name: "Lindsay Lohan", country: "US", debut: 2004, gender: "Female", type: "Solo", popularity: 176 },
  { name: "Normani", country: "US", debut: 2018, gender: "Female", type: "Solo", popularity: 177 },
  { name: "Zack Tabudlo", country: "PH", debut: 2018, gender: "Male", type: "Solo", popularity: 178 },
  { name: "The Vamps", country: "GB", debut: 2014, gender: "Male", type: "Group", popularity: 179 },
  { name: "Ruth B.", country: "CA", debut: 2015, gender: "Female", type: "Solo", popularity: 180 },
  { name: "Victoria Pfeifer", country: "US", debut: 2018, gender: "Female", type: "Solo", popularity: 181 },
  { name: "Raisa", country: "ID", debut: 2011, gender: "Female", type: "Solo", popularity: 182 },
  { name: "Henry Moodie", country: "GB", debut: 2023, gender: "Male", type: "Solo", popularity: 183 },
  { name: "Karol Sevilla", country: "MX", debut: 2019, gender: "Female", type: "Solo", popularity: 184 },
  { name: "Austin Mahone", country: "US", debut: 2012, gender: "Male", type: "Solo", popularity: 185 },
  { name: "Rick Astley", country: "GB", debut: 1987, gender: "Male", type: "Solo", popularity: 186 },
  { name: "Eurythmics", country: "GB", debut: 1981, gender: "Mixed", type: "Group", popularity: 187 },
  { name: "Victoria Justice", country: "US", debut: 2013, gender: "Female", type: "Solo", popularity: 188 },
  { name: "Zuchu", country: "CA", debut: 2020, gender: "Female", type: "Solo", popularity: 189 },
  { name: "Mattybraps", country: "US", debut: 2016, gender: "Male", type: "Solo", popularity: 190 },
  { name: "Elley Duhé", country: "US", debut: 2017, gender: "Female", type: "Solo", popularity: 191 },
  { name: "FutParódias", country: "BR", debut: 2017, gender: "Male", type: "Group", popularity: 192 },
  { name: "Joe Jonas", country: "US", debut: 2011, gender: "Male", type: "Solo", popularity: 193 },
  { name: "CG5", country: "US", debut: 2016, gender: "Male", type: "Solo", popularity: 194 },
  { name: "James Bay", country: "GB", debut: 2014, gender: "Male", type: "Solo", popularity: 195 },
  { name: "Ali Gatie", country: "CA", debut: 2017, gender: "Male", type: "Solo", popularity: 196 },
  { name: "Shania Yan", country: "ID", debut: 2021, gender: "Female", type: "Solo", popularity: 197 },
  { name: "Lauren Spencer Smith", country: "CA", debut: 2019, gender: "Female", type: "Solo", popularity: 198 },
  { name: "Hadise", country: "TR", debut: 2007, gender: "Female", type: "Solo", popularity: 199 },
  { name: "Daya", country: "US", debut: 2015, gender: "Female", type: "Solo", popularity: 200 },
  { name: "Mini Pop Kids", country: "CA", debut: 2004, gender: "Mixed", type: "Group", popularity: 201 }
].sort((a, b) => a.popularity - b.popularity);

export default popArtists;
