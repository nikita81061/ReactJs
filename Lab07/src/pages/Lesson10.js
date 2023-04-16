import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../store/actions/users";
import {uid} from "uid";
import {decreaseAction, increaseAction} from "../store/reducers/counterReducer";
import {addUserAction, removeUserAction} from "../store/reducers/userReducer";

const COUNTER_STEP = 10;

export const Lesson10 = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counterReducer.counter);
    const topic = useSelector(state => state.counterReducer.lesson.topic);
    const users = useSelector(state => state.userReducer.users);

    const increase = () => {
        dispatch(increaseAction(COUNTER_STEP));
    }

    const decrease = () => {
        dispatch(decreaseAction(COUNTER_STEP));
    }

    const addUser = () => {
        const id = uid(10);
        const user = {
            name: `Petya ${id}`,
            id: id
        }
        dispatch(addUserAction(user));
    }

    const removeUser = (id) => {
        dispatch(removeUserAction(id));
    }

    const addUsers = () => {
        dispatch(fetchUsers());
    }

    return (
        <div>
            <div>
                Lesson: {topic}

                <br/>
                Counter: {counter}
                <button onClick={increase}>Increase counter</button>
                <button onClick={decrease}>Decrease counter</button>
            </div>

            <div>
                <button onClick={addUser}>Add user</button>
                <button onClick={addUsers}>Add users from fakeAPI</button>

                {users.length ?
                    <div>
                        <h3>Users</h3>
                        {users.map(user =>
                            <div id={user.id} key={user.id} onClick={() => removeUser(user.id)}>{user.name}</div>)}
                    </div>
                    :
                    <div>Нікого немає вдома</div>
                }
            </div>
        </div>
    )
}