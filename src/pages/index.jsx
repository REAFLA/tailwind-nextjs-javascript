import Head from "next/head";
import React from "react";

import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button className="btn">Hello daisyUI</button>

      <div className="space-y-4">
        <div className="w-96 bg-white shadow rounded">w-96</div>
        <div className="w-80 bg-white shadow rounded">w-80</div>
        <div className="w-72 bg-white shadow rounded">w-72</div>
        <div className="w-64 bg-white shadow rounded">w-64</div>
        <div className="w-60 bg-white shadow rounded">w-60</div>
        <div className="w-56 bg-white shadow rounded">w-56</div>
        <div className="w-52 bg-white shadow rounded">w-52</div>
        <div className="w-48 bg-white shadow rounded">w-48</div>
      </div>

      <div className="grid grid-cols-10 gap-2">
        <div className="bg-sky-50 aspect-square"></div>
        <div className="bg-sky-100 aspect-square"></div>
        <div className="bg-sky-200 aspect-square"></div>
        <div className="bg-sky-300 aspect-square"></div>
        <div className="bg-sky-400 aspect-square"></div>
        <div className="bg-sky-500 aspect-square"></div>
        <div className="bg-sky-600 aspect-square"></div>
        <div className="bg-sky-700 aspect-square"></div>
        <div className="bg-sky-800 aspect-square"></div>
        <div className="bg-sky-900 aspect-square"></div>
      </div>
      <div className="grid grid-cols-10 gap-2">
        <div className="bg-blue-50 aspect-square"></div>
        <div className="bg-blue-100 aspect-square"></div>
        <div className="bg-blue-200 aspect-square"></div>
        <div className="bg-blue-300 aspect-square"></div>
        <div className="bg-blue-400 aspect-square"></div>
        <div className="bg-blue-500 aspect-square"></div>
        <div className="bg-blue-600 aspect-square"></div>
        <div className="bg-blue-700 aspect-square"></div>
        <div className="bg-blue-800 aspect-square"></div>
        <div className="bg-blue-900 aspect-square"></div>
      </div>
      <div className="grid grid-cols-10 gap-2">
        <div className="bg-indigo-50 aspect-square"></div>
        <div className="bg-indigo-100 aspect-square"></div>
        <div className="bg-indigo-200 aspect-square"></div>
        <div className="bg-indigo-300 aspect-square"></div>
        <div className="bg-indigo-400 aspect-square"></div>
        <div className="bg-indigo-500 aspect-square"></div>
        <div className="bg-indigo-600 aspect-square"></div>
        <div className="bg-indigo-700 aspect-square"></div>
        <div className="bg-indigo-800 aspect-square"></div>
        <div className="bg-indigo-900 aspect-square"></div>
      </div>
      <div className="grid grid-cols-10 gap-2">
        <div className="bg-violet-50 aspect-square"></div>
        <div className="bg-violet-100 aspect-square"></div>
        <div className="bg-violet-200 aspect-square"></div>
        <div className="bg-violet-300 aspect-square"></div>
        <div className="bg-violet-400 aspect-square"></div>
        <div className="bg-violet-500 aspect-square"></div>
        <div className="bg-violet-600 aspect-square"></div>
        <div className="bg-violet-700 aspect-square"></div>
        <div className="bg-violet-800 aspect-square"></div>
        <div className="bg-violet-900 aspect-square"></div>
      </div>

      <div className="space-y-5">
        <div className="p-3 bg-white shadow rounded-lg">
          <h3 className="text-xs border-b">font-sans</h3>
          <p className="font-sans">
            The quick brown fox jumps over the lazy dog.
          </p>
        </div>
        <div className="p-3 bg-white shadow rounded-lg">
          <h3 className="text-xs border-b">font-serif</h3>
          <p className="font-serif">
            The quick brown fox jumps over the lazy dog.
          </p>
        </div>
        <div className="p-3 bg-white shadow rounded-lg">
          <h3 className="text-xs border-b">font-mono</h3>
          <p className="font-mono">
            The quick brown fox jumps over the lazy dog.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="shadow-sm bg-white rounded-lg">shadow-sm</div>
        <div className="shadow bg-white rounded-lg">shadow</div>
        <div className="shadow-md bg-white rounded-lg">shadow-md</div>
        <div className="shadow-lg bg-white rounded-lg">shadow-lg</div>
        <div className="shadow-xl bg-white rounded-lg">shadow-xl</div>
        <div className="shadow-2xl bg-white rounded-lg">shadow-2xl</div>
      </div>
    </div>
  );
}
