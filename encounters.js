
// this can live on this page or on a dedicate js for this page
function generate_encounters(){
  result = "<ol>"
  encounter_data = {
    "origin":["#[area:#place#]simple#"],
    "simple"    : ["Your party goes to the  #area# and finds #objects# there is also #interactable object#. The #area# is #descriptor# and has #num of exits# and it is  #light level#."],
    "place" : ["Great Hall", "Library", "Armory", "Trophy room", "Gardens", "Courtyard", "Kitchens", "Servants' Quarters", "Stables", "Wine Cellar", "Crypt", "Secert Passage", "Tower"],
    "objects"  : ["drinking glasses with fine wine that are littered throughout the #area#", "decorative vases and urns line the walls of the #area#", "tapestries and paintings of the nobles family and great battles that have been fought throughout time decorate the walls", "fancy carpets fill the floor", ],
    "interactable object":["a chest with a padlock attached to it", "tattered books that are strewn across the floor", "a small pressure plate on the ground that seems to be activatable", "an ornate looking artifact sitting on a pedastool", "the sound of rushing water coming from beyond one of the walls in the #area#" ],
    "descriptor": ["creepy,", "smelly", "serene", "cozy", "spacious", "ornate", "imposing","dusty", "musty", "menacing", "well-tended", "cramped", "ancient", "smoky", "beautiful", "warm", "ostentatious","tidy", "practical"],
    "num of exits": ["2 exits", "3 exits", "4 but one of the exits seems to be locked", "only one exit but its guarded by a masssive mastif", "one exit", "two exits but one of the doors seems to be wielded shut", "three exits but all of them are locked", "no exits except for the one you came through"],
    "light level": ["very dark", "bright in the #area#", "decently lit", "dimly lit","fog blankets the entire #area#"],
  }
  console.log(encounter_data)
  for (let i = 0; i < 10; i++){
    result += "<li>" + grammars.GenerationSimple(encounter_data) + "</li>";
  }
  result += "</ol>";
  console.log(result)
  io.write_into_element(result, "encounters")
}