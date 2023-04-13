import {
  Container,
  Flex,
  Text,
  Button,
  Link,
  Image,
  // useBreakpointValue,
} from '@chakra-ui/react'
import DefaultLayout from '../../layout/DefaultLayout'
import { Link as ReactLink } from 'react-router-dom'

const PageNotFound = () => {
  // const isSmallerThanLg = useBreakpointValue({ base: true, lg: false })

  return (
    // <ExternalLayout>
    <DefaultLayout>
      <Container py={20} maxW={`1091px`} w={`100%`}>
        <Flex
          direction={{ base: 'column-reverse', lg: 'row' }}
          justify={{ base: 'center', lg: 'space-between' }}
          alignItems={{ base: 'center', lg: 'flex-start' }}
          gap={{ base: 8, lg: '32px' }}
          py={{ base: 8, lg: 0 }}
          px={{ base: 8, md: 16 }}
          className='error_main'
        >
          <Flex
            direction='column'
            alignItems={{ base: 'center', lg: 'flex-start' }}
            gap={{ base: 6, lg: 8 }}
            className='error_main_one'
            w={{ base: '100%', lg: '420px' }}
          >
            <Text
              fontSize={{ base: '4xl', md: '6xl' }}
              fontWeight='bold'
              color='deep-blue'
              className='error_text_one'
              textAlign={{ base: 'center', lg: 'left' }}
            >
              OOOps!
            </Text>
            <Text
              fontSize={{ base: '2xl', md: '4xl' }}
              fontWeight='semibold'
              color='deep-blue'
              className='error_text_two'
              textAlign={{ base: 'center', lg: 'left' }}
            >
              Page not found
            </Text>
            <Text
              fontSize={{ base: 'md', md: 'xl' }}
              color='deep-blue'
              className='error_text_three'
              textAlign={{ base: 'center', lg: 'left' }}
            >
              This page doesn&apos;t exist, we suggest you go back to home.
            </Text>
            <Link
              to='/'
              // as={Button}
              as={ReactLink}
              p={3}
              bg='primary'
              borderRadius='8px'
              fontWeight='semibold'
              color='white'
              textDecoration='none'
              transition='0.3s ease'
              w={{ base: '100%', md: 'auto' }}
            >
              Back to home
            </Link>
          </Flex>
          <Flex
            justify='center'
            alignItems='center'
            className='error_main_two'
            w={{ base: '100%', lg: 'auto' }}
          >
            <Image
              src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1681046369/project-yemsays/404_error_with_a_landscape-rafiki_a2nglt.svg`}
              alt='error img'
              className='error_img'
              maxW='799px'
              maxH='500px'
              w='100%'
              h='100%'
            />
          </Flex>
        </Flex>
      </Container>
    </DefaultLayout>
    // </ExternalLayout>
  )
}

export default PageNotFound

// import ErrorImg from '../../assets/images/404.webp'
// import style from './404.module.scss'
// import { Link } from 'react-router-dom'
// import { Container, ExternalLayout } from '../../layout'

// const PageNotFound = () => {
//   return (
//     <ExternalLayout>
//       <Container>
//         <section className={style.error_main}>
//           <section className={style.error_main_one}>
//             <div>
//               <p className={style.error_text_one}>OOOps!</p>
//               <p className={style.error_text_two}>Page not found</p>
//               <p className={style.error_text_three}>
//                 This page doesn&apos;t exist, we suggest you go back to home.
//               </p>
//             </div>
//             <Link to='/' className={[style.error_btn].join(' ')}>
//               Back to home
//             </Link>
//           </section>
//           <section className={style.error_main_two}>
//             <img src={ErrorImg} alt='error img' className={style.error_img} />
//           </section>
//         </section>
//       </Container>
//     </ExternalLayout>
//   )
// }

// export default PageNotFound
