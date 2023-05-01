
// this can live on this page or on a dedicate js for this page
function generate_enemy_encounter(){
    result = "<ol>"
    enemy_encounter_data = {
      "origin":["#[area:#place#]simple#"],
      "simple"    : ["Your party finds #num of enemies# #type of enemy# in the #area# they look #descriptor#. The lighting is #light level# and there are #num of exits#"],
      "place" : ["Great Hall", "Library", "Armory", "Trophy room", "Gardens", "Courtyard", "Kitchens", "Servants' Quarters", "Stables", "Wine Cellar", "Crypt", "Secert Passage", "Tower"],
      "num of enemies":["2","3","4","5","6","7","8","9","10"],
      "type of enemy": ["Normal guards", "Hazekillers", "Allomancers","Steel Inquistor","guard dogs"],
      "descriptor": ["creepy,", "smelly", "imposing", "menacing","relaxed", "tired", "frustrated","sleepy","intimidating","alert and ready to fight" ],
      "num of exits": ["2 exits", "3 exits", "4 but one of the exits seems to be locked", "only one exit but its guarded by a masssive mastif", "one exit", "two exits but one of the doors seems to be wielded shut", "three exits but all of them are locked", "no exits except for the one you came through"],
      "light level": ["very dark", "bright in the #area#", "decently lit", "dimly lit","foggy as it blankets the entire #area#"],
    }
    console.log(enemy_encounter_data)
    for (let i = 0; i < 10; i++){
      result += "<li>" + grammars.GenerationSimple(enemy_encounter_data) + "</li>";
    }
    result += "</ol>";
    console.log(result)
    io.write_into_element(result, "enemy")
}
