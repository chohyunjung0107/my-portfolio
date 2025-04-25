import Link from "next/link";

export default function HeaderComponent() {
  return (
    <div className="w-full border-b">
      <ul className="flex  h-[7vh] gap-4 justify-center items-center ">
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/workspace">workspace</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
      </ul>
    </div>
  );
}
