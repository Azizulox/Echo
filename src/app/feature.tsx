"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

import {
  CursorArrowRaysIcon,
  HeartIcon,
  LightBulbIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";

const FEATURES = [
  {
    icon: CursorArrowRaysIcon,
    title: "Websayt ozidan yordamlashing",
    children:
      "Siz ekologiyaga websayt ozidan yordamlashing",
  },
  {
    icon: HeartIcon,
    title: "Hayvonlarimiz",
    children:
      "O'zingizga farqi yoq bolsa sizning bolachaqa va kuchik va mushiklaringiz haqida oylang",
  },
  {
    icon: LockClosedIcon,
    title: "Hayvonlarni qutqaring",
    children:
      "Bazi hayvonlar kosmetik mahsulotlar uchun tekshirishlarida ishlatiladi",
  },
  {
    icon: LightBulbIcon,
    title: "Elektra energiya uchun ",
    children:
      "Tok va uydagi svet uchun shunchadan shuncha qazilmalar ketqazilmoqda",
  },
];

export function Features() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          Tabiatni saqlaylik
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Ahlatni qayta sihlashda yordam bering
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 "
        >
          Ahlatni mahsus joylarga olib boring va ularni zavodlarga soting
        </Typography>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Features;
