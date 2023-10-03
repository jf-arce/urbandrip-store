import Link from 'next/link'

export const Button = ({text}) => {
  return (
    <button className='border-[2px] rounded-sm border-black p-3 hover:bg-black hover:text-white transition-colors'>
      {text}
    </button>
  )
}
