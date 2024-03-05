import { FC, ReactNode } from 'react'


interface Props {
	children: ReactNode
}
export const ModalFooter: FC<Props> = ({ children }) => {

	return (
		<div className='modal-footer'>
			{ children }
		</div>
	)
}