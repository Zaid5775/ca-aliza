import React, { useState, useEffect } from "react";
import { isMotionComponent, motion , AnimatePresence} from "framer-motion";
import Confetti from "react-confetti";



import panda1 from "./panda.png";
import panda2 from "./panda2.png";
import panda3 from "./panda3.png";
import party from "./party.gif";
import hug from "./hug.gif";
import heart1 from "./heart1.png";
import heart2 from "./heart2.png";
import heart3 from "./heart3.png";
import taxWarrior from "./alizeh.png";
import tired from "./tired.gif";
import locked from "./locked.gif";
import barely from './barely.gif';
import standing from "./standing.gif";
import youcan from "./you-can.gif";
import kill from "./kill.gif";
import dancing from "./dancing.gif";
import happy from "./happy.gif";
import cakeeating from "./cakeeating.gif";
import dancing2 from "./dancing cat.gif";
import goma from "./goma.gif";
import hooray from "./hooray.gif";
import vibe from "./vibe.gif";
import startparty from "./startparty.gif";
import popup from "./popup.gif";


export default function App() {
  const [showConfetti, setShowConfetti] = useState(true);
  const [showGroup2Popup, setShowGroup2Popup] = useState(false);
  const [dimensions, setDimensions] = useState({
  width: window.innerWidth,
  height: window.innerHeight,
});

useEffect(() => {
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }
}, []);
const partyGifs = [
  cakeeating, dancing, party, dancing2, goma,
  hooray, vibe,startparty , popup, happy
];

const GifSequencer = ({ gif, index, total }) => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % total), 2500);
    return () => clearInterval(timer);
  }, [total]);

  if (current !== index) return null;

  return (
    <motion.img
      src={gif}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.4 }}
      // 'object-contain' ensures the whole GIF is visible, 'h-full w-full' fills the container
      className="absolute inset-0 w-full h-full object-contain rounded-[2.5rem] bg-white/50"
    />
  );
};
useEffect(() => {
  const handleResize = () =>
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

useEffect(() => {
  const timer = setTimeout(() => {
    setShowConfetti(false);
    setShowGroup2Popup(true);
  }, 10000);

  return () => clearTimeout(timer);
}, []);

  return (
    <>

{showConfetti && (
  <div className="fixed inset-0 z-[9999] pointer-events-none">
    <Confetti
      width={dimensions.width}
      height={dimensions.height}
      numberOfPieces={15000}
      gravity={0.04}
      initialVelocityY={25}
      initialVelocityX={20}
      recycle={false}
      confettiSource={{
        x: dimensions.width / 2,
        y: dimensions.height,
        w: 40,
        h: 20,
      }}
colors={[
  // reds & pinks
  "#FD7979",
  "#FF6F91",
  "#FF8FAB",
  "#FFADC6",
  "#FFCDC9",
  "#FDACAC",
  "#FFE4EF",
  "#FFD6E8",
  "#FBC4D9",
  "#FFC6FF",

  // purples & lavenders
  "#9B5DE5",
  "#B983FF",
  "#CDB4DB",
  "#D6C7FF",
  "#E0BBE4",
  "#EAD7F5",

  // blues
  "#118AB2",
  "#00BBF9",
  "#90DBF4",
  "#A0C4FF",
  "#BDE0FE",
  "#CAE9FF",

  // greens & mints
  "#06D6A0",
  "#9AE6B4",
  "#B7E4C7",
  "#C1E1C1",
  "#D8F3DC",

  // yellows & peaches
  "#FFD166",
  "#FFF1A8",
  "#FFEB99",
  "#FFDDC1",
  "#FFB703",
  "#FF9F1C",

  // extra fairy dust
  "#F15BB5",
  "#FFAFCC",
  "#FEEAFA",
]}


    />
  </div>
)}


{showGroup2Popup && (
  <motion.div
    className="fixed inset-0 z-[999999] bg-[#fffafb] flex items-center justify-center p-4 overflow-hidden"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    {/* ✨ Background Sparkles */}
    <div className="absolute inset-0 pointer-events-none">
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#ffd1dc_0%,_transparent_70%)] opacity-40 blur-[100px]" />
    </div>

    <motion.div 
      // Changed: Max height reduced to 92vh to ensure button visibility on all screens
      className="relative z-10 w-[95%] max-w-[420px] max-h-[92vh] bg-white/90 backdrop-blur-2xl rounded-[3rem] p-6 shadow-[0_20px_80px_rgba(253,164,175,0.2)] border border-white flex flex-col items-center justify-between"
      initial={{ scale: 0.95, y: 30 }}
      animate={{ scale: 1, y: 0 }}
    >
      
      {/* 🎞️ GIF CONTAINER - Shrunk height to pull everything up */}
      <div className="w-full h-[180px] md:h-[240px] relative mt-2 flex-shrink-0">
        <div className="absolute inset-0 bg-pink-50 rounded-[2rem] blur-xl opacity-30" />
        <AnimatePresence mode="wait">
          {partyGifs.map((gif, i) => (
             <GifSequencer key={i} gif={gif} index={i} total={partyGifs.length} />
          ))}
        </AnimatePresence>
      </div>

      {/* 💌 MESSAGE CENTER - Compact Spacing */}
      <div className="flex-1 flex flex-col justify-center items-center text-center w-full py-2">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-pink-400 mb-1 block">
            A New Chapter Begins
          </span>
          <h2 
            className="text-5xl md:text-7xl text-[#2D2424] leading-tight mb-2"
            style={{ fontFamily: "Dancing Script", fontWeight: 900 }}
          >
            Alizeh
          </h2>
        </motion.div>

        <motion.div 
          className="space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-[#5D4037] text-base md:text-xl font-medium leading-tight italic" style={{ fontFamily: "Nunito" }}>
            "No more chapters to revise. <br /> 
           You gave everything you had, <span className="text-pink-500 font-bold">even on the hard days</span> Now it’s your time to rest."
          </p>
          
          <div className="flex items-center justify-center gap-3 text-pink-200 py-1">
            <span className="text-sm">🌸</span>
            <div className="h-[1px] w-12 bg-pink-100" />
            <span className="text-sm">🌸</span>
          </div>

          <p className="text-[#8D6E63] text-[10px] md:text-xs opacity-90 leading-tight">
            You worked so hard. Now it's time to have fun yayyyyy 
          </p>
        </motion.div>
      </div>

      {/* 🥂 BOTTOM BUTTON - Pulled up with flex-shrink-0 */}
<motion.button
  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 182, 193, 0.4)" }}
  whileTap={{ scale: 0.95 }}
  onClick={() => setShowGroup2Popup(false)}
  className="relative w-full py-4 mt-4 mb-2 flex-shrink-0 group overflow-hidden"
>
  {/* ⚡ THE BACKGROUND: Glass + Gradient Border */}
  <div className="absolute inset-0 bg-[#D34E4E] rounded-2xl transition-all duration-300 group-hover:bg-[#da3c3c]" />
  
  {/* ✨ THE SHIMMER: Animated light ray that passes over the button */}
  <motion.div
    initial={{ x: "-100%" }}
    animate={{ x: "100%" }}
    transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: 1 }}
    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
  />

  {/* 🖋️ THE TEXT */}
  <span className="relative z-10 flex items-center justify-center gap-2 text-white font-black text-[11px] uppercase tracking-[0.3em]">
    Go Back
    <motion.span
      animate={{ rotate: [0, 15, -15, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      🥂
    </motion.span>
  </span>

  {/* 🌸 THE UNDER-GLOW: Appears on hover */}
  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-pink-400 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
</motion.button>
      
    </motion.div>
  </motion.div>
)}
      {/* 🌸 MAIN WEBSITE */}
      <div
        className="min-h-screen bg-pink-30 p-4 md:p-6 relative overflow-hidden"
        onClick={(e) => createStar(e)}
      >
        <FloatingHearts />

        <div className="relative z-10">
          <motion.h1
            className="text-3xl md:text-5xl text-[#D34E4E] font-bold text-center"
            style={{ fontFamily: "Dancing Script" }}
          >
            Hi Future CA Girl 💖🌸
          </motion.h1>

          <TypingMessage />
          <Stickers />
          <SurpriseCards />
          <ExamMotivation />
          <CuteLetter />
          <Timeline />
          <SendAHug />

          <p
            className="text-center mt-10 text-purple-700 text-lg md:text-xl"
            style={{ fontFamily: "Dancing Script" }}
          >
            {/* optional footer text */}
          </p>
        </div>
      </div>


    </>
  );
}


/* -------------------- FLOATING HEARTS -------------------- */

const FloatingHearts = () => {
  const heartImages = [heart1, heart2, heart3]; 
  const hearts = Array.from({ length: 35 });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {hearts.map((_, i) => {
        const img = heartImages[i % heartImages.length]; // rotate between 3 PNGs

        return (
          <motion.img
            key={i}
            src={img}
            className="absolute w-6 md:w-10 opacity-80"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${-40 - Math.random() * 50}px`,
            }}
            animate={{
              y: [-20, -(window.innerHeight + 2000)],
              opacity: [1, 0],
              rotate: [0, 15, -15, 0], // cute floating wobble
            }}
            transition={{
              duration: 10 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        );
      })}
    </div>
  );
};

/* -------------------- STARRY WISH BOARD -------------------- */

function createStar(e) {
  const star = document.createElement("div");
  star.innerText = "✨";
  star.style.position = "absolute";
  star.style.left = e.clientX + "px";
  star.style.top = e.clientY + "px";
  star.style.fontSize = "20px";
  star.style.pointerEvents = "none";
  star.style.animation = "fadeStar 1.2s forwards";

  document.body.appendChild(star);

  setTimeout(() => star.remove(), 1200);
}

/* Add animation globally */
const style = document.createElement("style");
style.innerHTML = `
@keyframes fadeStar {
  0% { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(2) translateY(-20px); }
}`;
document.head.appendChild(style);

/* -------------------- TYPING MESSAGE -------------------- */

const TypingMessage = () => {
  const text = "Cutuuu Alizehhh... your parents so proud of you 💗";
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplay(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 40);
  }, []);

  return (
<p
  className="text-center text-[#8B3A3A] text-lg md:text-xl mt-4 md:mt-6 px-4"
  style={{ fontFamily: "Dancing Script" }}

>
  {display}
</p>

  );
};

/* -------------------- CUTE STICKERS -------------------- */

const Stickers = () => {
  const urls = [panda1, panda3, panda2];

  return (
    <div className="flex gap-10 mt-8 mb-12 justify-center">
      {urls.map((src, i) => (
        <motion.img
          key={i}
          src={src}
          className="w-24 drop-shadow-lg"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 + i }}
        />
      ))}
    </div>
  );
};



/* -------------------- SURPRISE CARDS -------------------- */

const SurpriseCards = () => {
  const messages = [
    "You're the cutest hardworking girl ever 💕",
    "Your smile makes my day 🥺💗",
    "Your notes are cute, your handwriting is cute, YOU are cute 😭✨",
    "CA Inter is NOTHING in front of your strength ✨",
    "I believe in you more than anything 💖",
    "One day you’ll be CA Sayyed Aliza 😭💗",
    "Your future office is waiting for you, CA madam 💕💼",
    "One day your signature will be worth GOLD ✨💛",
    "You’re literally built for this CA journey 💗🔥",
    "Tax chapter can't tax your confidence 😭💗",
    "Your focus > all 6 CA subjects combined 😭💗",
    "One day clients will wait outside your cabin 💼💗",
    "Your parents would be proud of your effort 💗✨",
    "Future CA in progress… please stand back 😭💗",
  ];

  const [i, setI] = useState(0);

  return (
    <div className="flex flex-col items-center mt-6 md:mt-10">
      <motion.div
        className="
        relative overflow-hidden
        p-5 md:p-6 
        rounded-3xl 
        bg-white
        border-[#FDACAC]
        shadow-[0_8px_25px_rgba(255,180,200,0.45)]
        text-[#D34E4E]
        text-base md:text-lg 
        text-center 
        max-w-xs
      "
        style={{ fontFamily: "Dancing Script" }}
        key={i}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {/* ✨ PASTEL BUBBLE BG */}
        <div className="absolute -top-10 -left-10 w-24 h-24 bg-[#FD7979]/40 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#FFCDC9]/40 rounded-full blur-3xl opacity-40"></div>

        {messages[i]}
      </motion.div>

<button
  onClick={() => setI((i + 1) % messages.length)}
  className="
    mt-4
    px-8 py-3
    bg-[#FFE4EF]
    text-white
    rounded-full
    shadow-md
    text-base md:text-lg
    hover:scale-105
    active:scale-95
    transition-transform
  "
  style={{ fontFamily: "Nunito" }}
>
  Tap for Motivation 💞
</button>

    </div>
  );
};


/* -------------------- TIMELINE -------------------- */

const Timeline = () => {
  const steps = [
    {
      title: "CA Foundation (Done)",
      emoji: "📘",
      message:
        "Your CA journey didn’t just start with Foundation… it started way before that, back when you were in 9th and 10th, getting inspired by every CA and every aspirant you saw. 🌟 You passed Foundation like a queen 👑, even when nobody knew how many days you studied silently, how many times you couldn’t tell anyone that things weren’t working… but you still showed up. That’s your strength 💗.",
    },
    {
      title: "CA Inter (Now)",
      emoji: "📚✨",
      message:
        "This is where you are now, the hardest, heaviest phase. Long days, tired eyes, stress, pressure… but still you’re trying again and again. You once told your Ammi during FYBCOM exams, ‘Ab m thak gyi hu,’ and she said, ‘Abhi se? Abhi to shuruwat h.’ And look at you now… still fighting, still standing, still dreaming. That’s why I’m so proud of you 💕.",
    },
    {
      title: "Articleship (Soon)",
      emoji: "📝",
      message:
        "One day you’ll step into your Articleship, cute professional girl loading 😭💼. Your confidence will glow here, because you’re not average… you’re not weak… you’ve ALWAYS aimed high. You never settled for anything less than success, and that mindset will make you shine in every office you walk into ✨.",
    },
    {
      title: "CA Finals (Soon)",
      emoji: "🔥",
      message:
        "CA Finals look scary… but you are scarier 🔥. Every attempt, every failure, every tear, they’re all building a stronger version of you. You’ve always seen top ranks and big dreams, and trust me, this fire inside you will take you all the way. You’re built for this 💖.",
    },
    {
      title: "CA Sayyed Aliza",
      emoji: "💖🎓",
      message:
        "One day We’ll call you **CA Sayyed Aliza**… . And when that day comes, you’ll remember every moment you wanted to give up but didn’t. Your journey is not ordinary it’s powerful, emotional, and inspiring. You’ve carried pressure, expectations, and responsibility on your shoulders quietly… especially for your parents. You’ve always wanted to make them proud  and you will. All those late nights, silent breakdowns, hidden stress, and unstoppable effort… it will all come back to you as success. And I’ll be right here, witnessing your glow-up every step of the way 💕.",
    },
  ];

  const [selected, setSelected] = useState(null);

  return (
    <div className="mt-10 md:mt-16 max-w-sm md:max-w-md mx-auto px-2">
      <h2
        className="text-center text-2xl md:text-3xl text-pink-400 mb-4"
        style={{ fontFamily: "Nunito" }}
      >
        Your CA Journey 🌟
      </h2>

      <div className="space-y-3 md:space-y-4">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            className="
            relative overflow-hidden
            flex items-center gap-3 md:gap-4 
            p-4 md:p-5 
            bg-white 
            rounded-2xl 
            border-[#FDACAC]
            shadow-[0_6px_20px_rgba(253,121,121,0.35)]
            cursor-pointer 
          "
            style={{ fontFamily: "Nunito" }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelected(step)}
          >
            {/* 🫧 pastel glow */}
            <div className="absolute -top-8 right-0 w-24 h-24 bg-purple-200/40 blur-2xl"></div>
            <div className="absolute -bottom-8 left-0 w-20 h-20 bg-pink-200/40 blur-2xl"></div>

            <span className="text-2xl md:text-3xl">{step.emoji}</span>
            <span className="text-pink-400 text-base md:text-lg font-medium">
              {step.title}
            </span>
          </motion.div>
        ))}
      </div>

      {selected && (
        <motion.div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center p-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="bg-white p-5 md:p-6 rounded-3xl max-w-sm text-[#D34E4E] shadow-xl border-2 border-[#FFE4EF]"
            style={{ fontFamily: "Nunito", lineHeight: "1.6" }}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <h3 className="text-2xl md:text-3xl mb-2 text-center">
              {selected.emoji} {selected.title}
            </h3>
            <p className="text-base md:text-lg mb-6">{selected.message}</p>

            <button
              onClick={() => setSelected(null)}
              className="px-5 py-2 bg-[#FFE4EF] text-white rounded-full shadow-md text-sm md:text-base block mx-auto"
              style={{ fontFamily: "Nunito" }}
            >
              Close 💞
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

/* -------------------- EXAM MOTIVATION -------------------- */
const ExamMotivation = () => {
  useEffect(() => {
  document.body.style.scrollBehavior = "auto";
}, []);

  const [openKey, setOpenKey] = useState(null);
  const [costStep, setCostStep] = useState(0);
const [stressText, setStressText] = useState("");
const [isShredded, setIsShredded] = useState(false);
const [fmStep, setFmStep] = useState(0); // 0: Input, 1: Message
const [isExploding, setIsExploding] = useState(false);
  const group1 = [
    {
      paper: "Advanced Accounting",
      date: "6 Jan 2026",
      emoji: "📘✨",
      enabled: true, 
      msg: `Okay onggg, it's finally exam week.
It's about staying calm and focused, aluuu 💗
Advanced Accounting is lengthy, yes :/ but you've practiced enough for this - more than you think.

I don't know shit about AA honestly 😭
but what I do know is
you've already done the hard part while studying.
Today is just about showing it on paper.

Don't rush. 
Don't panic.
And please don't doubt yourself mid-paper.

Jo padha hai, whi likhna.
Clean. Clear. Simple.

I know you've worked hard for this.
I know you've stressed over this.
And I know you're capable of handling today. 💗

Finish the paper, walk out,
and be proud of yourself, 
and remember who you are
CA Aliza Sayyed🌸

And one last thing
All the veryyyyyyyyyy bestttttttttttt alizehhhhhhhhh <3
`
    },
    {
      paper: "Corporate & Other Laws",
      date: "8 Jan 2026",
      emoji: "⚖️💼",
      enabled: true,
      msg: `I hope alu your Advanced Accounting paper went really, really well today. I honestly prayed so hard for you alizehhh, more than you know. From the moment you left for the exam till the time it ended, you were constantly in my duas alizehhh. 🤍

Now, please let your mind rest a little. You deserve to breathe, to relax your shoulders, back, hands, eyes and brain to feel lighter. AA is done now. yayyyyyyy.

Next is Law ahhhh. A fresh paper. A fresh chance. I dont know anything about this tooo omzi toh jo aata hai bhar dena paper m alizehhhh. Do well in this exam too and attempt whole paper aluuuu.

And remember this always, you are not alone in this journey alizehhh. I’m here, cheering for you, praying for you, believing in you… 💗You’ve got this. More than you think. 🌷

I’m wishing you the biggest, warmest all the best for this paper. I’ll be praying for you again for clarity, confidence, and peace in that exam hall. No matter how the paper comes, remember this you are prepared, you are capable, and you are never alone in this.
`
    },
    {
      paper: "Taxation",
      date: "10 Jan 2026",
      emoji: "🧾🔥",
      image: taxWarrior, 
      enabled: true,
      msg: `OMZIIIII OKAYYY. LAW IS FINALLY DONE 😭🎉 Like fr fr. take a breath, you survived that paper. LET’S GOOO!!!

Nowwww it’s Paper 3 TAX.AND YES, THIS IS THE LAST PAPER OF GROUP 1. Like actually the LAST ONE 😭🤍 After this, Group 1 is DONE DONE. Can you believe that???

Okay but listen… this is Tax. The same Tax you’ve seen a hundred times, stressed over a hundred times, but dw this will you will beat its ASS aluuu hehe.
It’s annoying, yes. It’s long, yes. But it’s not stronger than you samjhi kyaaaa.

I know you’re tired. I know this phase is heavy. But you’re still standing, still trying, still pushing and that says everything.

All the best for Tax Alizehhhh💗I’m rooting for you, praying for you, and believing in you. always.
`
    }
  ];

  const group2 = [
    {
      paper: "Cost & Management Accounting",
      date: "12 Jan 2026",
      emoji: "📊💗",
      enabled: true
    },
    {
      paper: "FM & SM",
      date: "17 Jan 2026",
      emoji: "📈🚀",
      enabled: true
    },
    {
      paper: "Auditing & Ethics",
      date: "19 Jan 2026",
      emoji: "📝🌸",
      enabled: true,
      msg: "All the best for Auditing & Ethics."
    }
  ];

  const renderGroup = (group, glowClass, lockedTextColor) =>
    group.map((p, i) => {
      const key = `${p.paper}-${i}`;
      const isOpen = openKey === key;

      return (
        <motion.div
          key={key}
          className={`relative overflow-hidden rounded-3xl p-5 border shadow-[0_8px_25px_rgba(0,0,0,0.1)]
            ${p.enabled ? "bg-white cursor-pointer" : "bg-gray-50 opacity-60 cursor-not-allowed"}`}
          style={{ fontFamily: "Nunito" }}
          onClick={() => {
            if (p.enabled) {
              setOpenKey(isOpen ? null : key);
              setCostStep(0);
              setFmStep(0);
              setIsShredded(false);
              setIsExploding(false);
              setStressText("");
            }
          }}
        >
          <div className={`absolute -top-10 -left-10 w-24 h-24 ${glowClass} rounded-full blur-3xl opacity-30`} />

          <h4 className="text-lg text-[#D34E4E] font-semibold">
            {p.emoji} {p.paper}
          </h4>
          <p className="text-sm text-[#D34E4E] mt-1">Exam Date: {p.date}</p>

          {/* NORMAL MESSAGE */}
          {p.msg && isOpen && p.paper !== "Cost & Management Accounting" && (
            <p className="mt-4 text-sm text-[#D34E4E] whitespace-pre-line text-center">
              {p.msg}
            </p>
          )}

          {/* TAX IMAGE */}
          {p.paper === "Taxation" && isOpen && (
            <motion.img
              src={taxWarrior}
              className="mx-auto mt-5 w-56 drop-shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            />
          )}

{/* COSTING INTERACTIVE */}
{p.paper === "Cost & Management Accounting" && isOpen && (
  <div className="mt-4 text-center text-[#D34E4E]">
    {/* STEP 0 */}
    {costStep === 0 && (
      <>
        <p className="text-sm">
        Group 1 didn’t just end hehe it closed a chapter you worked really hard for alizehhh.
      Every late night, every doubt, every “bas ek aur question” finally led you here.
      That matters more than you realise.
      <br /><br />
      Now Group 2 begins, not as pressure,
      but as proof that you’re still trying hard, still moving forward,
      and still capable, even on tired days.
        </p>
        <p className="text-sm mt-1">
          wanna see what you look like rn hehe?
        </p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setCostStep(1);
          }}
          className="mt-3 px-4 py-2 bg-[#FFE4EF] rounded-full"
        >
          show me 😭
        </button>
      </>
    )}

    {/* STEP 1 – FIRST GIF */}
    {costStep === 1 && (
      <>
        <img src={tired} className="mx-auto mt-4 w-44" />
        <p className="mt-2 text-sm">
          yeah… that’s you okay??? don’t argue.
        </p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setCostStep(2);
          }}
          className="mt-3 px-4 py-2 bg-[#FFE4EF] rounded-full"
        >
          okay next
        </button>
      </>
    )}

    {/* STEP 2 – MOOD QUESTION */}
    {costStep === 2 && (
      <>
        <p className="text-sm mt-3">
          okay but tell me… what’s the mood really?
        </p>

        <div className="mt-3 flex flex-col gap-2 items-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setCostStep(3);
            }}
            className="px-4 py-2 bg-[#FFE4EF] rounded-full"
          >
            still standing 🫶
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setCostStep(4);
            }}
            className="px-4 py-2 bg-[#FFE4EF] rounded-full"
          >
            barely alive 💀
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setCostStep(5);
            }}
            className="px-4 py-2 bg-[#FFE4EF] rounded-full"
          >
            locked in 😤
          </button>
        </div>
      </>
    )}

    {/* STEP 3–5 – RESPONSE GIF + MOVE TO CLOSURE */}
 {(costStep === 3 || costStep === 4 || costStep === 5) && (
  <>

    <img
      src={
        costStep === 3
          ? standing
          : costStep === 4
          ? barely
          : locked
      }
      className="mx-auto mt-4 w-44"
    />
        {costStep === 3 && (
      <p className="text-center text-[#D34E4E] text-sm mb-2">
        Really??? Nah fr, you’re standing like this is light work. Main character energy only 😻
      </p>
    )}

    {costStep === 4 && (
      <p className="text-center text-[#D34E4E] text-sm mb-2">
        Barely alive but still dangerous. Don’t underestimate her 😹
      </p>
    )}

    {costStep === 5 && (
      <p className="text-center text-[#D34E4E] text-sm mb-2">
        Still studying like it’s day one. I see that focus and I’m proud of you 😼
      </p>
    )}


    <button
      onClick={(e) => {
        e.stopPropagation();
        setCostStep(6);
      }}
      className="mt-3 px-4 py-2 bg-[#FFE4EF] rounded-full"
    >
      okay 🫂
    </button>
  </>
)}


    {/* STEP 6  */}
    {costStep === 6 && (
      <>
<p className="mt-4 text-sm leading-relaxed">
  hehe this was something special for my alu,
  because those normal text motivations were enough till Group 1 ah 🤍  
  this is Group 2 now. The first paper,
  and I know you must be tired, nervous, and exhausted.
  <br /><br />
  but don’t worry alu.
  just a few more days,
  and after that… no more of this phase.
  just relief, rest, and peace waiting for you.
  <br /><br />
  idk shit about this Costing subject either 😭
  but what I *do* know is that you’ve studied hard.
  and inshaAllah, Costing will go good too.
  <br /><br />
  finally… all the really really really best for Group 2 alizehhhh 💗  
  and always remember this ↓
</p>

        {/* MOTIVATION GIF (YOU CAN CHANGE THIS) */}
        <img
          src={youcan}
          className="mx-auto mt-4 w-90"
        />
      </>
    )}
  </div>
)}

{p.paper === "FM & SM" && isOpen && (
<div className="mt-4 text-center">
  

    <AnimatePresence mode="wait">
      {fmStep === 0 ? (
        <motion.div key="stage-input">
          {!isExploding ? (
            <motion.div exit={{ opacity: 0 }}>
              <p className="text-[#D34E4E] text-sm mb-6 leading-relaxed ">
                Thinking of you, Alizeh :/ I know how much pain that Costing prep caused you, but you faced it head-on. Ah ik last night, moment when you felt like losing hope were so tough...ik... But the hardest part is over. Only two more to go until you're finally free! So proud of you my alizeh<br /><br />
                Well its time for FM and SM ah but dw we are not going to talk about this now. Rn what important is your HEALTH🌻 So please take care of it  <br /><br />
                Aluuu, lemme know one thing that’s been bothering you or messing with your head today??
              </p>

              <div className="relative">
                <input
                  type="text"
                  value={stressText}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => setStressText(e.target.value)}
                  placeholder="e.g. stress, headache"
                  className="w-full bg-transparent border-b-2 border-[#D34E4E]/30 p-4 text-xl text-[#D34E4E] text-center outline-none focus:border-[#D34E4E] transition-all"
                />
                
                {stressText && (
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsExploding(true);
                      setTimeout(() => {
                        setFmStep(1);
                        setIsExploding(false);
                      }, 3000); // Give it 3 seconds for the shooting sequence
                    }}
                    className="mt-10 px-10 py-4 bg-[#D34E4E] text-white rounded-full font-black tracking-[0.2em] shadow-xl"
                  >
                    ELIMINATE 🎯
                  </motion.button>
                )}
              </div>
            </motion.div>
          ) : (
            /* THE SIDE-BY-SIDE GUN RANGE */
            <div className="relative h-48 flex items-center justify-between px-4 overflow-hidden border-2 border-[#FFE4EF] rounded-3xl bg-white/30">
              
              {/* THE GUN (Custom SVG in Theme Color) */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="w-1/4"
              >
                <motion.svg 
                  viewBox="0 0 100 60" 
                  fill="#D34E4E"
                  animate={{ 
                    x: [0, -10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ repeat: 8, duration: 0.35 }}
                >
                  <path d="M10 20h60v15H10zM65 20l15 5v5l-15 5zM20 35l-5 15h10l5-15z" />
                  <circle cx="75" cy="27.5" r="3" fill="white" />
                </motion.svg>
              </motion.div>

              {/* THE BULLETS (Lines flying across) */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(50)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute h-[2px] w-4 bg-[#D34E4E]"
                    style={{ top: '50%', left: '25%' }}
                    initial={{ x: 0, opacity: 0 }}
                    animate={{ 
                      x: [0, 200], 
                      opacity: [0, 1, 0] 
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 0.35, 
                      delay: i * 0.35,
                      ease: "linear"
                    }}
                  />
                ))}
              </div>

              {/* THE TARGET TEXT */}
              <motion.div
                className="w-2/3 text-right"
                animate={{ 
                  x: [0, 5, 0],
                  filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"]
                }}
                transition={{ repeat: Infinity, duration: 0.35 }}
              >
                <span className="text-xl font-black text-[#D34E4E] uppercase break-all  decoration-white/50">
                  {stressText}
                </span>
                <div className="flex justify-end gap-1 mt-1">
                   {[...Array(3)].map((_, i) => (
                     <motion.div 
                        key={i}
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ repeat: Infinity, duration: 0.2, delay: i * 0.1 }}
                        className="w-1 h-1 bg-[#D34E4E] rounded-full" 
                     />
                   ))}
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>
      ) : (
        /* THE ORIGINAL MESSAGE CONTENT */

<motion.div
  key="stage-result"
  initial={{ opacity: 0, filter: "blur(20px)" }}
  animate={{ opacity: 1, filter: "blur(0px)" }}
  transition={{ duration: 1 }}
  className="relative py-6"
>
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        animate={{ y: [-20, 20], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 3 + i, repeat: Infinity }}
        className="absolute text-2xl"
        style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
      >✨</motion.div>
    ))}
  </div>

  <motion.h2 className="text-3xl font-black text-[#D34E4E] uppercase mb-6 tracking-tight text-center">
    Yayyy no more {stressText}!!!
  </motion.h2>

  <div className="text-[#D34E4E] text-sm space-y-4 leading-relaxed px-4 text-center">
    <p className="font-bold">Alizeh, look at how far you've come.</p>
    <p>
     Finally, it’s your second-to-last exam! I know you must be so, so tired by now. Your brain, your body, everythin, but please don't worry, I’m right here with you. Just one more push for FM & SM and you’re almost at the finish line. I’m so proud of how you’ve handled everything so far. You're so close now Alizehhh💗.
    </p>
    <p className="italic"> 
      The thing you just typed? It doesn't exist in your future okayyy? Now focus on your studies, and leave results on ALLAH🤍
    </p>
  </div>

  <div className="text-center">
    <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
        className="mt-8 inline-block p-1 rounded-full bg-gradient-to-tr from-pink-300 to-[#D34E4E]"
    >
        <div className="bg-white px-6 py-2 rounded-full">
        <span className="text-xs font-bold text-[#D34E4E]">CA ALIZA SAYYED — LOADING 99%</span>
        </div>
    </motion.div>
  </div>

  <p className="mt-8 text-[10px] uppercase tracking-widest opacity-50 text-[#D34E4E] text-center">
    Go finish what you started. I've cleared {stressText} out of your way.
  </p>

  {/* NEW SIDE-BY-SIDE GIFS ADDED HERE */}
  <div className="mt-6 flex justify-center gap-7 px-2">
    <img 
      src={kill} 
      alt="I killed the stress" 
      className="w-1/2  " 
    />
  </div>
</motion.div>
      )}
    </AnimatePresence>
  </div>
)}


          {!p.enabled && (
            <p className={`mt-3 text-xs italic ${lockedTextColor}`}>
              This one will open sooooonnnnnn aluuuu 💗
            </p>
          )}
        </motion.div>
      );
    });

  return (
    <div className="mt-20 max-w-md mx-auto px-3">
      <h1
        className="text-center text-3xl text-[#D34E4E] mb-6"
        style={{ fontFamily: "Dancing Script" }}
      >
        Few Words for These Days 💌
      </h1>

      <div className="space-y-6">
        {renderGroup(group1, "bg-pink-200", "text-gray-400")}
        {renderGroup(group2, "bg-purple-200", "text-gray-400")}
      </div>
    </div>
  );
};





/* -------------------- LETTER -------------------- */

const CuteLetter = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-center mt-16 mb-24 px-3">
      {!open && (
        <motion.button
          onClick={() => setOpen(true)}
          className="px-8 py-3 bg-[#FFE4EF] text-white rounded-full shadow-md text-lg md:text-xl"
          style={{ fontFamily: "Nunito" }}
          whileHover={{ scale: 1.05 }}
        >
          Open Cute Letter 💌
        </motion.button>
      )}

      {open && (
        <motion.div
          className="p-5 md:p-6 bg-white rounded-3xl shadow-xl border-2 border-[#FFE4EF] max-w-sm md:max-w-lg mx-auto text-lg md:text-xl text-[#D34E4E]"
          style={{ fontFamily: "Nunito", lineHeight: "1.7" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
   Sayyed Alizehhh 💗 <br />
You have no idea how proud I am of you.  
Not because of marks.  
Not because of ranks.  
But how hard you try every single day. 🌸<br /><br />

You’ve been knocked down so many times…  
more than people even know.  
You’ve cried alone, studied with shaking hands,  
woke up tired, slept tired,  
and still
you got up again. Every. Single. Time. 💖<br /><br />

Do you know how rare that is?  
Most people give up.  
But you…  
you fight again and again, even when it hurts.  
Even when things feel impossible.  
Even when you feel alone. 🌙💗<br /><br />

And baby… you’re not alone. Not anymore.<br /><br />

I’m with you.  
In your breakdowns.  
In your stress.  
In your long nights.  
In your early mornings.  
In every small win.  
In every scary moment.  
I’m ALWAYS here. Holding your hand. 💞<br /><br />

CA Inter is not bigger than you.  
Your past attempts are not your future.  
Your failures don’t define you 
your strength does. ✨<br /><br />

And you have something stronger than talent,  
stronger than luck,  
stronger than anything…  
you have **consistency**,  
you have **patience**,  
you have **a fire inside you**  
that doesn’t die. 🔥<br /><br />

One day…  
maybe soon, maybe later  
but ONE DAY 
you will see “Pass” next to your name.  
And that day, the world will clap,  
but I will say:  
“I always knew she could.” 💗<br /><br />

Because I see you.  
Your effort.  
Your tears.  
Your heart.  
Your never-giving-up spirit.  
Your desire to make your family proud.  
Your desire to make yourself proud.  
Everything. 🌸<br /><br />

So listen to me carefully, my love 
**You are not failing.  
You are learning.  
You are growing.  
You are becoming unstoppable.** ✨<br /><br />

And no matter how hard this journey gets…  
I’m right here.  
Cheering for you,  
supporting you,  
hugging you,  
loving you always. 💗🌷

        </motion.div>
      )}
    </div>
  );
};

/* -------------------- MAKE A WISH -------------------- */



/* -------------------- SEND A HUG -------------------- */

const SendAHug = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="mt-20 text-center">
      <button
        onClick={() => setShow(true)}
        className="px-8 py-3 bg-[#FFE4EF] text-white rounded-full shadow-md text-lg"
        style={{ fontFamily: "Nunito" }}
      >
        You want a hug??? 🤗🐼
      </button>

      {show && (
        <motion.div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.img
            src={hug}
            className="w-48 md:w-96 drop-shadow-xl"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          />

          <button
            onClick={() => setShow(false)}
            className="absolute bottom-10 px-6 py-2 bg-white rounded-full shadow-md text-purple-600"
            style={{ fontFamily: "Nunito" }}
          >
            Close Hug 💗
          </button>
        </motion.div>
      )}
    </div>
  );
};
