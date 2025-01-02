import { db } from "@/utils/firebase.js";
import { collection, addDoc } from "firebase/firestore";

export const POST = async (req: Request) => {
  const { name, email } = await req.json();

  try {
    await addDoc(collection(db, "accounts"), {
      name: name,
      email: email,
    });

    return Response.json({ message: "OK" }, { status: 200 });
  } catch (err) {
    return Response.json(
      { message: `Internal Server Error: ${err}` },
      { status: 500 },
    );
  }
};
