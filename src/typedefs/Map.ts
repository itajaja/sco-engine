module Sco.Model {

  /**
   * Represent the map of a game. The Map contains data that don't change over time.
   */
  export interface Map {
    /**
     * Arcs of the Map graph
     */
    paths: Path[];

    /**
     * Nodes of the Map graph
     */
    cells: Cell[];

    /**
     * the systems on the map
     */
    systems: System[];

    /**
     * the Id of the game where the map is used. reference to Game.id
     */
    gameId: string;
  }

  /**
   * The path from a cell to another
   */
  export interface Path {
    /**
     * reference to Cell.id
     */
    from: string;

    /**
     * reference to Cell.id
     */
    to: string;
  }

  /**
   * The atomic unit of space. Can contain a Planet
   */
  export interface Cell {
    /**
     * Unique identifier of the Cell
     */
    id: string;

    /**
     * Name of the Cell
     */
    name: string;

    /**
     * reference to System.id
     */
    system: string;

    /**
     * the planet's cell (if any)
     */
    planet?: Planet;
  }

  export interface System {
    /**
     * Unique identifier of the Cell
     */
    id: string;

    /**
     * name of the system
     */
    name: string;

    /**
     * Hex representation of the system color (e.g: #aaaaaa)
     */
    color: string;
  }

  /**
   * Represent all the static information about a planet
   */
  export interface Planet {
    /**
     * Description of the planet resource type
     * Examples: Gasous, Iron, Agricultural, Obscure, Normal
     */
    resourceTypeDefinition: string;

    /**
     * represent the base resource yield of a planet
     */
    resourceYield: Resource[];
  }

}
