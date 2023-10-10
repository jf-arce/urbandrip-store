import Link from "next/link";

export default function Logo(){
  return (
    <div className="flex items-center">
      <Link href="/">
        <img src="/images/urbanDripIcon.png" alt="" className="max-h-12" />
      </Link>
      
    </div>
  )
}
