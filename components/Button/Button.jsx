import Link from 'next/link'

export const Button = ({text,url}) => {
  return (
    <Link href={url} className='border-[2px] rounded-sm border-black p-3 hover:bg-black hover:text-white transition-colors'>
        {text}
    </Link>
  )
}
