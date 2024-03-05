import { FC, ReactNode } from 'react'
import './listitem.css'


interface Props {
	children: ReactNode
	selected: boolean
	onClick?: () => void
	onDoubleClick?: () => void
}
export const ListItem: FC<Props> = ({ children, selected, onClick, onDoubleClick }) => {
	
	return (
		<li className={`list-item ${ selected ? 'focus' : '' }`} 
			onClick={ onClick }
			onDoubleClick={ onDoubleClick }
		>
			{ children }
		</li>
	)
}