const arrayOfPrice = [7,8,9,10,11,12,13,14,15,16]

export const getRandomPrice = () => 
  arrayOfPrice[Math.floor(Math.random() * arrayOfPrice.length)]