import React from 'react'
import ReusableTable from './ReusableTable';
import GameGrid from './GameGrid'
import { GiTv } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";

const MainBody = () => {

  const tableData = [
    {
      game: "Ball by Ball",
      icons: ["🟢", <GiTv />, "f"],
      odds: [
        { leftValue1: "2.34", rightValue1: "2.38", isLocked: false },
        { leftValue2: "1.73", rightValue2: "1.75", isLocked: false },
        { leftValue3: "1.50", rightValue3: "1.55", isLocked: false },
      ],
    },
    {
      game: "Chattogram Division v Khulna Division",
      date: "21/12/2024 09:00:00",
      icons: ["🟢", <GiTv />, "BM"],
      odds: [
        { leftValue1: "2.34", rightValue1: "2.38", isLocked: false },
        { leftValue2: "1.73", rightValue2: "1.75", isLocked: false },
        { leftValue3: "1.50", rightValue3: "1.55", isLocked: false },
      ],
    },
    {
      game: "Hobart Hurricanes v Perth Scorchers",
      date: "21/12/2024 10:30:00",
      icons: ["🟢", <GiTv />, "f", "BM"],
      odds: [
        { leftValue1: "1.01", rightValue1: "1.02", isLocked: false },
        { leftValue2: "1.10", rightValue2: "1.12", isLocked: false },
        { leftValue3: "1.20", rightValue3: "1.22", isLocked: false },
      ],
    },
    {
      game: "Kolkata Knight Riders XI v Gujarat Titans XI",
      date: "21/12/2024 10:50:00",
      icons: ["🟢", <GiTv />, "f", <IoGameController />],
      odds: [
        { leftValue1: "-", rightValue1: "-", isLocked: true },
        { leftValue2: "-", rightValue2: "-", isLocked: true },
        { leftValue3: "-", rightValue3: "-", isLocked: true },
      ],
    },
    {
      game: "Australia T10 v New Zealand T10",
      date: "21/12/2024 11:00:00",
      icons: ["🟢", <GiTv />, "f"],
      odds: [
        { leftValue1: "2.34", rightValue1: "2.38", isLocked: false },
        { leftValue2: "1.73", rightValue2: "1.75", isLocked: false },
        { leftValue3: "1.50", rightValue3: "1.55", isLocked: false },
      ],
    },
    {
      game: "Lake City Panthers v Markhors",
      date: "21/12/2024 11:30:00",
      icons: ["🟢", <GiTv />, "BM"],
      odds: [
        { leftValue1: "-", rightValue1: "-", isLocked: true },
        { leftValue2: "-", rightValue2: "-", isLocked: true },
        { leftValue3: "-", rightValue3: "-", isLocked: true },
      ],
    },
    {
      game: "Test A v Test B",
      date: "05/12/2024 00:00:00",
      icons: ["BM"],
      odds: [
        { leftValue1: "-", rightValue1: "-", isLocked: true },
        { leftValue2: "-", rightValue2: "-", isLocked: true },
        { leftValue3: "-", rightValue3: "-", isLocked: true },
      ],
    },
    {
      game: "SLZ XI v BT XI",
      date: "21/12/2024 11:40:00",
      icons: ["f", "BM", <IoGameController />],
      odds: [
        { leftValue1: "-", rightValue1: "-", isLocked: true },
        { leftValue2: "1.89", rightValue2: "1.92", isLocked: false },
        { leftValue3: "2.12", rightValue3: "2.15", isLocked: false },
      ],
    },
    {
      game: "New Zealand T10 v South Africa T10",
      date: "21/12/2024 11:40:00",
      icons: ["f"],
      odds: [
        { leftValue1: "-", rightValue1: "-", isLocked: true },
        { leftValue2: "-", rightValue2: "-", isLocked: true },
        { leftValue3: "-", rightValue3: "-", isLocked: true },
      ],
    },
    {
      game: "Sudurpaschim Royals v Janakpur Bolts",
      date: "21/12/2024 12:15:00",
      icons: ["f"],
      odds: [
        { leftValue1: "-", rightValue1: "-", isLocked: true },
        { leftValue2: "-", rightValue2: "-", isLocked: true },
        { leftValue3: "-", rightValue3: "-", isLocked: true },
      ],
    },
    {
      game: "Brisbane Heat T10 v Adelaide Strikers T10",
      date: "21/12/2024 12:40:00",
      icons: ["🟢", <IoGameController />],
      odds: [
        { leftValue1: "1.35", rightValue1: "1.40", isLocked: false },
        { leftValue2: "3.75", rightValue2: "3.80", isLocked: false },
        { leftValue3: "3.85", rightValue3: "3.90", isLocked: false },
      ],
    },
    {
      game: "Zimbabwe v Afghanistan",
      date: "21/12/2024 13:00:00",
      icons: ["f"],
      odds: [
        { leftValue1: "-", rightValue1: "-", isLocked: true },
        { leftValue2: "-", rightValue2: "-", isLocked: true },
        { leftValue3: "-", rightValue3: "-", isLocked: true },
      ],
    },
    {
      game: "Dhaka Metropolis v Rangpur Division",
      date: "21/12/2024 13:00:00",
      icons: ["f", "BM"],
      odds: [
        { leftValue1: "2.02", rightValue1: "2.05", isLocked: false },
        { leftValue2: "2.04", rightValue2: "2.08", isLocked: false },
        { leftValue3: "1.97", rightValue3: "2.00", isLocked: false },
      ],
    },
    {
      game: "Sydney Thunder v Sydney Sixers",
      date: "21/12/2024 13:45:00",
      icons: ["f", "BM"],
      odds: [
        { leftValue1: "-", rightValue1: "-", isLocked: true },
        { leftValue2: "-", rightValue2: "-", isLocked: true },
        { leftValue3: "-", rightValue3: "-", isLocked: true },
      ],
    },
    {
      game: "India T10 v South Africa T10",
      date: "21/12/2024 13:55:00",
      icons: ["f"],
      odds: [
        { leftValue1: "-", rightValue1: "-", isLocked: true },
        { leftValue2: "-", rightValue2: "-", isLocked: true },
        { leftValue3: "-", rightValue3: "-", isLocked: true },
      ],
    },
    {
      game: "ABL Stallions v Dolphins",
      date: "21/12/2024 16:00:00",
      icons: ["f"],
      odds: [
        { leftValue1: "1.77", rightValue1: "1.80", isLocked: false },
        { leftValue2: "1.45", rightValue2: "1.48", isLocked: false },
        { leftValue3: "3.3", rightValue3: "3.4", isLocked: false },
      ],
    },
    {
      game: "ACT Meteors v Queensland Fire",
      date: "22/12/2024 04:30:00",
      icons: ["f"],
      odds: [
        { leftValue1: "-", rightValue1: "-", isLocked: true },
        { leftValue2: "-", rightValue2: "-", isLocked: true },
        { leftValue3: "-", rightValue3: "-", isLocked: true },
      ],
    },
    {
      game: "India Women v West Indies Women",
      date: "22/12/2024 13:30:00",
      icons: ["f"],
      odds: [
        { leftValue1: "1.1", rightValue1: "1.15", isLocked: false },
        { leftValue2: "13.5", rightValue2: "14.0", isLocked: false },
        { leftValue3: "1.29", rightValue3: "1.32", isLocked: false },
      ],
    },
    {
      game: "Brisbane Heat v Adelaide Strikers",
      date: "22/12/2024 13:45:00",
      icons: ["f"],
      odds: [
        { leftValue1: "1.95", rightValue1: "1.97", isLocked: false },
        { leftValue2: "2.04", rightValue2: "2.06", isLocked: false },
        { leftValue3: "2.12", rightValue3: "2.15", isLocked: false },
      ],
    },
  ];
  


  const games = [
    { imageSrc: "https://nd.sprintstaticdata.com/casino-icons/lc/ourroullete.jpg" },
    { imageSrc: "https://nd.sprintstaticdata.com/casino-icons/lc/superover3.jpg" },
    { imageSrc: "https://nd.sprintstaticdata.com/casino-icons/lc/goal.jpg" },
    { imageSrc: "https://nd.sprintstaticdata.com/casino-icons/lc/ab4.jpg" },
    { imageSrc: "https://nd.sprintstaticdata.com/casino-icons/lc/lucky15.jpg" },
    { imageSrc: "https://nd.sprintstaticdata.com/casino-icons/lc/superover2.jpg" },
    { imageSrc: "https://nd.sprintstaticdata.com/casino-icons/lc/teen41.jpg" },
    { imageSrc: "https://nd.sprintstaticdata.com/casino-icons/lc/teen42.jpg" },
    { imageSrc: "https://nd.sprintstaticdata.com/casino-icons/lc/roulette3.jpg" },
    { imageSrc: "https://nd.sprintstaticdata.com/casino-icons/lc/sicbo2.jpg" },
    { imageSrc: "https://nd.sprintstaticdata.com/casino-icons/lc/roulette2.jpg" },
    { imageSrc: "https://nd.sprintstaticdata.com/casino-icons/lc/teen33.jpg" },
    { imageSrc: "https://nd.sprintstaticdata.com/casino-icons/lc/sicbo.jpg" },
    { imageSrc: "https://nd.sprintstaticdata.com/casino-icons/lc/ballbyball.jpg" },
    { imageSrc: "https://nd.sprintstaticdata.com/casino-icons/lc/teen32.jpg" },
    { imageSrc: "https://nd.sprintstaticdata.com/casino-icons/lc/roulette1.jpg" },
    { imageSrc: "https://nd.sprintstaticdata.com/casino-icons/lc/teen.jpg" },
    { imageSrc: "https://nd.sprintstaticdata.com/casino-icons/lc/teen20.jpg" },
  ];

  return (
    <div>
      <div className="mt-2 p-2">
        <ReusableTable data={tableData} />
      </div>
      <div className="">
        <GameGrid games={games} />
      </div>
    </div>
  )
}

export default MainBody