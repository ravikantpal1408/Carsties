"use client";
import { Dropdown, DropdownDivider, DropdownItem } from "flowbite-react";
import { User } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { AiFillCar, AiFillTrophy, AiOutlineLogout } from "react-icons/ai";
import { HiCog, HiUser } from "react-icons/hi";

type Props = {
  user: User;
};

export default function UserActions({ user }: Props) {
  return (
    <Dropdown inline label={`Welcome ${user.name}`} className="cursor-pointer">
      <DropdownItem icon={HiUser}>My Auctions</DropdownItem>
      <DropdownItem icon={AiFillTrophy}>Auction Won</DropdownItem>
      <Link href={"/auctions/create"}>
        <DropdownItem icon={AiFillCar}>Sell My Car</DropdownItem>
      </Link>
      <Link href="/session">
        <DropdownItem icon={HiCog}>Session (dev only)!</DropdownItem>
      </Link>
      <DropdownDivider />
      <DropdownItem
        icon={AiOutlineLogout}
        onClick={() => signOut({ redirectTo: "/" })}
      >
        Sign Out
      </DropdownItem>
    </Dropdown>
  );
}
