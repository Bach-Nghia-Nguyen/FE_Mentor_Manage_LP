import { Flex, Box, Text, chakra } from '@chakra-ui/react'
import Heading from './Heading'
import Testimonial from './Testimonial'

const datas = [
  {
    id: 1,
    heading: 'Track company-wide progress',
    description:
      'See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.',
  },
  {
    id: 2,
    heading: 'Advanced built-in reports',
    description:
      'Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.',
  },
  {
    id: 3,
    heading: 'Everything you need in one place',
    description:
      'Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.',
  },
]

function MainSection() {
  return (
    <Box as="section">
      <Flex
        direction={{ base: 'column', w1200: 'row' }}
        justifyContent={{ base: 'flex-start', w1200: 'space-evenly' }}
        margin={{ base: '0', w1200: '0 0 40px' }}
      >
        <Box
          textAlign={{ base: 'center', w1200: 'left' }}
          margin={{ base: '0 auto 40px', w1200: '0' }}
          width={{ base: '90%', w650: '570px', w1200: '440px' }}
        >
          <Heading
            as="h2"
            fontWeight="700"
            fontSize={{ base: '30px', w650: '32px' }}
            color="primary.darkBlue"
          >
            What’s different about Manage?
          </Heading>
          <Text
            color="neutral.darkGrayishBlue"
            lineHeight={{ base: '1.75' }}
            margin={{ base: '0', w1200: '20px 0 0' }}
            width={{ base: 'auto', w1200: '350px' }}
          >
            Manage provides all the functionality your team needs, without the complexity. Our
            software is tailor-made for modern digital product teams.{' '}
          </Text>
        </Box>

        <Box>
          {datas.map((item) => (
            <chakra.div
              display="grid"
              margin={{ base: '0 0 40px 15px', w650: '0 auto 40px' }}
              gridTemplateRows={{ base: '40px 1fr' }}
              gridTemplateColumns={{ base: '1fr 4fr', w650: '70px 1fr' }}
              height={{ base: '160px', w650: 'auto' }}
              rowGap={{ base: '10px' }}
              key={item.id}
              width={{ base: 'auto', w650: '550px' }}
            >
              <chakra.div
                display="grid"
                gridColumn={{ base: '1 / span 2' }}
                // gridTemplateRows={{ base: '1fr' }}
                gridTemplateColumns={{ base: '1fr 4fr', w650: '70px 1fr' }}
                bgColor={{ base: 'neutral.veryPaleRed', w650: 'transparent' }}
                borderRadius={{ base: '50px 0 0 50px' }}
              >
                <chakra.div
                  // border="1px solid green"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  fontWeight="700"
                  color="#fff"
                  bgColor="primary.brightRed"
                  borderRadius={{ base: '50px' }}
                >
                  {item.id < 10 ? `0${item.id}` : item.id}
                </chakra.div>
                <chakra.h4
                  color="primary.darkBlue"
                  fontWeight="700"
                  display="flex"
                  alignItems="center"
                  padding={{ base: '0 0 0 10px', w650: '0 0 0 20px' }}
                >
                  {item.heading}
                </chakra.h4>
              </chakra.div>
              <chakra.p
                // border="1px solid green"
                lineHeight={{ base: '1.9' }}
                gridColumn={{ base: '1 / span 2', w650: '2 / span 2' }}
                color="neutral.darkGrayishBlue"
                fontSize={{ base: '14px', w650: '16px' }}
                padding={{ base: '0 10px 0 0', w650: '0 10px 0 20px' }}
              >
                {item.description}
              </chakra.p>
            </chakra.div>
          ))}
        </Box>
      </Flex>

      <Testimonial />
    </Box>
  )
}

export default MainSection
