import React from 'react'

const ChefSection = () => {
  return (
    <section className='min-h-[800px] grid xl:grid-cols-2 xl:gap-0 gap-12 justify-items-center xl:pt-0 pt-12 lg:pl-[70px] pl-[20px] lg:pr-[70px] pr-[20px] xl:space-x-12'>
        <article className='grid w-full content-center gap-16 text-softBlack'>
            <p className='font-bold text-3xl lg:w-[80%] w-full'>"Every slice of pizza tells a story, and I'm here to create delicious chapters."</p>
            <p className='grid gap-4'>
                <span>
                    Well, let me tell you about my journey, my friend. You see, it all started in this little town I call home. 
                    Surrounded by the beauty of nature and the warmth of community, 
                    I couldn't help but feel a calling deep within me—a calling to share my love for pizza with the world.
                </span>
                <span>
                    My grandmother played a pivotal role in shaping my destiny. 
                    Her kitchen was my sanctuary, a place where magic unfolded. 
                    The enticing aromas that filled the air, the sizzle of the ingredients dancing in the pan—those moments ignited a fire within me. 
                    I watched her every move, her hands gracefully kneading the dough, her smile beaming with pride. It was there, in that humble kitchen, that I discovered my true passion for pizza.
                </span>
            </p>
            <p className='text-accent font-accent text-2xl font-bold'>MARCO ROSSIE</p>
        </article>

        <div className='grid w-full xl:justify-items-center content-center gap-4'>
            <p className='text-3xl sm:w-[400px] font-bold text-softDark'>Chef</p>
            <div>
                <img className='sm:w-[400px] w-full sm:h-[500px] h-[400px] rounded-xl' src="/images/chef.webp" alt="marco-rossie-pizza-palace-owner" />
            </div>
            <div className='grid xl:justify-items-center xl:text-center'>
                <p className='text-lightGray text-xs tracking-widest'>MASTER CHEF</p>
                <p className='text-xl font-bold'>MARCO ROSSIE</p>
                <p className='sm:w-[400px]'>Behind every great pizzeria is a story of passion, perseverance, and a pinch of flour-dusted magic.</p>
            </div>
        </div>
    </section>
  )
}

export default ChefSection