import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import panda1 from "./panda.png";
import panda2 from "./panda2.png";
import panda3 from "./panda3.png";
import hug from "./hug.gif";
import heart1 from "./heart1.png";
import heart2 from "./heart2.png";
import heart3 from "./heart3.png";


export default function App() {

  return (
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
          
        </p>
      </div>
    </div>
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
        className="mt-4 px-5 py-2 bg-[#FFE4EF] text-white rounded-full shadow-md text-sm md:text-base"
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
        "Your CA journey didn’t just start with Foundation… it started way before that — back when you were in 9th and 10th, getting inspired by every CA and every aspirant you saw. 🌟 You passed Foundation like a queen 👑, even when nobody knew how many days you studied silently, how many times you couldn’t tell anyone that things weren’t working… but you still showed up. That’s your strength 💗.",
    },
    {
      title: "CA Inter (Now)",
      emoji: "📚✨",
      message:
        "This is where you are now — the hardest, heaviest phase. Long days, tired eyes, stress, pressure… but still you’re trying again and again. You once told your Ammi during FYBCOM exams, ‘Ab m thak gyi hu,’ and she said, ‘Abhi se? Abhi to shuruwat h.’ And look at you now… still fighting, still standing, still dreaming. That’s why I’m so proud of you 💕.",
    },
    {
      title: "Articleship (Soon)",
      emoji: "📝",
      message:
        "One day you’ll step into your Articleship — cute professional girl loading 😭💼. Your confidence will glow here, because you’re not average… you’re not weak… you’ve ALWAYS aimed high. You never settled for anything less than success, and that mindset will make you shine in every office you walk into ✨.",
    },
    {
      title: "CA Finals (Soon)",
      emoji: "🔥",
      message:
        "CA Finals look scary… but you are scarier 🔥. Every attempt, every failure, every tear — they’re all building a stronger version of you. You’ve always seen top ranks and big dreams, and trust me, this fire inside you will take you all the way. You’re built for this 💖.",
    },
    {
      title: "CA Sayyed Aliza",
      emoji: "💖🎓",
      message:
        "One day We’ll call you **CA Sayyed Aliza**… . And when that day comes, you’ll remember every moment you wanted to give up but didn’t. Your journey is not ordinary — it’s powerful, emotional, and inspiring. You’ve carried pressure, expectations, and responsibility on your shoulders quietly… especially for your parents. You’ve always wanted to make them proud — and you will. All those late nights, silent breakdowns, hidden stress, and unstoppable effort… it will all come back to you as success. And I’ll be right here, witnessing your glow-up every step of the way 💕.",
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
  const [openKey, setOpenKey] = useState(null);

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
CA Aliza Sayyed🌸`

    },
    {
      paper: "Corporate & Other Laws",
      date: "8 Jan 2026",
      emoji: "⚖️💼",
      enabled: false,
      msg:
        "Law paper mein speed nahi, clarity ka game hota hai. Jab yeh open hoga, bas yaad rakhna — question ko samajhna aadha answer hota hai. Overthinking mat karna ✨.",
    },
    {
      paper: "Taxation",
      date: "10 Jan 2026",
      emoji: "🧾🔥",
      enabled: false,
      msg:
        "Tax start hone se pehle heavy lagta hai, phir flow aa jaata hai. Ek question, ek step — bas wahi karna. Tu handle kar sakti hai, jaise hamesha karti hai 💼💗.",
    },
  ];

  const group2 = [
    {
      paper: "Cost & Management Accounting",
      date: "12 Jan 2026",
      emoji: "📊💗",
      enabled: false,
      msg:
        "Costing mein final answer se zyada process matter karta hai. Steps clean rakhna, working neat likhna. Agar atak bhi gayi, panic mat karna — marks milte hain ✨.",
    },
    {
      paper: "FM & SM",
      date: "17 Jan 2026",
      emoji: "📈🚀",
      enabled: false,
      msg:
        "Last paper energy drain karega, par relief bhi paas hoga. FM mein patience, SM mein structure — bas yahi yaad rakhna. End tak strong rehna, bas thoda sa aur 💖.",
    },
        {
      paper: "Auditing & Ethics",
      date: "19 Jan 2026",
      emoji: "📝🌸",
      enabled: false,
      msg:
        "Audit shor nahi karta, calm rehne walon ko reward karta hai. Short points, headings, simple language — bas yahi kaafi hai. Ethics toh waise bhi tu naturally samajhti hai 💗.",
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
            ${
              p.enabled
                ? "bg-white cursor-pointer"
                : "bg-gray-50 opacity-60 cursor-not-allowed"
            }
          `}
          style={{ fontFamily: "Nunito" }}

          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          onClick={() => {
            if (p.enabled) {
              setOpenKey(isOpen ? null : key);
            }
          }}
        >
          {/* glow */}
          <div className={`absolute -top-10 -left-10 w-24 h-24 ${glowClass} rounded-full blur-3xl opacity-30`} />

          {/* header */}
          <div className="flex justify-between items-center">
            <h4 className="text-lg text-[#D34E4E] font-semibold">
              {p.emoji} {p.paper}
            </h4>
            <span className="text-sm text-[#D34E4E]">
              {p.enabled ? (isOpen ? "▲" : "▼") : "🔒"}
            </span>
          </div>

          <p className="text-sm text-[#D34E4E] mt-1">
            Exam Date: {p.date}
          </p>

          {/* message */}
{p.enabled && isOpen && (
  <motion.div
    className="relative mt-4 p-4 rounded-2xl overflow-hidden"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    

    <p className="relative z-10 text-sm text-[#D34E4E] leading-relaxed whitespace-pre-line text-center ">
      {p.msg}
    </p>
  </motion.div>
)}


          {/* locked note */}
          {!p.enabled && (
            <p
              className={`mt-3 text-xs italic ${lockedTextColor}`}
            >
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

      {/* GROUP I */}
      <div className="mb-10">

        <div className="space-y-4">
          {renderGroup(group1, "bg-pink-200", "text-gray-400")}
        </div>
      </div>

      {/* GROUP II */}
      <div>
        <div className="space-y-4">
          {renderGroup(group2, "bg-purple-200", "text-gray-400")}
        </div>
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
and still —  
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
Your failures don’t define you —  
your strength does. ✨<br /><br />

And you have something stronger than talent,  
stronger than luck,  
stronger than anything…  
you have **consistency**,  
you have **patience**,  
you have **a fire inside you**  
that doesn’t die. 🔥<br /><br />

One day…  
maybe soon, maybe later —  
but ONE DAY —  
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

So listen to me carefully, my love —  
**You are not failing.  
You are learning.  
You are growing.  
You are becoming unstoppable.** ✨<br /><br />

And no matter how hard this journey gets…  
I’m right here.  
Cheering for you,  
supporting you,  
hugging you,  
loving you — always. 💗🌷

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
