import Image from 'next/image'
import { Box, Text } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import styled from '@emotion/styled'
import 'swiper/css'
import 'swiper/css/pagination'
import Heading from './Heading'
import Button from './Button'
import anisha from 'assets/images/avatar-anisha.png'
import ali from 'assets/images/avatar-ali.png'
import richard from 'assets/images/avatar-richard.png'
import shanai from 'assets/images/avatar-shanai.png'
import { useEffect, useState } from 'react'

const datas = [
  {
    id: 1,
    avatar: anisha,
    name: 'Anisha Li',
    comment:
      'Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.',
  },
  {
    id: 2,
    avatar: ali,
    name: 'Ali Bravo',
    comment:
      'We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.',
  },
  {
    id: 3,
    avatar: richard,
    name: 'Richard Watts',
    comment:
      'Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!',
  },
  {
    id: 4,
    avatar: shanai,
    name: 'Shanai Gough',
    comment:
      'Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.',
  },
]

function UnstyledTestimonial({ className }) {
  const [width, setWidth] = useState()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth)
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)
    }

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Box className={className} textAlign="center" padding={{ base: '0 0 40px', w960: '0 0 140px' }}>
      <Heading
        as="h2"
        fontWeight="700"
        fontSize={{ base: '30px', w960: '36px' }}
        color="primary.darkBlue"
        margin={{ base: '0 0 40px' }}
      >
        What they&apos;ve said
      </Heading>

      <Swiper
        modules={[Pagination]}
        pagination={width < 960 ? true : false}
        slidesPerView={width >= 960 ? 3 : 1}
        spaceBetween={30}
      >
        {datas.map((item) => (
          <SwiperSlide key={item.id}>
            <Box
              position="relative"
              textAlign="center"
              bgColor="neutral.veryLightGray"
              w={{ base: '90%', w960: '100%' }}
              maxWidth="500px"
              padding={{ base: '60px 20px 40px' }}
              margin={{ base: '0 auto' }}
            >
              <Box
                w="80px"
                h="80px"
                borderRadius="50%"
                position="absolute"
                top="-40px"
                left="50%"
                transform="translate(-50%)"
                zIndex="10"
              >
                <Image src={item.avatar} alt={item.name} />
              </Box>
              <Heading
                as="h4"
                fontWeight="700"
                color="primary.darkBlue"
                margin={{ base: '0 0 15px' }}
              >
                {item.name}
              </Heading>
              <Text
                color="neutral.darkGrayishBlue"
                lineHeight="1.7"
                fontSize={{ base: '14px', w650: '16px' }}
              >
                &quot;{item.comment}&quot;
              </Text>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      <Button
        bgColor="primary.brightRed"
        color="#fff"
        width="150px"
        height="45px"
        fontWeight="700"
        fontSize="14px"
        boxShadow="0px 10px 7px -3px rgb(249, 164, 143)"
        margin="40px 0 0"
      >
        Get Started
      </Button>
    </Box>
  )
}

const Testimonial = styled(UnstyledTestimonial)`
  .swiper {
    padding: 50px 0 0;
    .swiper-wrapper {
      margin-bottom: 50px;
      @media (min-width: 960px) {
        margin-bottom: 0px;
      }
    }
    .swiper-pagination-bullets {
      .swiper-pagination-bullet {
        width: 12px;
        height: 12px;
        background-color: #fff;
        border: 2px solid hsl(12, 88%, 59%);
        opacity: 1;
      }
      .swiper-pagination-bullet-active {
        background-color: hsl(12, 88%, 59%);
      }
    }
  }
`

export default Testimonial
