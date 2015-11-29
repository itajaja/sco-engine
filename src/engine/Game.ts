import * as Sco from '../typedefs/index';

/**
 * The class exposes all the data for the current state of the match and
 * utility methods for getting the information
 */
export default class Game {

  public status: Sco.GameStatus;

  public state: Sco.GameState;

  public map: Sco.Map;

  public players: string[];

}
