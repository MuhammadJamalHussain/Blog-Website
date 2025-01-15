import Link from "next/link";

export default function Header() {
  return (
      <header>
        <nav className="p-4 bg-[#6A9C89] items-center flex justify-between">
          <div className="flex items-center">
              <Link href="/">
                <img src="/images/logo.png" alt="logo" className="h-10 w-25" />
              </Link>
          </div>
          <div className="hover:text-green-200">
              <h1 className="ml-10 text-2xl font-Menlo font-bold">TECH BLOG</h1>
          </div>



          <ul className="navList flex gap-8 justify-center">
            <li className="hover:text-green-200  font-semibold">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-green-200 font-semibold">
              <Link href="/About">About</Link>
            </li>
            <li className="hover:text-green-200 font-semibold">
              <Link href="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
  );




//   <header>
//   <nav className="p-4 bg-slate-200 flex justify-between items-center">
//     {/* Logo Section */}
//     <div className="flex items-center">
//       <Link href="/">
//         <img
//           src="/path/to/your/logo.png" // Replace with your logo path
//           alt="Logo"
//           className="h-10 mr-3"
//         />
//       </Link>
//       <h1 className="text-xl font-bold">My Blog</h1>
//     </div>

//     {/* Navigation Links */}
//     <ul className="navList flex gap-8">
//       <li>
//         <Link href="/">Home</Link>
//       </li>
//       <li>
//         <Link href="/page1">Page 1</Link>
//       </li>
//       <li>
//         <Link href="/page2">Page 2</Link>
//       </li>
//     </ul>

//     {/* Settings / Profile Section */}
//     <div className="flex items-center gap-4">
//       <Link href="/settings">Settings</Link>
//       <Link href="/profile">Profile</Link>
//     </div>
//   </nav>
// // </header>
// );

}
