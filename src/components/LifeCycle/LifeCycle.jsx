import React from 'react';
import style from './LifeCycle.module.css';

export class LifeCycle extends React.Component {
/**
 * !render
 * constructor
 * getDerivedStateFromprops
 * render
 * -
 * !commit
 * onoblenie DOM
 * componentDidMount
 * componentWillUnmount
 */

  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = {
      field: 0,
    };

    // this.handler = this.handler.bind(this);
  }

  handler = () => {
    this.setState(state => ({field: state.field + 1}));
  };

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    return state;
  }

  componentDidMount() {
    console.log('componentDidMount: ');

    // setInterval(() => {
    //   this.setState((state) => ({
    //     field: state.field + 1,
    //   }));
    // }, 3000);

    // document.addEventListener('scroll', this.handler);

    // eslint-disable-next-line react/prop-types
    document.title = this.props.prop;
  }

  /**
   * !render
   * getDerivedStateFromProps
   * shouldComponentUpdate
   * render
   * -
   * !pre-commit
   * getSnapshotBeforeUpdate
   * обновляется DOM
   * !commit
   * componentDidUpdate
   */
  componentWillUnmount() {
    // document.removeEventListener('scroll', this.handler);
  }


  render() {
    console.log('render');
    return (
      <div>
        <h1 className={style.title}>Жизненный цикл</h1>

        <div className={style.container}>
          <div>
            <h2 className={style.title}>Типы</h2>
            <ul className={style.list}>
              <li>Монтирование</li>
              <li>Обновление</li>
              <li>Размонтирование</li>
              <li>Ошибки</li>
            </ul>
          </div>

          <div className='stage'>
            <h2 className={style.title}>Этапы</h2>
            <ul className={style.list}>
              <li>Render</li>
              <li>Pre-commit</li>
              <li>Commit</li>
            </ul>
          </div>
        </div>

        <button className={style.byn}
          onClick={this.handler}>
          Click {this.state.field}
        </button>
      </div>
    );
  }
}
