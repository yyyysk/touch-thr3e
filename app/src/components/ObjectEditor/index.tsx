import * as React from 'react';

import SelectBox from '../SelectBox';
import XyzInput from '../xyzInput';
import PrimaryButton from '../PrimaryButton';
import CancelButton from '../CancelButton';

const ObjectEditor: React.FC = () => {

  const geometryOptions = ['Plane', 'Cube', 'Sphere'];
  const materialOptions = ['MeshBasic','MeshLambert', 'MeshPhong'];

  return(
    <div className="objectEditor">
      <SelectBox label="Geometry" options={geometryOptions} />
      <SelectBox label="Material" options={materialOptions} />
      <XyzInput label="Position" type="position" />
      <XyzInput label="Rotation" type="rotation" />
      <CancelButton label="Cancel" onClick={() => console.log('clicked cancel')} />
      <PrimaryButton label="Save" onClick={() => console.log('clicked save')} /> 
    </div>
  );
};

export default ObjectEditor;