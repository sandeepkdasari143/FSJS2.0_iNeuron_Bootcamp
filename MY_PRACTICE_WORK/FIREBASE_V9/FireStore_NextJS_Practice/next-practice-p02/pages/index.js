import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useRef } from "react";

import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const router = useRouter();

  const users = [
    {
      id: "1234",
      email: "sandeepkumar25820@gmail.com",
      password: "12345",
    },

    {
      id: "5678",
      email: "sandeepkumar0100110@gmail.com",
      password: "12345",
    },

    {
      id: "9101112",
      email: "sandeepkumar0000@gmail.com",
      password: "12345",
    },
  ];

  const [userEmail, setuserEmail] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const buttonRef = useRef();
  const uid = uuidv4();
  // const usersRef = collection(db, 'users');

  const handleClick = async (e) => {
    e.preventDefault();
    if (
      users.map((email) => {
        userEmail === email;
      }) &&
      userPassword === users[0].password
    ) {
      setDoc(doc(db, 'users', uid), {
        email: userEmail,
        password: userPassword
      }).then(() => {
        router.push({
          pathname: "/profile",
          query: {
            uid,
          },
        });
      }
      )
      return;
    }

    buttonRef.current.style.background = "white";
    buttonRef.current.style.color = "black";
    buttonRef.current.classList.add("rounded-full");
    buttonRef.current.classList.add("p-3");
    console.log("Wrong Input");
  };

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <form
        onSubmit={handleClick}
        className="flex flex-col space-y-5 border-4 p-5 border-white w-3/4"
      >
        <p className="text-center text-xl mb-3 font-semibold text-white">
          LogIn Form
        </p>

        <input
          className="input"
          type="email"
          onChange={(e) => {
            setuserEmail(e.target.value);
          }}
          placeholder="Email"
          required
        />

        <input
          className="input"
          type="password"
          onChange={(e) => {
            setuserPassword(e.target.value);
          }}
          placeholder="Password"
          required
        />

        <button ref={buttonRef} type="submit">
          LogIn
        </button>
      </form>
    </div>
  );
}
