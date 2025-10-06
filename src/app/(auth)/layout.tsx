// import React from "react";

// function layout() {
//   return <div>layoutxcvcvnvbmbnm</div>;
// }

// export default layout;









export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Common UI like navbar, sidebar, etc */}
      {children}   {/* 👈 iske bina andar ka page (login/register) dikhega hi nahi */}
    </div>
  );
}
