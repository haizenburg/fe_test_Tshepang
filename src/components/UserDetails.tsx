"use client";

import React, { useState, useEffect } from "react";
import { User } from "../lib/api";

interface UserDetailsProps {
  user: User;
}

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  const [showContact, setShowContact] = useState(false);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [answer, setAnswer] = useState("");
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    setNum1(Math.floor(Math.random() * 90) + 10);
    setNum2(Math.floor(Math.random() * 90) + 10);
    const isBlocked = localStorage.getItem("blockedContact") === "true";
    setBlocked(isBlocked);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(answer) === num1 + num2) {
      setShowContact(true);
    } else {
      setAttempts(attempts + 1);
      if (attempts >= 1) {
        localStorage.setItem("blockedContact", "true");
        setBlocked(true);
      } else {
        setNum1(Math.floor(Math.random() * 90) + 10);
        setNum2(Math.floor(Math.random() * 90) + 10);
      }
      setAnswer("");
    }
  };

  const maskedEmail = user.email.replace(/(.{2})(.*)(@.*)/, "$1****$3");
  const maskedPhone = user.phone.replace(/(\d{3})(.*)(\d{4})/, "$1-***-$3");

  if (blocked) {
    return (
      <div>
        Contact information is blocked due to too many incorrect attempts.
      </div>
    );
  }

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">{user.name}</h2>
      <p className="mb-2">Website: {user.website}</p>
      <p className="mb-4">Company: {user.company.name}</p>
      {!showContact && (
        <form onSubmit={handleSubmit} className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Solve this to see contact info: {num1} + {num2} =
          </label>
          <input
            type="number"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2"
          >
            Submit
          </button>
        </form>
      )}
      {showContact && (
        <div>
          <p className="mb-2">Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      )}
      {!showContact && (
        <div>
          <p className="mb-2">Email: {maskedEmail}</p>
          <p>Phone: {maskedPhone}</p>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
