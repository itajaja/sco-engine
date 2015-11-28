declare module Sco.Model {
  /**
   * represents a game in the database
   */
  export interface Game {

    /**
     * the ids of the players playing the game
     */
    players: string[];
  }

  /**
   * represent the status of the game
   */
  export const enum GameStatus {
    RUNNING,
    FINISHED
  }
}
