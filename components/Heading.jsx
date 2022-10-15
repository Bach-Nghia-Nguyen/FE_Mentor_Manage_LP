import { chakra } from '@chakra-ui/react'

function Heading({ children, as = 'h2', ...rest }) {
  switch (as) {
    case 'h1':
      return <chakra.h1 {...rest}>{children}</chakra.h1>

    case 'h2':
      return <chakra.h2 {...rest}>{children}</chakra.h2>

    case 'h3':
      return <chakra.h3 {...rest}>{children}</chakra.h3>

    case 'h4':
      return <chakra.h4 {...rest}>{children}</chakra.h4>

    case 'h5':
      return <chakra.h5 {...rest}>{children}</chakra.h5>

    case 'h6':
      return <chakra.h6 {...rest}>{children}</chakra.h6>

    default:
      return <chakra.h2>{children}</chakra.h2>
  }
}

export default Heading
