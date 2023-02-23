import { type NextPage } from "next";
import { motion } from 'framer-motion'
import { useRef } from "react";

const Drag: NextPage = () => {

  const constraintsRef = useRef(null)
  return (
    <div className="w-screen h-screen bg-blue-300" ref={constraintsRef}>
      <motion.div
        drag
        whileDrag={{ scale: 1.2 }}
        className="h-24 w-24 rounded-full bg-red-500"
        dragConstraints={constraintsRef}
        dragMomentum={false}
        dragTransition={{ bounceStiffness: 150, bounceDamping: 10 }}
      />
    </div>

  )
}

export default Drag;