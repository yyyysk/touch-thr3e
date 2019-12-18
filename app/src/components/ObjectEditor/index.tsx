import * as React from 'react';

import SelectBox from '../SelectBox';
import XyzInput from '../xyzInput';
import PrimaryButton from '../PrimaryButton';
import CancelButton from '../CancelButton';

const ObjectEditor = ({src, setSrc}) => {

  const geometryOptions = ['Plane', 'Cube', 'Sphere'];
  const materialOptions = ['MeshBasic','MeshLambert', 'MeshPhong'];

  /**
   * 仮でボタン押したらサーバーのAPI叩いて帰ってきたsrcをStoreにセットする
   * 実稼働のときは、
   *   ボタンクリック => 入力値をStoreに反映 => 反映済みのStoreをサーバーに投げる =>
   *   パース(サーバー) => コード生成(サーバー) => フロントに返す =>
   *   帰ってきたソースコードをdispatch => 描画を走らせる
   */
  const fetchSrc = () => {
    fetch('/api/v1/get')
      .then(res => res.json())
      .then(json => setSrc(json.src));
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