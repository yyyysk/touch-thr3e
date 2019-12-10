/**
 * Store
 */
interface Store {
  modalOpenFlag: boolean;
  modalType: string;

  jsSrc: string;
}

/**
 * 
 */
interface Touch3Object {
  geometry: string;
  material: string;
  color: string;
  position: {
    x: number;
    y: number;
    z: number;
  };
  rolation: {
    x: number;
    y: number;
    z: number;
  };
}

/**
 * 
 */
interface Touch3Light {
  type: string;
  color: string;
  decay: number;
  distance: number;
  intensity: number;
  position: {
    x: number;
    y: number;
    z: number;
  };
  power: number;
  bias: number;
  target: number;
}

/**
 * 
 */
interface Touch3Camera {
  type: string;
  position: {
    x: number;
    y: number;
    z: number;
  };
  perspective: string;
}
