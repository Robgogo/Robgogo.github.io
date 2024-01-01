"use client";
import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { TimerContainer } from "@/components/TimerContainer";
import { BasicModal } from "@/components/BasicModal";

const TimeLeft: NextPage = () => {
  const [time, setTime] = useState<number>(0);
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);

  const timeToDays = 60 * 60 * 24 * 1000;

  let countDownDate =
    new Date("2024-01-08T09:00:00.000+0300").getTime() + timeToDays;

  useEffect(() => {
    let updateTime = setInterval(() => {
      let now = new Date().getTime();

      let difference = countDownDate - now;

      let newDays = Math.floor(difference / (1000 * 60 * 60 * 24) - 1);
      let newHours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let newMinutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      let newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

      if (newDays === 6 || newDays === 5 || newDays === 4) {
        setShowModal(true);
      }

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
      <TimerContainer
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
      {showModal && <BasicModal />}
    </div>
  );
};

export default TimeLeft;
