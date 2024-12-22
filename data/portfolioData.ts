interface Portfolio {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const portfolioData: Portfolio[] = [
  {
    title: '森の小さな住人',
    description: `Sony α7IV + FE 70-200mm F2.8 GM OSS`,
    imgSrc: '/static/images/portfolio/DSC01924.jpg',
    // href: 'https://www.google.com',
  },
  {
    title: '大雪のアイドル',
    description: `Sony α7CR + FE 70-200mm F2.8 GM OSS w/ 2x Teleconverter`,
    imgSrc: '/static/images/portfolio/DSC00752.jpg',
    // href: 'https://www.google.com',
  },
]

export default portfolioData
