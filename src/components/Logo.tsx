import Image from "next/image";

export function Logo({ tone = "default" }: { tone?: "default" | "light" }) {
  return (
    <Image
      src="/logo.png"
      alt="DA ELITES Virtual Tutoring"
      width={399}
      height={91}
      priority={tone !== "light"}
      className="h-9 w-auto sm:h-11"
    />
  );
}
