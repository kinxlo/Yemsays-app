/* eslint-disable react/prop-types */
import { Box, Card, CardBody, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import SpinnerComponent from '../../feedback/SpinnerComponent'
import Chart from 'chart.js/auto'

const StatCard = ({ total, title, isLoading }) => {
  const chartRef = useRef(null)

  useEffect(() => {
    if (!isLoading) {
      const chartConfig = {
        type: 'doughnut',
        data: {
          // labels: data.labels,
          datasets: [
            {
              data: [total, total - 100], // 50% value and 50% empty
              backgroundColor: [
                '#F78214', // First color for 50% value
                '#0FB7C1', // Second color for 50% empty
              ],
              borderColor: '#0FB7C1',
              borderWidth: 0,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      }

      const chart = new Chart(chartRef.current, chartConfig)

      return () => {
        chart.destroy()
      }
    }
  }, [isLoading, total])

  return (
    <Card borderRadius={10} bgColor={`transparent`} overflow={`hidden`}>
      <CardBody
        color={`textLight`}
        bgColor={`dashboardBG`}
        display={`flex`}
        gap={10}
      >
        {isLoading ? (
          <SpinnerComponent size={`xl`} />
        ) : (
          <>
            <Flex flex={1} flexDir={`column`} justifyContent={`space-between`}>
              <Text>{title}</Text>
              <Heading fontSize={`5xl`}>{total}</Heading>
            </Flex>
            <Box flex={1} width={`10rem`} height={`10rem`}>
              <canvas ref={chartRef} />
            </Box>
          </>
        )}
      </CardBody>
    </Card>
  )
}

export default StatCard

// /* eslint-disable react/prop-types */
// import {
//   Box,
//   Card,
//   CardBody,
//   Flex,
//   Heading,
//   Image,
//   Text,
// } from '@chakra-ui/react'
// import React from 'react'
// import SpinnerComponent from '../../feedback/SpinnerComponent'
// import Chart from 'chart.js/auto'

// const StatCard = ({ total, title, isLoading }) => {
//   console.log(isLoading)
//   return (
//     <Card borderRadius={10} bgColor={`transparent`} overflow={`hidden`}>
//       <CardBody
//         color={`textLight`}
//         bgColor={`dashboardBG`}
//         display={`flex`}
//         gap={10}
//       >
//         {isLoading ? (
//           <SpinnerComponent size={`xl`} />
//         ) : (
//           <>
//             <Flex flex={1} flexDir={`column`} justifyContent={`space-between`}>
//               <Text>{title}</Text>
//               <Heading fontSize={`5xl`}>{total}</Heading>
//             </Flex>
//             <Box flex={1}>
//               <Image
//                 className='cc-img-fluid'
//                 src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1678318984/project-yemsays/Group_157_fupa9j.png`}
//               />
//             </Box>
//           </>
//         )}
//       </CardBody>
//     </Card>
//   )
// }

// export default StatCard
