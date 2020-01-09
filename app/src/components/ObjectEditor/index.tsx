import * as React from 'react';

import SelectBox from '../SelectBox';
import XyzInput from '../xyzInput';
import PrimaryButton from '../PrimaryButton';
import { postJSONtoServer } from '../../utils/serverClient';

interface props {
  objectsLength;
  append;
  update;
  remove;
  closeModal;
};

interface state {
  id: number;
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

  isSubmitted = false;
  geometryOptions = ['Plane', 'Cube', 'Sphere'];
  materialOptions = ['MeshBasic','MeshLambert', 'MeshPhong'];

  constructor(props) {    
    super(props);
    // ユーザが入力した情報の一時保管用
    this.state = {
      id: this.props.objectsLength + 1,
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
   * selectBox変更時
   * stateを更新
   */
  onSelectChange(e, key) {
    const data = {};
    data[key] = e.target.value;
    this.setState(data);
  }

  /**
   * x, y, zinputの変更時
   * stateを更新
   */
  onXYZChange(e, key, type) {
    const state = Object.assign({}, this.state);
    state[type][key] = e.target.value;
    this.setState(state);
  }

  /**
   * saveボタンクリック時
   * isSubmittedフラグをtrueにして、StoreにStateを保存する
   */
  onSave() {
    this.isSubmitted = true;
    this.props.append(this.state);
  }

  /**
   * ReduxのStoreが更新されたときに走る
   */
  componentDidUpdate() {
    // Saveボタン押下時のみ処理を実行する
    if (!this.isSubmitted) return;
    /**
     * saveボタン押したらサーバーのAPI叩いて帰ってきたsrcをStoreにセットする
     * ボタンクリック=>入力値(state)をStoreに反映=>
     * 反映済みのStoreをサーバーに投げる =>
     * パース(サーバー) => コード生成(サーバー) => フロントに返す =>
     * 帰ってきたソースコードをdispatch => 描画を走らせる
     */
    postJSONtoServer('/api/v1/generate', this.state)
      .then(json => console.log(json));

    this.props.closeModal();
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
          <PrimaryButton label="Save" onClick={() => this.onSave()} />
        </div>
      </div>
    );
  }
};

export default ObjectEditor;
