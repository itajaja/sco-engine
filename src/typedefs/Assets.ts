module Sco.Model {

  /**
   * represent an abstract base asset
   */
  export interface AssetBase {
    /**
     * represent the tech requirements for producing the assets (if any)
     */
    techRequirements?: string[];

    /**
     * the amount of resources used to produce the asset. The key is the
     * Resource id and the value is the amount
     */
    cost: {};

    /**
     * the user friendly name of an asset
     */
    name: string;

    /**
     * the unique identifier of an asset
     */
    id: string;

    /**
     * the number of turns to complete the asset
     */
    productionTime: number;

    /**
     * a user readable description of the asset
     */
    description: string;

    /**
     * A list of special features that an asset has.
     */
    features: any[];
  }

  /**
   * asset representing a building
   */
  export interface BuildingAsset extends AssetBase {
    /**
     * maximum number of buildings of this type in a planet
     */
    maxPerPlanet?: number;

    /**
     * maximum number of buildings of this type for a player
     */
    maxPerPlayer?: number;

    /**
     * maximum number of buildings of this type in a system
     */
    maxPerSystem?: number;

    /**
     * amount of resources produced per turn. The key is the resource id
     * and the value is the amount
     */
    resourceYield?: {};

    /**
     * define resource multiplication for the planet the building is on. The
     * key is the resource id and the value is the amount
     */
    resourceMultiplier?: Resource[];
  }

  /**
   * asset representing a unit
   */
  export interface UnitAsset extends AssetBase {
    /**
     * type of unit
     */
    type: UnitType;

    /**
     * type of armoring
     */
    armorType: ArmorType;

    /**
     * type of weapon that the unit carries
     */
    weaponType: WeaponType;

    /**
     * indicates the priority during a combat phase
     */
    shootingSpeed: number;

    /**
     * indicates how likely is the unit to hit the target
     */
    accuracy: number;

    /**
     * Indicates how likely is the unit to avoid incoming fire
     */
    evasion: number;

    /**
     * indicates how likely is the unit to be targeted by enemy fire
     */
    strategicCaliber: number;

    /**
     * indicates how many hits the unit can take before being destroyed
     */
    endurance: number;

    /**
     * fire power of the unit
     */
    firePower: number;

    /**
     * maximum speed for the unit
     */
    speed: number;

    /**
     * Amount of gas consumed by the unit
     */
    gasConsumption: number;

    /**
     * Amount of food consumed by the unit
     */
    foodConsumption: number;
  }

  export const enum UnitType {
    SMALL,
    MEDIUM,
    LARGE,
    HUGE,
    LAND
  }

  export const enum ArmorType {
    LIGHT,
    MEDIUM,
    HEAVY
  }

  export const enum WeaponType {
    NORMAL,
    ANTIARMOR,
    BOMBS
  }

  /**
   * asset representing a element in the technology tree
   */
  export interface TechAsset extends AssetBase {
    /**
     * The level of the element in the tree
     */
    level: number;

    /**
     * the family it belongs to. references TechFamilyAsset.id
     */
    family: string;
  }

  /**
   * asset representing a family in the technology tree
   */
  export interface TechFamilyAsset {
    /**
     * the name of the family tree
     */
    name: string;

    /**
     * unique identifier
     */
    id: string;

    /**
     * Hex representation of the family tree color (e.g: #aaaaaa)
     */
    color: string;

    /**
     * a user readable description of the tree
     */
    description: string;
  }

  /**
   * asset representing a type of resource
   */
  export interface ResourceTypeAsset {
    /**
     * the name of the resource
     */
    name: string;

    /**
     * unique identifier of the type
     */
    id: string;

    /**
     * Hex representation of the resource color (e.g: #aaaaaa)
     */
    color: string;

    /**
     * a user readable description of the resource
     */
    description: string;
  }
}
