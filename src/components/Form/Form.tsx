import './Form.scss'
import { useDispatch, useSelector } from 'react-redux'
import { updateText, resetText } from '../../feature/form'
import { RootState } from '../../store'

export const Form = (props: { createNewToDo: Function }) => {

    const text = useSelector((state: RootState) => state.form.text)
    const dispatch = useDispatch()

    const formSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()
        if (text) {
            props.createNewToDo(text);
            dispatch(resetText());
        }
    }

    return (
        <div className="form-wrapper">
            <form action="#" onSubmit={formSubmit}>
                <label>
                    <input value={text} type="text" onChange={(e) => dispatch(updateText(e.target.value))} />
                    <button></button>
                </label>
            </form>
        </div>
    )
}