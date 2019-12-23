/**
 * Store
 */
export interface Store {
  modalOpenFlag: boolean;
  modalType: string;

  jsSrc: string;
}

/**
 * Touch-thr3e Object
 */
export interface Touch3Object {
  id: number;
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
  size: {
    x: number;
    y: number;
    z: number;
  };
}

/**
 * Touch-thr3e Light
 */
export interface Touch3Light {
  id: number;
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
 * Touch-thr3e Camera
 */
export interface Touch3Camera {
  id: number;
  type: string;
  position: {
    x: number;
    y: number;
    z: number;
  };
  perspective: string;
}
