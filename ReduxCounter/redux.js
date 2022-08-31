import React from 'react';
import { connect } from 'react-redux';
import { addCounter, minusCounter, coreItem, divideCounter } from './actions';

const Main = (props) => (
    <div>
        <div>{props.counter}</div>
        <button onClick={props.addCounter}>add one</button>
        <button
            style={{ marginLeft: 10, backgroundColor: 'red', borderRadius: 16 }}
            onClick={props.minusCounter}>
            Minus one
        </button>
        <button
            style={{ marginLeft: 10, backgroundColor: 'red', borderRadius: 16 }}
            onClick={props.coreItem}>
            Core Item
        </button>{' '}
        <button
            style={{ marginLeft: 10, backgroundColor: 'red', borderRadius: 16 }}
            onClick={props.divideCounter}>
            Divide Counter
        </button>
    </div>
);

const mapStateToProps = (state) => {
    return { counter: state.counter };
};

const mapDispatchToProps = {
    addCounter,
    minusCounter,
    coreItem,
    divideCounter
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
