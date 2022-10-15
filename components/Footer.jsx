import { Box, Flex, Text, Input } from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image'
import Button from './Button'
import whiteLogo from 'assets/images/white-logo.svg'
import facebook from 'assets/icons/icon-facebook.svg'
import youtube from 'assets/icons/icon-youtube.svg'
import twitter from 'assets/icons/icon-twitter.svg'
import pinterest from 'assets/icons/icon-pinterest.svg'
import instagram from 'assets/icons/icon-instagram.svg'

const leftMenu = [
  { id: 1, link: 'Home' },
  { id: 2, link: 'Pricing' },
  { id: 3, link: 'Products' },
  { id: 4, link: 'About Us' },
]

const rightMenu = [
  { id: 1, link: 'Careers' },
  { id: 2, link: 'Community' },
  { id: 3, link: 'Privacy Policy' },
]

const socialLinks = [
  { id: 1, src: facebook, alt: 'facebook' },
  { id: 2, src: youtube, alt: 'youtube' },
  { id: 3, src: twitter, alt: 'twitter' },
  { id: 4, src: pinterest, alt: 'pinterest' },
  { id: 5, src: instagram, alt: 'instagram' },
]

function Footer() {
  return (
    <Box
      as="footer"
      bgColor="neutral.veryDarkBlue"
      padding={{ base: '45px 0 30px', w960: '45px 0 45px' }}
    >
      <Flex
        // border="1px solid red"
        margin={{ base: '0 0 30px', w960: '0 auto' }}
        direction={{ base: 'column', w960: 'row-reverse' }}
        alignItems={{ base: 'center', w960: 'stretch' }}
        justifyContent={{ base: 'flex-start', w960: 'space-between' }}
        color="#fff"
        width={{ base: 'auto', w960: '85%', w1200: '80%' }}
        maxWidth="1050px"
      >
        <Flex
          direction={{ base: 'column' }}
          justifyContent={{ base: 'flex-start', w960: 'space-between' }}
          alignItems={{ base: 'stretch', w960: 'flex-end' }}
        >
          <Flex>
            <Input
              color="#000"
              placeholder="Updates in your inbox…"
              bgColor="#fff"
              borderRadius="50px"
              fontSize="14px"
              // width={{ base: 'auto' }}
            />
            <Button
              bgColor="primary.brightRed"
              color="#fff"
              width="110px"
              fontWeight="700"
              fontSize="14px"
              margin={{ base: '0 0 0 7px' }}
              // margin="40px 0 0"
            >
              GO
            </Button>
          </Flex>
          <Text
            fontSize="14px"
            display={{ base: 'none', w960: 'block' }}
            textAlign={{ base: 'center' }}
            color="neutral.darkGrayishBlue"
          >
            Copyright 2020. All Rights Reserved
          </Text>
        </Flex>
        <Flex
          justifyContent="space-between"
          w={{ base: '270px', w960: '30%', w1200: '36%' }}
          margin={{ base: '50px 0 30px', w960: '0' }}
        >
          <Box>
            {leftMenu.map((item) => (
              <Link href="/" key={item.id} passHref>
                <Text margin={{ base: '0 0 10px' }}>{item.link}</Text>
              </Link>
            ))}
          </Box>
          <Box>
            {rightMenu.map((item) => (
              <Link href="/" key={item.id} passHref>
                <Text margin={{ base: '0 0 10px' }}>{item.link}</Text>
              </Link>
            ))}
          </Box>
        </Flex>
        <Flex
          direction={{ base: 'column', w960: 'column-reverse' }}
          alignItems={{ base: 'center' }}
          width={{ base: '300px', w960: '170px', w1200: '190px' }}
          justifyContent={{ base: 'flex-start', w960: 'space-between' }}
        >
          <Flex
            width="100%"
            justifyContent={{ base: 'space-between' }}
            margin={{ base: '0 0 40px', w960: '0' }}
          >
            {socialLinks.map((item) => (
              <Box width={{ base: '35px', w960: '25px' }} key={item.id}>
                <Image src={item.src} alt={item.alt} layout="responsive" />
              </Box>
            ))}
          </Flex>
          <Box width={{ base: '180px', w960: '170px', w1200: '190px' }}>
            <Image src={whiteLogo} alt="logo" width="100%" layout="responsive" />
          </Box>
        </Flex>
      </Flex>

      <Text
        fontSize="14px"
        display={{ base: 'block', w960: 'none' }}
        textAlign={{ base: 'center' }}
        color="neutral.darkGrayishBlue"
      >
        Copyright 2020. All Rights Reserved
      </Text>
    </Box>
  )
}

export default Footer
