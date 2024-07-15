import React from 'react';

const TodosItem = ({content, completed , id, toComplete, onDelete}) => {
    const classList = `todos-item ${(completed) ? 'todos-item__active' : ''}`
    return (
        <div className={classList} key={id}>
            <button onClick={() => toComplete(id)} className='todo-item__completed'>✅</button>
            <span className={'todos-item__text'}>
                {content}
            </span>
            <button onClick={() => onDelete(id)} className='todo-item__delete'>&times;</button>
        </div>
    );
}

export default TodosItem;
