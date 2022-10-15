import { Box, Flex } from '@chakra-ui/react'
import Heading from './Heading'
import Button from './Button'
import mobileSimplifyBg from 'assets/images/bg-simplify-section-mobile.svg'
import desktopSimplifyBg from 'assets/images/bg-simplify-section-desktop.svg'

function CallAction() {
  return (
    <Flex
      as="section"
      bgColor="primary.brightRed"
      height={{ base: '380px', w960: '300px' }}
      position="relative"
      justifyContent="center"
      alignItems="center"
      _before={{
        content: `""`,
        position: 'absolute',
        top: { base: '40px', w960: 0 },
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: {
          base: `url(${mobileSimplifyBg.src})`,
          w960: `url(${desktopSimplifyBg.src})`,
        },
        backgroundRepeat: 'no-repeat',
        backgroundSize: { base: 'auto', w960: 'cover' },
        zIndex: 0,
      }}
      overflow="hidden"
    >
      <Flex
        direction={{ base: 'column', w960: 'row' }}
        justifyContent={{ base: 'center', w960: 'space-between' }}
        alignItems={{ base: 'center' }}
        width={{ base: '100%', w960: '85%', w1200: '80%' }}
        maxWidth="1050px"
      >
        <Heading
          as="h2"
          color="#fff"
          textAlign={{ base: 'center', w960: 'left' }}
          fontWeight="700"
          fontSize={{ base: '36px', w960: '32px' }}
          margin={{ base: '0 35px', w960: '0' }}
          width={{ base: 'auto', w960: '400px' }}
        >
          Simplify how your team works today.
        </Heading>
        <Button
          bgColor="#fff"
          color="primary.brightRed"
          width="150px"
          height="45px"
          fontWeight="700"
          fontSize="14px"
          // boxShadow="0px 10px 7px -3px rgb(249, 164, 143)"
          margin={{ base: '20px 0 0', w960: '0' }}
        >
          Get Started
        </Button>
      </Flex>
    </Flex>
  )
}

export default CallAction
