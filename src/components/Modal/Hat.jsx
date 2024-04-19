'use client'

import Image from "next/image"
import { motion } from "framer-motion";
import React from 'react'

const Hat = () => {
    return (
        <div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}>
            <motion.div
                animate={{ y: [-10, 10, -10], transition: { duration: 1, repeat: Infinity } }}
            >

                <Image
                    src="/hat.png"
                    width={200}
                    height={200}
                    alt="image of a hat"
                    className="relative w-full h-auto sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lgg"
                    priority
                />

            </motion.div>
        </div>
    )
}

export default Hat