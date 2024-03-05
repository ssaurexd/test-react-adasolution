import { FC, ReactNode } from 'react'
import './modal.css'


interface Props {
	children: ReactNode
	open: boolean
}
export const Modal: FC<Props> = ({ children, open }) => {

	return (
		<div className={`modal ${ open && 'open' }`}>
			<div className='modal-content'>
				{ children }
			</div>
		</div>
	)
}