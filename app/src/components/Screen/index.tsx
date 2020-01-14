import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface Props {
  src: string;
}

class Screen extends React.Component<Props, {}> {

  constructor(props) {
    super(props);
  }
  
  /**
   * srcがサーバーから渡ってきたときに実行
   */
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(nextProps.src, 'did')

    // ソースコード
    const src = document.createTextNode(nextProps.src);

    // scriptタグ
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('id', 'rendererSrc');
    script.appendChild(src);

    // 保持用div
    var renderer = ReactDOM.findDOMNode(this.refs.renderer);
    renderer.appendChild(script);
  }

  /**
   * イルカ...
   */
  componentWillUnmount() {
    var renderer = ReactDOM.findDOMNode(this.refs.renderer);
    renderer.removeChild(document.getElementById(`rendererSrc`));
  }

  render() {  
    
    return (
      <>
        <div id='WebGL-output' className='screen'></div>
        <div ref='renderer'></div>
      </>
    );
  };
}

export default Screen;
