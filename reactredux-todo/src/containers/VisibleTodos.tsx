import TodoList from 'components/TodoList';
import { AppState, Todo } from 'types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { deleteTodo, toggleTodo } from 'redux/actions';

interface StateFromProps {
  todos: Array<Todo>;
}
interface DispatchFromProps {
  deleteTodo: (id: number) => void;
  toggleVisibility: (id: number) => void;
}

//selects which part of redux state you want, and returns that part, called everytime store changes,
//like useSelector. first argument is redux state, second is ownProps
const mapStateToProps = (state: AppState): StateFromProps => {
  return { todos: state.todoState.todos };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchFromProps => ({
  deleteTodo: (id: number) => dispatch(deleteTodo(id)),
  toggleVisibility: (id: number) => dispatch(toggleTodo(id)),
});

export default connect<StateFromProps, DispatchFromProps, {}, AppState>(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
// export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
