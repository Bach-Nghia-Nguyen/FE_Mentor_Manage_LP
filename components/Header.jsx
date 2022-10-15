import Image from 'next/image'
import { Box, Flex, Text } from '@chakra-ui/react'

import logo from 'assets/images/logo.svg'
import hamburger from 'assets/icons/icon-hamburger.svg'
import illustrationIntro from 'assets/images/illustration-intro.svg'
import bgTabletPattern from 'assets/images/bg-tablet-pattern.svg'
import Heading from './Heading'
import Button from './Button'

function Header() {
  return (
    <Box
      as="header"
      padding={{ base: '15px 15px 100px' }}
      position="relative"
      overflow="hidden"
      _before={{
        content: `""`,
        position: 'absolute',
        top: 0,
        right: 0,
        width: '150%',
        height: '100%',
        backgroundImage: `url(${bgTabletPattern.src})`,
        backgroundSize: { base: '500px' },
        backgroundPosition: { base: '100% 0%' },
        backgroundRepeat: 'no-repeat',
        zIndex: 0,
        transform: { base: 'translate(180px, -150px)' },
      }}
      _after={{
        content: `""`,
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '150%',
        height: '100%',
        backgroundImage: { base: `url(${bgTabletPattern.src})`, w650: 'none' },
        backgroundSize: { base: '330px' },
        backgroundPosition: { base: '100% 88%' },
        backgroundRepeat: 'no-repeat',
        zIndex: 0,
        transform: { base: 'translate(200px, 50px)', w650: 'none' },
      }}
    >
      <Flex margin={{ base: '20px 5px 40px 0' }} justifyContent={{ base: 'space-between' }}>
        <Box width={{ base: '120px' }}>
          <Image src={logo} alt="logo" />
        </Box>

        <Box>
          <Image src={hamburger} alt="hamburger" />
        </Box>
      </Flex>

      <Flex
        direction={{ base: 'column', w768: 'row-reverse' }}
        padding={{ base: '0 0 100px', w768: '0' }}
        justifyContent={{ base: 'flex-start', w768: 'space-evenly' }}
        height={{ base: '630px', w768: 'auto' }}
        position="relative"
      >
        <Box
          // position="absolute"
          margin={{ base: '0', w400: '0 auto', w768: '0' }}
          width={{ base: 'auto', w400: '360px', w768: '460px' }}
        >
          <Image src={illustrationIntro} alt="illustration intro" />
        </Box>

        <Box
          textAlign={{ base: 'center', w768: 'left' }}
          padding={{ base: '0 10px' }}
          position={{ base: 'absolute', w768: 'static' }}
          zIndex={{ base: '10', w768: 'auto' }}
          left={{ base: 'auto', w440: '50%', w768: 'auto' }}
          transform={{ base: 'none', w440: 'translate(-50%)', w768: 'none' }}
          width={{ base: 'auto', w440: '400px' }}
          bottom={{ base: '0', w768: 'auto' }}
        >
          <Heading
            as="h1"
            fontWeight="700"
            fontSize={{ base: '30px', w365: '36px', w960: '42px' }}
            color="primary.darkBlue"
          >
            Bring everyone together to build better products.
          </Heading>
          <Text
            color="neutral.darkGrayishBlue"
            padding={{ base: '0 0 20px' }}
            lineHeight={{ base: '1.75' }}
          >
            Manage makes it simple for software teams to plan day-to-day tasks while keeping the
            larger team goals in view.
          </Text>
          <Button
            bgColor="primary.brightRed"
            color="#fff"
            width="150px"
            height="45px"
            fontWeight="700"
            fontSize="14px"
            boxShadow="0px 10px 7px -3px rgb(249, 164, 143)"
          >
            Get Started
          </Button>
        </Box>
      </Flex>
    </Box>
  )
}

export default Header
