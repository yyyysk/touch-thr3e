import * as React from 'react';

import SelectBox from '../SelectBox';
import XyzInput from '../xyzInput';
import PrimaryButton from '../PrimaryButton';

interface props {
  append;
  update;
  remove;
};

interface state {
  geometry: string;
  material: string;
  size: {
    x: number;
    y: number;
    z: number;
  };
  position: {
    x: number;
    y: number;
    z: number;
  };
  rotation: {
    x: number;
    y: number;
    z: number;
  };
}

class ObjectEditor extends React.Component<props, state> {

  geometryOptions = ['Plane', 'Cube', 'Sphere'];
  materialOptions = ['MeshBasic','MeshLambert', 'MeshPhong'];

  constructor(props) {
    super(props);
    // ユーザが入力した情報の一時保管用
    this.state = {
      geometry: '',
      material: '',
      size: {
        x: 0,
        y: 0,
        z: 0,
      },
      position: {
        x: 0,
        y: 0,
        z: 0,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      },
    };
  }

  /**
   * 仮でボタン押したらサーバーのAPI叩いて帰ってきたsrcをStoreにセットする
   * 実稼働のときは、
   *   ボタンクリック => 入力値をStoreに反映 => 反映済みのStoreをサーバーに投げる =>
   *   パース(サーバー) => コード生成(サーバー) => フロントに返す =>
   *   帰ってきたソースコードをdispatch => 描画を走らせる
   */
  // const fetchSrc = () => {
  //   fetch('/api/v1/get')
  //     .then(res => res.json())
  //     .then(json => setSrc(json.src));
  // };

  onSelectChange(e, key) {
    const data = {};
    data[key] = e.target.value;
    this.setState(data);
  }

  onXYZChange(e, key, type) {
    const state = Object.assign({}, this.state);
    state[type][key] = e.target.value;
    this.setState(state);
  }

  onSubmit() {
    
  }

  render() {

    return(
      <div className="objectEditor">
        <SelectBox label="Geometry" onChange={this.onSelectChange.bind(this)} options={this.geometryOptions} />
        <SelectBox label="Material" onChange={this.onSelectChange.bind(this)} options={this.materialOptions} />
        <XyzInput label="Size" onChange={this.onXYZChange.bind(this)} type="size" xValue={this.state.size.x} yValue={this.state.size.y} zValue={this.state.size.z} />
        <XyzInput label="Position" onChange={this.onXYZChange.bind(this)} type="position" xValue={this.state.position.x} yValue={this.state.position.y} zValue={this.state.position.z} />
        <XyzInput label="Rotation" onChange={this.onXYZChange.bind(this)} type="rotation" xValue={this.state.rotation.x} yValue={this.state.rotation.y} zValue={this.state.rotation.z} />
        <div className="objectEditor__actionWrapper">
          <PrimaryButton label="Save" onClick={() => console.log(this.props)} />
        </div>
      </div>
    );
  }
};

export default ObjectEditor;
