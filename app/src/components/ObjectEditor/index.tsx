import * as React from 'react';

import SelectBox from '../SelectBox';
import XyzInput from '../xyzInput';
import PrimaryButton from '../PrimaryButton';
import CancelButton from '../CancelButton';

const ObjectEditor: React.FC = () => {

  const geometryOptions = ['Plane', 'Cube', 'Sphere'];
  const materialOptions = ['MeshBasic','MeshLambert', 'MeshPhong'];

  const fetchSrc = () => {
    fetch('/api/v1/get')
      .then(() => console.log('ok'))
  };

  return(
    <div className="objectEditor">
      <SelectBox label="Geometry" options={geometryOptions} />
      <SelectBox label="Material" options={materialOptions} />
      <XyzInput label="Position" type="position" />
      <XyzInput label="Rotation" type="rotation" />
      <div className="objectEditor__actionWrapper">
        <PrimaryButton label="Save" onClick={fetchSrc} />
        <CancelButton label="Cancel" onClick={() => console.log('clicked cancel')} />
      </div>
    </div>
  );
};

export default ObjectEditor;