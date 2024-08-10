import { ArrowUpIcon } from '@heroicons/react/outline'
import { useScroll, animated } from '@react-spring/web'


const Scroll = () => {
 const{ scrollYProgress } = useScroll()

 function scrollToTop() {

  window.scrollTo({
   top:0,
   left: 0,
   behavior: 'smooth',
  })
 }

 return(
  <>
    <animated.div style={{ opacity: scrollYProgress }}>
       <ArrowUpIcon onClick={scrollToTop} className='fixed bottom-5 right-5 bg-purple-900 text-white rounded-full text-bold p-1 w-10' />
    </animated.div>
  </>
 )
}

export default Scroll 