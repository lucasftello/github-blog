import { AnchorHTMLAttributes } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { LinkContainer } from './styles'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string
}

export function Link({ text, ...rest }: Props) {
  return (
    <LinkContainer {...rest}>
      <span>{text}</span>
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
    </LinkContainer>
  )
}
