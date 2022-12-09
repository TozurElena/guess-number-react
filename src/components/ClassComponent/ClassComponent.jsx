import React from 'react';
import style from './ClassComponent.module.css';
import PropTypes from 'prop-types';

export class ClassComponent extends React.Component {
  state = {
    result: 'Угадай число от 1 до 10',
    userNumber: '',
    randomNumber:
        Math.floor(Math.random() * (this.props.max - this.props.min)) +
        this.props.min,
    count: 0,
    isRestart: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState(state => ({
      count: state.count + 1,
    }));
    this.setState(state => {
      if (!state.userNumber) {
        return {
          result: `Введите число`,
        };
      }
      if (state.userNumber > state.randomNumber) {
        return {
          result: `${state.userNumber} > загаданного числа`,
        };
      }
      if (state.userNumber < state.randomNumber) {
        return {
          result: `${state.userNumber} < загаданного числа`,
        };
      }
      return {
        result: `Победа! Загаданное число - ${state.userNumber},
                попыток - ${state.count}`,
        isRestart: true,
      };
    });
    this.setState({
      userNumber: '',
    });
    console.log(this.state.result);
  };

  gameRestart = (e) => {
    e.preventDefault();
    this.setState({
      result: 'Угадай число от 1 до 10',
      userNumber: '',
      randomNumber:
        Math.floor(Math.random() * (this.props.max - this.props.min)) +
        this.props.min,
      count: 0,
      isRestart: false,
    });
  };
  handleChange = e => {
    this.setState({
      userNumber: e.target.value,
    });
    console.log(this.state);
  };
  render() {
    return (
      <div className={style.game}>
        <p className={style.result}>{this.state.result}</p>
        <form className={style.form}
          onSubmit={this.handleSubmit}>
          <label className={style.label} htmlFor='user_number'>
            Угадай число
          </label>
          <input className={style.input} type='number' id='user_number'
            onChange={this.handleChange} value={this.state.userNumber}/>
          <button className={style.btn}>Угадать</button>
          <button
            className={style.btn}
            style={{display: this.state.isRestart ? 'block' : 'none'}}
            onClick={this.gameRestart}>
            Сыграть ещё</button>
        </form>
      </div>
    );
  }
}

ClassComponent.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};
