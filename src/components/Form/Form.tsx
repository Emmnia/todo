import { useDispatch, useSelector } from 'react-redux'
import { updateText, resetText } from '../../feature/form'
import { RootState } from '../../store'
import { FormBlock, FormWrapper, FormLabel, FormField, FormControl } from './Form.styled'
import plusIcon from '../../assets/images/plus.png'

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
        <FormWrapper>
            <FormBlock action="#" onSubmit={formSubmit}>
                <FormLabel>
                    <FormField value={text} type="text" onChange={(e) => dispatch(updateText(e.target.value))} />
                    <FormControl icon={plusIcon} />
                </FormLabel>
            </FormBlock>
        </FormWrapper>
    )
}