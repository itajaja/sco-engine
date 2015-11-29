/**
 * represent the set of action of a specific turn of a game
 */
export interface Turn {
  /**
   * references to Player.id
   */
  playerId: string;

  /**
   * turn number of the actions
   */
  turnNumber: number;

  /**
   * the list of movement
   */
  movements: MovementAction[];

  /**
   * The list of productions
   */
  productions: ProductionAction[];
}

/**
 * represents an action to build something
 */
export interface ProductionAction {
  /**
   * the type to build. References Asset.id
   */
  targetType: string;

  /**
   * the location where to produce to (if applicatble)
   */
  targetLocation: string;
}

/**
 * An action to interact with the market
 */
export interface MarketAction {
  // TODO TBD
}

/**
 * an action to move units
 */
export interface MovementAction {
  /**
   * the unit to move. references Gamestate.UnitsState.Id
   */
  unit: string;

  /**
   * the path to follow. Each element references Cell.id
   */
  path: string[];

  /**
   * the speed used to reach the destination
   */
  speed: number;
}
