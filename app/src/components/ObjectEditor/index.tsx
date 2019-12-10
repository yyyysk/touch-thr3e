import * as React from 'react';
import SelectBox from '../SelectBox';
import XyzInput from '../xyzInput';

const ObjectEditor: React.FC = () => {

  const geometryOptions = ['Plane', 'Cube', 'Sphere'];
  const materialOptions = ['MeshBasic','MeshLambert', 'MeshPhong'];

  return(
    <div className="objectEditor">
      <SelectBox label="Geometry" options={geometryOptions} />
      <SelectBox label="Material" options={materialOptions} />
      <XyzInput label="Position" type="position" />
      <XyzInput label="Rotation" type="rotation" />
    </div>
  );
};

export default ObjectEditor;