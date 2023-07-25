import { cva } from 'class-variance-authority'

const arcadeButtonVariants = cva(
  'relative inline-block rounded-full cursor-pointer transition-shadow duration-200',
  {
    variants: {
      variant: {
          lightPurple: 'bg-[#5a0ac2] border-[1px] border-solid border-[#670386] outline-none shadow-arcade-btn-light-p-default active:shadow-arcade-btn-light-p-pushed',
          darkPurple: 'bg-[#510cc8] border-[1px] border-solid border-[#2a0386] outline-none shadow-arcade-btn-dark-p active:shadow-arcade-btn-dark-p-pushed',
          lightBlue: 'bg-[#257ecd] border-[1px] border-solid border-[#17657a] outline-none shadow-arcade-btn-light-b-default active:shadow-arcade-btn-light-b-pushed',
          darkBlue: 'bg-[#2c45ff] border-[1px] border-solid border-[#2b5ef8] outline-none shadow-arcade-btn-dark-b-default active:shadow-arcade-btn-dark-b-pushed',
      },
      size: {
        default: 'w-[75px] h-[75px] m-[1em]'
      }
    },
    defaultVariants: {
      variant: ['lightPurple', 'darkPurple', 'lightBlue, darkBlue'],
      size: 'default'
    }
  }
)

export default arcadeButtonVariants;