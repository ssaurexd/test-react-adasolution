import { ChangeEvent, FC, ReactNode } from 'react'
import './input.css'


interface Props {
	placeholder: string
	value: string
	children: ReactNode
	onChange: ( e: ChangeEvent<HTMLInputElement> ) => void
	name?: string
}
export const Input: FC<Props> = ({ placeholder, value, onChange, children, ...props }) => {
	return (
		<>
			<label className='input-text-label' htmlFor="inputText">{ children }</label>
			<input 
				{ ...props }
				id='inputText'
				type='text' 
				className='input-text'
				placeholder={ placeholder } 
				value={ value } 
				onChange={ onChange }
			/>
		</>
	)
}