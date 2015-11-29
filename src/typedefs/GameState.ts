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
   * State of every planet indexed by cell id
   */
  planets: { [id: string]: PlanetState };

  /**
   * State of every unit indexed by unit id
   */
  units: { [id: string]: UnitState };

  /**
   * State of every player indexed by player id
   */
  players: { [id: string]: PlayerState };
}

/**
 * represent the state of a planet at a given turn
 */
export interface PlanetState {

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
   * current status of the player
   */
  status: PlayerStatus;

  /**
   * current amount of the resources.
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
   * represents the current techs (by id) developed by the player.
   */
  techTree: string[];
}

/**
 * represent if the player is dead or alive, or in another status
 */
export const enum PlayerStatus {
  DEAD,
  ALIVE
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
