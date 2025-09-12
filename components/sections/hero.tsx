"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MeriedaFont } from "@/app/fonts";


export default function Hero() {
  return (
    <div className="mt-20">
      <motion.div>
        <motion.h1
          className="text-4xl md:text-5xl  w-full text-center font-semibold mb-2 md:px-1 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span
            className={`${MeriedaFont.className} text-slate-400 text-3xl md:text-4xl font-medium text-center`}
          >
            Hello! I'm
          </span>{" "}
          <br />
          <span className=" text-zinc-900 dark:text-white">
            Yetunde Morenikeji
          </span>
        </motion.h1>

        <div className="w-full h-1.5 xl:w-[110%] my-3 rounded-full bg-slate-400">
          <span className="rounded-full h-full w-full"></span>
        </div>
        <motion.div
          className="text-4xl md:text-5xl md:px-2 text-center font-semibold text-zinc-700 dark:text-white mb-6 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h1 className="inline-block">Frontend Engineer</h1>
        </motion.div>
      </motion.div>

      <motion.p
        className="text-muted-foreground text-lg mb-8 max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        I'm a passionate frontend developer specializing in building exceptional
        digital experiences that are fast, accessible, and visually stunning.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          <Mail className="mr-2 h-4 w-4" />
          Get In Touch
        </Button>
        <Button size="lg" variant="outline" className="glass border-primary/20">
          View My Work
        </Button>
      </motion.div>

      <motion.div
        className="flex gap-4 justify-center mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <Button size="icon" variant="ghost" className="hover:bg-primary/10">
          <Github className="h-5 w-5" />
        </Button>
        <Button size="icon" variant="ghost" className="hover:bg-primary/10">
          <Linkedin className="h-5 w-5" />
        </Button>
        <Button size="icon" variant="ghost" className="hover:bg-primary/10">
          <Mail className="h-5 w-5" />
        </Button>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <ArrowDown className="h-6 w-6 animate-bounce text-primary" />
      </motion.div>
    </div>
  );
}
