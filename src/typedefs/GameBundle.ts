module Sco.Model {
  export interface GameBundle {
    game: Sco.Model.Game;
    state: Sco.Model.GameState;
    turns: Sco.Model.Turn[];
    map: Sco.Model.Map;
  }
}
