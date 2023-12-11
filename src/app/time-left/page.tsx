"use client";
import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { TimerContainer } from "@/components/TimerContainer";

const TimeLeft: NextPage = () => {
  const [time, setTime] = useState<number>(0);
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const timeToDays = 60 * 60 * 24 * 1000;

  let countDownDate =
    new Date("2024-01-08T09:00:00.000+0300").getTime() + timeToDays;

  useEffect(() => {
    var updateTime = setInterval(() => {
      var now = new Date().getTime();

      var difference = countDownDate - now;

      var newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      var newHours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var newMinutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      var newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);

      if (difference <= 0) {
        clearInterval(updateTime);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    });

    return () => {
      clearInterval(updateTime);
    };
  }, [time]);

  return (
    <div className="flex min-h-screen flex-col items-center bg-[#1e1f29]">
      <Head>
        <title>Launch Countdown Timer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TimerContainer
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    </div>
  );
};

export default TimeLeft;
