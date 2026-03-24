import { supabase } from "@/lib/supabaseClient";

export const addScore = async (userId, score) => {
  const { data } = await supabase
    .from("scores")
    .select("*")
    .eq("user_id", userId)
    .order("date", { ascending: false });

  if (data.length >= 5) {
    const oldest = data[data.length - 1];
    await supabase.from("scores").delete().eq("id", oldest.id);
  }

  await supabase.from("scores").insert({
    user_id: userId,
    score,
  });
};