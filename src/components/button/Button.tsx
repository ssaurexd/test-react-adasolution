import { FC, ReactNode } from 'react'
import './button.css'


interface Props {
	children: ReactNode
	variant: 'outline' | 'contained'
	onClick: () => void
	className?: string
}
export const Button: FC<Props> = ({ children, onClick, variant, className }) => {

	return (
		<button className={ `btn btn-${ variant } ${ className }` }
			onClick={ onClick }
		>
			{ children }
		</button>
	)
}