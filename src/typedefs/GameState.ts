/**
 * Represent the state of a game at a given turn
 */
export interface GameState {

  /**
   * Number of the current turn, starting from 0
   */
  turnNumber: number;

  /**
   * State of the market
   */
  marketState: any; // TODO

  /**
   * State of every planet
   */
  planets: PlanetState[];

  /**
   * State of every unit
   */
  units: UnitState[];

  /**
   * State of every player
   */
  players: PlayerState[];
}

/**
 * represent the state of a planet at a given turn
 */
export interface PlanetState {
  /**
   * References Cell.id
   */
  planetId: string;

  /**
   * current owner of the planet. references Player.id
   */
  ownerId?: string;

  /**
   * the state of all the buildings on the planet
   */
  buildings: BuildingState[];
}

/**
 * Represents the current status of the player
 */
export interface PlayerState {
  /**
   * references Player.Id
   */
  playerId: string;

  /**
   * current status of the player
   */
  status: PlayerStatus;

  /**
   * current amount of the resources. The key is the value and the value is
   * the amount
   */
  resourcesAmount: Resources;

  /**
   * current status of the production queue
   */
  productionQueue: {
    /**
     * Turn that remain before the construction ends
     */
    remainingTurns: number;
    /**
     * reference to Asset.id
     */
    itemId: string;
    /**
     * where the item will be built (if applicatble). references to Cell.id
     */
    targetLocation?: string
  }[];

  /**
   * represents the current techs developed by the player
   */
  techTree: {
    /**
     * reference to Asset.id
     */
    techId: string;
    /**
     * current level of progress
     */
    level: string;
  }[];
}

/**
 * represent if the player is dead or alive, or in another status
 */
export const enum PlayerStatus {
  Dead,
  Alive
}

/**
 * represent a resource/amount pair. The key is the resource id and the value
 * is the amount
 */
export interface Resources { [id: string] : number; }

/**
 * represent the status of a unit in game
 */
export interface UnitState {
  /**
   * owner of the unit. references Player.id
   */
  ownerId: string;

  /**
   * unique identifier of the unit
   */
  id?: string;

  /**
   * reference to Cell.id
   */
  location: string;

  /**
   * reference to Asset.id
   */
  type: string;
}

/**
 * Represents the state of a building on a planet
 */
export interface BuildingState {
  /**
   * Reference to Asset.id
   */
  type: string;

  /**
   * the level of the building
   */
  level: string;
}
