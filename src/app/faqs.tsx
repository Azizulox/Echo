"use client";

import React from "react";
import { Typography, Card } from "@material-tailwind/react";

const FAQS = [
  {
    title: "Qanaqib boshliman?",
    desc: "Bizning android va ios telefon app dan",
  },
  {
    title: "Bu endi tekinmi?",
    desc: "Ha , biz faqatgina 1 - 2 ming somni siz qayta ishlagan plastikdan olamiz.",
  },
  {
    title: "Nme endi man siladan topishim kk?",
    desc: "Hohlasangiz kochadan qidirib toping. Biz faqat oson roq qilmoqchimiz",
  },
];

export function Faqs() {
  return (
    <section className="px-8 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center">
          <Typography variant="h1" color="blue-gray" className="mb-4">
            Frequently asked questions
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 !text-gray-500 lg:w-3/5"
          >
            A lot of people don&apos;t appreciate the moment until it&apos;s
            passed. I&apos;m not trying my hardest, and I&apos;m not trying to
            do
          </Typography>
        </div>

        <div className="grid gap-20 md:grid-cols-1 lg:grid-cols-3">
          {FAQS.map(({ title, desc }) => (
            <Card key={title} shadow={false} color="transparent">
              <Typography color="blue-gray" className="pb-6" variant="h4">
                {title}
              </Typography>
              <div className="pt-2">
                <Typography className="font-normal !text-gray-500">
                  {desc}
                </Typography>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;
