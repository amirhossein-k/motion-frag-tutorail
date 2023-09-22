"use client";
import {useRef} from "react";
import {motion} from "framer-motion";
export default function Home() {
  const constraintsRef = useRef(null);

  return (
    <main className="min-h-screen bg-gray-800 w-full text-white">
      <motion.div ref={constraintsRef}>
        <motion.div
          drag
          dragConstraints={constraintsRef}
          className="w-20 h-20 rounded bg-white"
        />
      </motion.div>
      <motion.div
        drag="x"
        dragConstraints={{left: 0, right: 100}}
        className="w-20 h-20 rounded bg-blue-300"
      />
      <motion.div
        drag
        dragConstraints={{left: 0, right: 500}}
        dragElastic={0.2}
        className="w-20 h-20 rounded bg-blue-800"
      />
      <motion.div
        dragMomentum={false}
        drag
        dragConstraints={{left: 0, right: 500, top: 200}}
        dragElastic={0.2}
        className="w-20 h-20 rounded bg-green-800"
      />

      <motion.div
        drag
        // onDrag={(event, info) => console.log(info.point.x, info.point.y)}
        onDragStart={(event, info) =>
          console.log(`start: ${info.point.x} ${info.point.y}`)
        }
        onDragEnd={(event, info) =>
          console.log(`end: ${info.point.x} ${info.point.y}`)
        }
        className="w-20 h-20 rounded bg-green-200"
      />
      <motion.div
        drag
        dragDirectionLock
        onDirectionLock={(axis) => console.log(axis)}
        className="w-20 h-20 rounded bg-purple-200"
      />
    </main>
  );
}
