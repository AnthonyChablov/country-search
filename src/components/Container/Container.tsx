import React from "react";

const Container = ({children}: { children: React.ReactNode }  ) => {
  return (
    <div className="py-8 px-4 max-w-6xl mx-auto">
        {children}
    </div>
  )
}

export default Container