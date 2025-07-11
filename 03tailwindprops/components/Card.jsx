  import React from 'react'
   function Card({username, btntext = "oncevisit"}){
    console.log(username)
    return(
         <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src="https://images.pexels.com/photos/1376986/pexels-photo-1376986.jpeg?_gl=1*1m1954*_ga*OTgxNDgxNzg5LjE3NTIxNjg1ODA.*_ga_8JE65Q40S6*czE3NTIxNjg1ODAkbzEkZzEkdDE3NTIxNjk5NDAkajYwJGwwJGgw"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {username}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">Lorem ipsum dolor</h2>
        </div>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">{btntext}</button>
      </div>
    )
   }
   export default Card