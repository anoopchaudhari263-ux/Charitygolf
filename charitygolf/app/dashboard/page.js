"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { addScore } from "@/services/scoreService";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [score, setScore] = useState("");

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });
  }, []);

  const handleAdd = () => {
    addScore(user.id, Number(score));
  };

  return (
    <div className="p-10">
      <h1>Dashboard</h1>
      <input onChange={(e)=>setScore(e.target.value)} />
      <button onClick={handleAdd}>Add Score</button>
    </div>
  );
}