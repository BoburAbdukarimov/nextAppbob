import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="w-full">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

  
    <div className="w-1/2  mx-auto mt-40">
          <div className="grid grid-cols-2 gap-4 place-content-center  h-48 w-full">
  <div className="text-center text-2xl text-slate-100 py-5 rounded  bg-blue-500 shadow-2xl  shadow-indigo-500/50 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300">
  
  <Link href={"/onebolim"}>
              <a>1-chi bolim</a>
              </Link>

  </div>
            <div className="text-center text-2xl text-slate-100 py-5 rounded  bg-blue-500 shadow-2xl  shadow-indigo-500/50 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300">
              <Link href={"/twobolim"}>
              <a>2-chi bolim</a>
              </Link>
              </div>
        <div className="text-center text-2xl text-slate-100 py-5 rounded  bg-blue-500 shadow-2xl  shadow-indigo-500/50 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300">
        <Link href={"/sreebolim"}>
              <a>3-chi bolim</a>
              </Link>
          </div>
        <div className="text-center text-2xl text-slate-100 py-5 rounded  bg-blue-500 shadow-2xl  shadow-indigo-500/50 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300">
        <Link href={"/fourbolim"}>
              <a>4-chi bolim</a>
              </Link>
          </div>
</div>
    </div>


{/* //footer block */}

    </div>
  )
}

export default Home
